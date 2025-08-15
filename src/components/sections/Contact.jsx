import React, { useState, useCallback, memo } from 'react';
import './Contact.css';

const InfoItem = memo(({ icon, title, content }) => (
  <div className="info-item">
    <div className="info-icon">
      <i className={icon}></i>
    </div>
    <div className="info-content">
      <h3>{title}</h3>
      <p>{content}</p>
    </div>
  </div>
));

const SocialLink = memo(({ icon, url }) => (
  <a
    href={url}
    className="social-link"
    target="_blank"
    rel="noopener noreferrer"
  >
    <i className={icon}></i>
  </a>
));

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState(null);

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }, []);

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    // Here you can add the code to send the form to the server
    setStatus('success');
    setTimeout(() => {
      setStatus(null);
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
  }, []);

  const [GeneralInformation] = useState([
    {
      title: 'Location',
      icon: 'map-marker-alt',
      content: 'Iran, Tehran',
    },
    {
      title: 'Phone',
      icon: 'phone',
      content: '+98 933 975 2422',
    },
    {
      title: 'Email',
      icon: 'envelope',
      content: 'mmdrza77@gmail.com',
    },
  ]);
  const [socialMediaLinks] = useState([
    { icon: 'github', url: 'https://github.com/mrGhamari' },
    { icon: 'linkedin', url: 'https://www.linkedin.com/in/mrghamari' },
    { icon: 'instagram', url: 'https://www.instagram.com/_mmdrza_' },
    { icon: 'telegram', url: 'https://t.me/mmdrza' },
  ]);

  return (
    <section className="contact" id="contact" dir="ltr">
      <div className="container">
        <h2 className="section-title">Contact Me</h2>
        <div className="contact-container">
          <div className="contact-info">
            {GeneralInformation.map((info, index) => (
              <InfoItem
                key={index}
                icon={`fas fa-${info.icon}`}
                title={info.title}
                content={info.content}
              />
            ))}

            <div className="social-links">
              {socialMediaLinks.map((socialMedia, index) => (
                <SocialLink
                  key={index}
                  icon={`fab fa-${socialMedia.icon}`}
                  url={socialMedia.url}
                />
              ))}
            </div>
          </div>
          <div className="contact-form">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary">
                Send Message
              </button>

              {status === 'success' && (
                <div className="form-success">
                  Your message has been sent successfully!
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
