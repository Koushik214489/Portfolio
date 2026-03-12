import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, MonitorPlay } from 'lucide-react';
import './Projects.css';

const ProjectCard = ({ project }) => {
    const cardRef = useRef(null);
    const [rotation, setRotation] = useState({ x: 0, y: 0 });
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseMove = (e) => {
        if (!cardRef.current) return;

        const rect = cardRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((y - centerY) / centerY) * -15;
        const rotateY = ((x - centerX) / centerX) * 15;

        setRotation({ x: rotateX, y: rotateY });
    };

    const handleMouseEnter = () => setIsHovered(true);

    const handleMouseLeave = () => {
        setIsHovered(false);
        setRotation({ x: 0, y: 0 });
    };

    return (
        <motion.div
            ref={cardRef}
            className="project-card-container glass"
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={{
                transform: `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) scale3d(${isHovered ? 1.02 : 1}, ${isHovered ? 1.02 : 1}, ${isHovered ? 1.02 : 1})`,
                transition: isHovered ? 'none' : 'all 0.5s ease'
            }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
        >

            <div className="card-glow" style={{ opacity: isHovered ? 1 : 0 }}></div>

            <div className="project-header">
                <MonitorPlay className="project-icon" size={36} />

                <div className="project-links">
                    <a href={project.githubLink} target="_blank" rel="noreferrer" className="project-link">
                        <Github size={20} />
                    </a>

                    <a href={project.demoLink} target="_blank" rel="noreferrer" className="project-link">
                        <ExternalLink size={20} />
                    </a>
                </div>
            </div>

            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>

            <div className="project-tech-stack">
                {project.techStack.map((tech, i) => (
                    <span key={i} className="tech-badge">{tech}</span>
                ))}
            </div>

            <div className="project-actions">
                <a href={project.githubLink} target="_blank" rel="noreferrer" className="glow-btn secondary small-btn">
                    View Code
                </a>

                <a href={project.demoLink} target="_blank" rel="noreferrer" className="glow-btn small-btn">
                    Live Demo
                </a>
            </div>

        </motion.div>
    );
};

const Projects = () => {

    const projects = [
        {
            title: "SubWave – Digital Subscription Manager",
            description: "SubWave is a full-stack platform that helps users track and manage digital subscriptions across services. It centralizes subscription information and provides insights about renewal schedules and usage.",
            techStack: [
                "React.js",
                "Node.js",
                "Express.js",
                "MongoDB",
                "OAuth 2.0",
                "REST APIs",
                "Tailwind CSS"
            ],
            githubLink: "https://github.com/Koushik214489/S70_Koushik_Capstone_Sub_wave",
            demoLink: "https://subwavee.netlify.app/"
        }
    ];

    return (
        <section id="projects" className="projects-section">

            <h2 className="section-title">
                Featured <span className="gradient-text">Projects</span>
            </h2>

            <div className="projects-grid">
                {projects.map((project, idx) => (
                    <ProjectCard key={idx} project={project} />
                ))}
            </div>

        </section>
    );
};

export default Projects;