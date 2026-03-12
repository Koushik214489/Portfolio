import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Server, Database } from 'lucide-react';
import './About.css';

const About = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.3 }
        }
    };

    const itemVariants = {
        hidden: { y: 50, opacity: 0 },
        visible: { y: 0, opacity: 1, transition: { duration: 0.6 } }
    };

    return (
        <section id="about" className="about-section">
            <h2 className="section-title">About <span className="gradient-text">Me</span></h2>

            <motion.div
                className="about-content"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
            >
                <motion.div className="about-text glass" variants={itemVariants}>
                    <p>
                        I am a Full-Stack Developer currently pursuing a Bachelor of Technology in Computer Science Engineering at Alliance University, specializing in Software Product Engineering.
                    </p>
                    <p>
                        I enjoy building scalable web applications using the MERN stack (MongoDB, Express, React, Node.js). My interests include designing efficient backend systems, creating intuitive frontend interfaces, and implementing secure authentication systems.
                    </p>
                    <p>
                        I actively practice Data Structures and Algorithms and enjoy solving problems on LeetCode while continuously improving my product-building skills.
                    </p>
                </motion.div>

                <motion.div className="about-cards" variants={itemVariants}>
                    <div className="feature-card glass">
                        <div className="icon-wrapper bg-blue">
                            <Code2 size={24} />
                        </div>
                        <h3>Frontend Magic</h3>
                        <p>Creating intuitive, responsive and dynamic user interfaces with React and Next.js.</p>
                    </div>

                    <div className="feature-card glass">
                        <div className="icon-wrapper bg-purple">
                            <Server size={24} />
                        </div>
                        <h3>Backend Systems</h3>
                        <p>Designing efficient architectures and APIs using Express and Node.js.</p>
                    </div>

                    <div className="feature-card glass">
                        <div className="icon-wrapper bg-neon">
                            <Database size={24} />
                        </div>
                        <h3>Database Design</h3>
                        <p>Structuring scalable data models in MongoDB and real-time processing.</p>
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default About;
