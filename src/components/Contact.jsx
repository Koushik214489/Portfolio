import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Github, Linkedin, Send } from 'lucide-react';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Normally handle form submission here
        console.log(formData);
        alert('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <section id="contact" className="contact-section">
            <h2 className="section-title">Get In <span className="gradient-text">Touch</span></h2>

            <div className="contact-container">
                <motion.div
                    className="contact-info glass"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6 }}
                >
                    <h3>Contact Information</h3>
                    <p className="contact-desc">
                        Feel free to reach out for collaborations, opportunities, or just to say hello!
                    </p>

                    <div className="info-list">
                        <div className="info-item">
                            <div className="icon-wrapper bg-blue">
                                <Mail size={20} />
                            </div>
                            <div className="info-content">
                                <span className="info-label">Email</span>
                                <a href="mailto:koushikreddykm@gmail.com" className="info-value">koushikreddykm@gmail.com</a>
                            </div>
                        </div>

                        <div className="info-item">
                            <div className="icon-wrapper bg-neon">
                                <Phone size={20} />
                            </div>
                            <div className="info-content">
                                <span className="info-label">Phone</span>
                                <span className="info-value">+91-8310852214</span>
                            </div>
                        </div>

                        <div className="info-item">
                            <div className="icon-wrapper bg-purple">
                                <MapPin size={20} />
                            </div>
                            <div className="info-content">
                                <span className="info-label">Location</span>
                                <span className="info-value">Bangalore, Karnataka, India</span>
                            </div>
                        </div>
                    </div>

                    <div className="social-links-contact">
                        <h4>Follow Me</h4>
                        <div className="social-icons">
                            <a href="https://github.com/Koushik214489" target="_blank" rel="noreferrer" className="social-icon">
                                <Github size={24} />
                            </a>
                            <a href="https://www.linkedin.com/in/koushik-reddy-km/" target="_blank" rel="noreferrer" className="social-icon">
                                <Linkedin size={24} />
                            </a>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    className="contact-form-wrapper glass"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <form className="contact-form" onSubmit={handleSubmit}>
                        <div className="input-group">
                            <input
                                type="text"
                                id="name"
                                name="name"
                                placeholder=" "
                                required
                                value={formData.name}
                                onChange={handleChange}
                            />
                            <label htmlFor="name">Your Name</label>
                            <div className="input-glow"></div>
                        </div>

                        <div className="input-group">
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder=" "
                                required
                                value={formData.email}
                                onChange={handleChange}
                            />
                            <label htmlFor="email">Your Email</label>
                            <div className="input-glow"></div>
                        </div>

                        <div className="input-group">
                            <textarea
                                id="message"
                                name="message"
                                placeholder=" "
                                rows="5"
                                required
                                value={formData.message}
                                onChange={handleChange}
                            ></textarea>
                            <label htmlFor="message">Your Message</label>
                            <div className="input-glow"></div>
                        </div>

                        <button type="submit" className="glow-btn submit-btn">
                            Send Message <Send size={18} />
                        </button>
                    </form>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
