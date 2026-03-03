import { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: 'General Inquiry',
        message: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Thank you for your message! We will get back to you soon.');
        setFormData({ name: '', email: '', subject: 'General Inquiry', message: '' });
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <div className="contact-page grid-bg">
            <section className="contact-hero section-padding">
                <div className="container">
                    <div className="section-header">
                        <h2>Get In <span className="gradient-text">Touch</span></h2>
                        <p>Have a question or want to discuss a project? We'd love to hear from you.</p>
                    </div>

                    <div className="contact-grid">
                        <div className="contact-info">
                            <div className="info-card">
                                <div className="info-icon"><Mail /></div>
                                <div>
                                    <h4>Email Us</h4>
                                    <p>hello@cogniqai.com</p>
                                </div>
                            </div>
                            <div className="info-card">
                                <div className="info-icon"><Phone /></div>
                                <div>
                                    <h4>Call Us</h4>
                                    <p>+1 (234) 567-890</p>
                                </div>
                            </div>
                            <div className="info-card">
                                <div className="info-icon"><MapPin /></div>
                                <div>
                                    <h4>Visit Us</h4>
                                    <p>123 AI Plaza, Tech City, TC 54321</p>
                                </div>
                            </div>

                            <div className="contact-map">
                                <iframe
                                    title="map"
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3450.534575!2d-0.127758!3d51.507351!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604ce17614a63%3A0xda9115bc992c686d!2sTrafalgar%20Square!5e0!3m2!1sen!2suk!4v1620000000000!5m2!1sen!2suk"
                                    width="100%"
                                    height="250"
                                    style={{ border: 0, borderRadius: '15px' }}
                                    allowFullScreen=""
                                    loading="lazy"
                                ></iframe>
                            </div>
                        </div>

                        <div className="contact-form-container">
                            <form className="contact-form" onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <label>Full Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="John Doe"
                                        required
                                        value={formData.name}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Email Address</label>
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="john@example.com"
                                        required
                                        value={formData.email}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Subject</label>
                                    <select
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                    >
                                        <option>General Inquiry</option>
                                        <option>Product Support</option>
                                        <option>Partnership</option>
                                        <option>AI Consulting</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label>Message</label>
                                    <textarea
                                        name="message"
                                        rows="5"
                                        placeholder="How can we help you?"
                                        required
                                        value={formData.message}
                                        onChange={handleChange}
                                    ></textarea>
                                </div>
                                <button type="submit" className="btn-primary form-submit">
                                    Send Message <Send size={18} />
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
