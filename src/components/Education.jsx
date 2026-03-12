import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, BookOpen } from 'lucide-react';
import './Education.css';

const Education = () => {
    return (
        <section id="education" className="education-section">
            <h2 className="section-title">My <span className="gradient-text">Education</span></h2>

            <div className="education-container">
                <div className="timeline-line"></div>

                <motion.div
                    className="education-card glass"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="timeline-dot"></div>

                    <div className="edu-header">
                        <div className="edu-icon-bg">
                            <GraduationCap size={28} className="edu-icon" />
                        </div>
                        <div className="edu-title-group">
                            <h3 className="edu-degree">Bachelor of Technology (B.Tech)</h3>
                            <h4 className="edu-major">Computer Science Engineering</h4>
                        </div>
                    </div>

                    <div className="edu-university">
                        Alliance University – Bangalore
                    </div>
                    <div className="edu-specialization">
                        Specialization: Software Product Engineering
                    </div>

                    <div className="edu-meta">
                        <div className="edu-duration">
                            <Calendar size={16} />
                            <span>2024 – 2028</span>
                        </div>
                    </div>

                    <div className="edu-coursework mt-4">
                        <div className="coursework-title">
                            <BookOpen size={16} />
                            <span>Relevant Coursework:</span>
                        </div>
                        <div className="coursework-tags">
                            {['Java', 'C++', 'Python', 'HTML', 'CSS', 'JavaScript'].map((course, idx) => (
                                <span key={idx} className="course-tag">{course}</span>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Education;
