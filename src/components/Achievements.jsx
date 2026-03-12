import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Users, Award } from 'lucide-react';
import './Achievements.css';

const Achievements = () => {
    return (
        <section id="achievements" className="achievements-section">
            <h2 className="section-title">My <span className="gradient-text">Achievements</span></h2>

            <div className="achievements-container">
                <motion.div
                    className="achievement-card glass"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
                >
                    <div className="achievement-icon-wrapper">
                        <Trophy size={40} className="trophy-icon" />
                        <div className="icon-glow"></div>
                    </div>

                    <div className="achievement-content">
                        <h3 className="achievement-title">AI Hackathon – Campus Level Prototype Round</h3>

                        <p className="achievement-desc">
                            Participated in a campus AI hackathon demonstrating innovation and technical execution during the prototype development phase.
                        </p>

                        <div className="achievement-stats">
                            <div className="stat-item">
                                <Users size={18} className="stat-icon" />
                                <span>368 Participants</span>
                            </div>
                            <div className="stat-item">
                                <Award size={18} className="stat-icon" />
                                <span>88 Teams</span>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Achievements;
