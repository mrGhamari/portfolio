import { useState, useCallback, memo, useMemo } from 'react';
import { CONTACT_INFO, SOCIAL_LINKS } from '@/constants/data';
import './Contact.css';

const INITIAL_FORM_STATE = {
  name: '',
  email: '',
  message: '',
};

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

const FormInput = memo(function FormInput({
  type = 'text',
  id,
  name,
  label,
  value,
  onChange,
  required = true,
}) {
  return (
    <div className="form-group">
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        autoComplete={name}
      />
    </div>
  );
});

function Contact() {
  const [formData, setFormData] = useState(INITIAL_FORM_STATE);
  const [status, setStatus] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }, []);

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      if (isSubmitting) return;

      setIsSubmitting(true);
      setStatus(null);

      try {
        // Simulate form submission
        await new Promise((resolve) => setTimeout(resolve, 1000));
        setStatus('success');
        setFormData(INITIAL_FORM_STATE);
      } catch {
        setStatus('error');
      } finally {
        setIsSubmitting(false);
        setTimeout(() => setStatus(null), 5000);
      }
    },
    [isSubmitting]
  );

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
          <aside className="contact-info">
            {contactInfoItems}
            <div className="social-links" aria-label="Social media links">
              {socialLinkItems}
            </div>
          </aside>

          <div className="contact-form">
            <form onSubmit={handleSubmit} noValidate>
              <FormInput
                id="name"
                name="name"
                label="Name"
                value={formData.name}
                onChange={handleChange}
              />
              <FormInput
                type="email"
                id="email"
                name="email"
                label="Email"
                value={formData.email}
                onChange={handleChange}
              />
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                />
              </div>

              <button
                type="submit"
                className="btn btn-primary"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>

              {status === 'success' && (
                <div className="form-success" role="alert">
                  Your message has been sent successfully!
                </div>
              )}

              {status === 'error' && (
                <div className="form-error" role="alert">
                  Failed to send message. Please try again.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default memo(Contact);
