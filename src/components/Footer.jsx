import React from 'react';
import { Github, Linkedin, Twitter, Heart } from 'lucide-react';
import './Footer.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="footer-glow"></div>

            <div className="footer-content">
                <div className="footer-brand">
                    <span className="gradient-text logo-text">&lt;Koushik /&gt;</span>
                    <p className="footer-tagline">Building digital products with purpose.</p>
                </div>

                <div className="footer-links">
                    <div className="footer-nav">
                        <a href="#home">Home</a>
                        <a href="#about">About</a>
                        <a href="#projects">Projects</a>
                        <a href="#contact">Contact</a>
                    </div>

                    <div className="footer-socials">
                        <a href="https://github.com/Koushik214489" target="_blank" rel="noreferrer" className="social-pill">
                            <Github size={18} />
                            <span>GitHub</span>
                        </a>
                        <a href="https://www.linkedin.com/in/koushik-reddy-km/" target="_blank" rel="noreferrer" className="social-pill">
                            <Linkedin size={18} />
                            <span>LinkedIn</span>
                        </a>
                    </div>
                </div>
            </div>

            <div className="footer-bottom glass">
                <p className="copyright">
                    &copy; {currentYear} Koushik Reddy KM. All rights reserved.
                </p>
                <p className="crafted">
                    Crafted with <Heart size={14} className="heart-icon" /> & Coffee
                </p>
            </div>
        </footer>
    );
};

export default Footer;
