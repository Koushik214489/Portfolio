import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Mail, ArrowRight } from 'lucide-react';
import './Hero.css';

const Hero = () => {
    const words = ["Full Stack Developer", "MERN Stack Developer", "Problem Solver", "Tech Enthusiast"];
    const [currentWordIndex, setCurrentWordIndex] = React.useState(0);
    const [currentText, setCurrentText] = React.useState("");
    const [isDeleting, setIsDeleting] = React.useState(false);

    useEffect(() => {
        const typingSpeed = isDeleting ? 50 : 100;
        const currentWord = words[currentWordIndex];

        if (!isDeleting && currentText === currentWord) {
            setTimeout(() => setIsDeleting(true), 2000);
            return;
        } else if (isDeleting && currentText === "") {
            setIsDeleting(false);
            setCurrentWordIndex((prev) => (prev + 1) % words.length);
            return;
        }

        const timeout = setTimeout(() => {
            setCurrentText(prev =>
                isDeleting ? prev.slice(0, -1) : currentWord.slice(0, prev.length + 1)
            );
        }, typingSpeed);

        return () => clearTimeout(timeout);
    }, [currentText, isDeleting, currentWordIndex]);

    return (
        <section id="home" className="hero-section">
            <div className="hero-content">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="hero-text-container"
                >
                    <div className="greeting glass">Hello, I'm</div>
                    <h1 className="name">Koushik Reddy <span className="gradient-text">KM</span></h1>

                    <h2 className="typing-text">
                        <span>{currentText}</span>
                        <span className="cursor">|</span>
                    </h2>

                    <p className="tagline">
                        "Building scalable web applications and crafting meaningful digital experiences using modern web technologies."
                    </p>

                    <div className="hero-buttons">
                        <a href="#projects" className="glow-btn">
                            View Projects <ArrowRight size={18} />
                        </a>
                        <a href="#contact" className="glow-btn secondary">
                            Contact Me
                        </a>
                    </div>

                    <div className="quick-contact glass">
                        <div className="contact-item">
                            <MapPin size={18} className="icon-blue" />
                            <span>Bangalore, Karnataka</span>
                        </div>
                        <div className="contact-item">
                            <Mail size={18} className="icon-purple" />
                            <span>koushikreddykm@gmail.com</span>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* 3D Animated Background Elements */}
            <div className="floating-elements">
                <div className="floating-shape shape-1"></div>
                <div className="floating-shape shape-2"></div>
                <div className="floating-shape shape-3"></div>
            </div>
        </section>
    );
};

export default Hero;
