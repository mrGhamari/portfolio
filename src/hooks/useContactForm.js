import { useState, useCallback, useRef, useEffect } from 'react';

const VALIDATION_RULES = {
  name: {
    required: true,
    minLength: 2,
    messages: {
      required: 'Name is required',
      minLength: 'Name must be at least 2 characters',
    },
  },
  email: {
    required: true,
    pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    messages: {
      required: 'Email is required',
      pattern: 'Please enter a valid email address',
    },
  },
  message: {
    required: true,
    minLength: 10,
    messages: {
      required: 'Message is required',
      minLength: 'Message must be at least 10 characters',
    },
  },
};

export const FormStatus = {
  IDLE: 'idle',
  SUBMITTING: 'submitting',
  SUCCESS: 'success',
  ERROR: 'error',
};

const createInitialState = (fields) =>
  fields.reduce((acc, field) => ({ ...acc, [field]: '' }), {});

const validateField = (name, value) => {
  const rules = VALIDATION_RULES[name];
  if (!rules) return '';

  const trimmedValue = value.trim();

  if (rules.required && !trimmedValue) {
    return rules.messages.required;
  }

  if (rules.minLength && trimmedValue.length < rules.minLength) {
    return rules.messages.minLength;
  }

  if (rules.pattern && !rules.pattern.test(value)) {
    return rules.messages.pattern;
  }

  return '';
};

export function useContactForm(options = {}) {
  const {
    fields = ['name', 'email', 'message'],
    onSubmit,
    statusResetDelay = 5000,
  } = options;

  const initialFormState = createInitialState(fields);
  const initialErrorsState = createInitialState(fields);

  const [formData, setFormData] = useState(initialFormState);
  const [errors, setErrors] = useState(initialErrorsState);
  const [status, setStatus] = useState(FormStatus.IDLE);

  const statusTimeoutRef = useRef(null);

  useEffect(() => {
    return () => {
      if (statusTimeoutRef.current) {
        clearTimeout(statusTimeoutRef.current);
      }
    };
  }, []);

  const clearStatusAfterDelay = useCallback(() => {
    if (statusTimeoutRef.current) {
      clearTimeout(statusTimeoutRef.current);
    }
    statusTimeoutRef.current = setTimeout(() => {
      setStatus(FormStatus.IDLE);
    }, statusResetDelay);
  }, [statusResetDelay]);

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => (prev[name] ? { ...prev, [name]: '' } : prev));
  }, []);

  const handleBlur = useCallback((e) => {
    const { name, value } = e.target;
    const error = validateField(name, value);
    setErrors((prev) => ({ ...prev, [name]: error }));
  }, []);

  const validateForm = useCallback(() => {
    const newErrors = fields.reduce(
      (acc, field) => ({
        ...acc,
        [field]: validateField(field, formData[field]),
      }),
      {}
    );
    setErrors(newErrors);
    return !Object.values(newErrors).some(Boolean);
  }, [fields, formData]);

  const resetForm = useCallback(() => {
    setFormData(initialFormState);
    setErrors(initialErrorsState);
    setStatus(FormStatus.IDLE);
  }, [initialFormState, initialErrorsState]);

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();

      if (status === FormStatus.SUBMITTING) return;
      if (!validateForm()) return;

      setStatus(FormStatus.SUBMITTING);

      try {
        if (onSubmit) {
          await onSubmit(formData);
        } else {
          await new Promise((resolve) => setTimeout(resolve, 1000));
        }
        setStatus(FormStatus.SUCCESS);
        setFormData(initialFormState);
        setErrors(initialErrorsState);
        clearStatusAfterDelay();
      } catch {
        setStatus(FormStatus.ERROR);
        clearStatusAfterDelay();
      }
    },
    [
      status,
      validateForm,
      onSubmit,
      formData,
      initialFormState,
      initialErrorsState,
      clearStatusAfterDelay,
    ]
  );

  return {
    formData,
    errors,
    status,
    isSubmitting: status === FormStatus.SUBMITTING,
    isSuccess: status === FormStatus.SUCCESS,
    isError: status === FormStatus.ERROR,
    handleChange,
    handleBlur,
    handleSubmit,
    resetForm,
    setFormData,
    setErrors,
  };
}

export default useContactForm;
