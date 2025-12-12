import { memo, useMemo } from 'react';
import { CONTACT_INFO, SOCIAL_LINKS } from '@/constants/data';
import { useContactForm } from '@/hooks';
import './Contact.css';

const InfoItem = memo(function InfoItem({ icon, title, content }) {
  return (
    <div className="info-item">
      <div className="info-icon" aria-hidden="true">
        <i className={icon} />
      </div>
      <div className="info-content">
        <h3>{title}</h3>
        <p>{content}</p>
      </div>
    </div>
  );
});

const SocialLink = memo(function SocialLink({ icon, url, label }) {
  return (
    <a
      href={url}
      className="social-link"
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
    >
      <i className={icon} aria-hidden="true" />
    </a>
  );
});

const FormField = memo(function FormField({
  as: Component = 'input',
  type = 'text',
  id,
  name,
  label,
  value,
  onChange,
  onBlur,
  error,
  ...props
}) {
  const hasError = Boolean(error);
  const errorId = `${id}-error`;

  return (
    <div className={`form-group ${hasError ? 'has-error' : ''}`}>
      <label htmlFor={id}>{label}</label>
      <Component
        type={Component === 'input' ? type : undefined}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        autoComplete={name}
        aria-invalid={hasError}
        aria-describedby={hasError ? errorId : undefined}
        {...props}
      />
      {hasError && (
        <span id={errorId} className="field-error" role="alert">
          {error}
        </span>
      )}
    </div>
  );
});

const ContactInfo = memo(function ContactInfo({ items, socialLinks }) {
  return (
    <aside className="contact-info">
      {items}
      <div className="social-links" aria-label="Social media links">
        {socialLinks}
      </div>
    </aside>
  );
});

const FormStatus = memo(function FormStatus({ isSuccess, isError }) {
  if (isSuccess) {
    return (
      <div className="form-success" role="alert">
        Your message has been sent successfully!
      </div>
    );
  }

  if (isError) {
    return (
      <div className="form-error" role="alert">
        Failed to send message. Please try again.
      </div>
    );
  }

  return null;
});

const ContactForm = memo(function ContactForm({
  formData,
  errors,
  isSubmitting,
  isSuccess,
  isError,
  onSubmit,
  onChange,
  onBlur,
}) {
  return (
    <div className="contact-form">
      <form onSubmit={onSubmit} noValidate>
        <FormField
          id="name"
          name="name"
          label="Name"
          value={formData.name}
          onChange={onChange}
          onBlur={onBlur}
          error={errors.name}
          required
        />
        <FormField
          type="email"
          id="email"
          name="email"
          label="Email"
          value={formData.email}
          onChange={onChange}
          onBlur={onBlur}
          error={errors.email}
          required
        />
        <FormField
          as="textarea"
          id="message"
          name="message"
          label="Message"
          value={formData.message}
          onChange={onChange}
          onBlur={onBlur}
          error={errors.message}
          rows={5}
          required
        />

        <button
          type="submit"
          className="btn btn-primary"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>

        <FormStatus isSuccess={isSuccess} isError={isError} />
      </form>
    </div>
  );
});

function Contact() {
  const {
    formData,
    errors,
    isSubmitting,
    isSuccess,
    isError,
    handleChange,
    handleBlur,
    handleSubmit,
  } = useContactForm();

  const contactInfoItems = useMemo(
    () =>
      CONTACT_INFO.map((info) => (
        <InfoItem
          key={info.id}
          icon={info.icon}
          title={info.title}
          content={info.content}
        />
      )),
    []
  );

  const socialLinkItems = useMemo(
    () =>
      SOCIAL_LINKS.map((social) => (
        <SocialLink
          key={social.id}
          icon={social.icon}
          url={social.url}
          label={social.label}
        />
      )),
    []
  );

  return (
    <section
      className="contact"
      id="contact"
      dir="ltr"
      aria-label="Contact section"
    >
      <div className="container">
        <h2 className="section-title">Contact Me</h2>
        <div className="contact-container">
          <ContactInfo items={contactInfoItems} socialLinks={socialLinkItems} />
          <ContactForm
            formData={formData}
            errors={errors}
            isSubmitting={isSubmitting}
            isSuccess={isSuccess}
            isError={isError}
            onSubmit={handleSubmit}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </div>
      </div>
    </section>
  );
}

export default memo(Contact);
