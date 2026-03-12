import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Skills', href: '#skills' },
        { name: 'Projects', href: '#projects' },
        { name: 'Education', href: '#education' },
        { name: 'Contact', href: '#contact' }
    ];

    return (
        <nav className={`navbar ${scrolled ? 'glass-nav' : ''}`}>
            <div className="nav-container">
                <a href="#home" className="logo">
                    <span className="gradient-text">&lt;Koushik /&gt;</span>
                </a>

                <div className="desktop-menu">
                    {navLinks.map((link) => (
                        <a key={link.name} href={link.href} className="nav-link">
                            {link.name}
                        </a>
                    ))}
                </div>

                <div className="mobile-toggle" onClick={() => setMobileOpen(!mobileOpen)}>
                    {mobileOpen ? <X size={28} /> : <Menu size={28} />}
                </div>
            </div>

            {/* Mobile Menu */}
            <div className={`mobile-menu glass ${mobileOpen ? 'open' : ''}`}>
                {navLinks.map((link) => (
                    <a
                        key={link.name}
                        href={link.href}
                        className="mobile-link"
                        onClick={() => setMobileOpen(false)}
                    >
                        {link.name}
                    </a>
                ))}
            </div>
        </nav>
    );
};

export default Navbar;
