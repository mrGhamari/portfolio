import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // اینجا می‌توانید کد ارسال فرم به سرور را اضافه کنید
    setStatus('success');
    setTimeout(() => {
      setStatus(null);
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };

  return (
    <section className="contact" id="contact">
      <div className="container">
        <h2 className="section-title">تماس با من</h2>
        <div className="contact-container">
          <div className="contact-info">
            <div className="info-item">
              <div className="info-icon">
                <i className="fas fa-envelope"></i>
              </div>
              <div className="info-content">
                <h3>ایمیل</h3>
                <p>info@example.com</p>
              </div>
            </div>
            <div className="info-item">
              <div className="info-icon">
                <i className="fas fa-phone"></i>
              </div>
              <div className="info-content">
                <h3>شماره تماس</h3>
                <p>09123456789</p>
              </div>
            </div>
            <div className="info-item">
              <div className="info-icon">
                <i className="fas fa-map-marker-alt"></i>
              </div>
              <div className="info-content">
                <h3>آدرس</h3>
                <p>تهران، ایران</p>
              </div>
            </div>
            <div className="social-links">
              <a href="#" className="social-link">
                <i className="fab fa-github"></i>
              </a>
              <a href="#" className="social-link">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="#" className="social-link">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="social-link">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
          <div className="contact-form">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">نام</label>
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
                <label htmlFor="email">ایمیل</label>
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
                <label htmlFor="message">پیام</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary">ارسال پیام</button>
              
              {status === 'success' && (
                <div className="form-success">پیام شما با موفقیت ارسال شد!</div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 