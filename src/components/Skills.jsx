import React from 'react';
import { motion } from 'framer-motion';
import './Skills.css';

const Skills = () => {
    const skillCategories = [
        {
            title: "Programming Languages",
            skills: ["JavaScript (ES6+)", "Python", "Java", "C++"],
            color: "var(--accent-neon)"
        },
        {
            title: "Frontend",
            skills: ["React.js", "Next.js", "HTML5", "CSS3", "Tailwind CSS", "Framer Motion"],
            color: "var(--accent-color)"
        },
        {
            title: "Backend",
            skills: ["Node.js", "Express.js", "RESTful APIs", "JWT Authentication", "OAuth 2.0"],
            color: "var(--accent-purple)"
        },
        {
            title: "Databases",
            skills: ["MongoDB", "Mongoose"],
            color: "#10b981"
        },
        {
            title: "Tools",
            skills: ["Git", "GitHub", "Bruno", "Vercel", "Render"],
            color: "#f59e0b"
        },
        {
            title: "Other Skills",
            skills: ["Authentication Systems", "Real-time apps (Socket.io)", "Deployment pipelines", "API integrations"],
            color: "#ec4899"
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
    };

    return (
        <section id="skills" className="skills-section">
            <h2 className="section-title">Technical <span className="gradient-text">Skills</span></h2>

            <motion.div
                className="skills-dashboard"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
            >
                {skillCategories.map((category, index) => (
                    <motion.div
                        key={index}
                        className="skill-card glass"
                        variants={itemVariants}
                        style={{ '--card-accent': category.color }}
                    >
                        <h3 className="category-title" style={{ color: category.color }}>
                            {category.title}
                        </h3>
                        <div className="skills-list">
                            {category.skills.map((skill, idx) => (
                                <div key={idx} className="skill-pill">
                                    {skill}
                                </div>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
};

export default Skills;
