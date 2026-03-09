import { motion } from 'framer-motion'
import { FaCode, FaLaptopCode, FaLightbulb, FaTrophy, FaDownload } from 'react-icons/fa'
import { GrDocumentText } from "react-icons/gr";

const stats = [
    { icon: <FaTrophy />, number: '1250+', label: 'LeetCode Problems' },
    { icon: <FaCode />, number: '1+', label: 'Years Experience' },
    { icon: <FaLaptopCode />, number: '3+', label: 'Programming Languages' },
    { icon: <FaLightbulb />, number: '6+', label: 'Projects Built' },
]

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
}

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

export default function About() {
    return (
        <section className="section" id="about" style={{ position: 'relative' }}>
            <div className="bg-glow bg-glow-cyan" style={{ top: '10%', left: '-5%' }} />
            <div className="container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="section-label"> About Me</span>
                    <h2 className="section-title">Turning Ideas Into Code</h2>
                    <p className="section-subtitle">
                        A passionate engineer who thrives at the intersection of creativity and technology.
                    </p>
                </motion.div>

                <div className="about-grid">
                    <motion.div
                        className="about-text"
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.7 }}
                    >
                        <p>
                            I'm a <strong>Software Engineer</strong> currently working at <strong>Newton School (Incanus Technologies)</strong>, where I build and scale web applications that serve thousands of users. With a solid foundation in <strong>programming and development</strong>, I specialize in crafting performant and maintainable code using modern technologies.
                        </p>
                        <p>
                            Previously, I honed my engineering skills as an <strong>SDE Intern at NXP Semiconductors</strong>, gaining invaluable experience in production-grade software. I'm a proud alumnus of <strong>Netaji Subhas Institute of Technology (NSUT)</strong>, class of 2025.
                        </p>
                        <p>
                            Beyond work, I'm an avid <strong>programmer</strong> with over <strong>1300+ problems solved on LeetCode</strong>. I love tackling complex algorithmic challenges and believe that strong DSA fundamentals are the backbone of great software engineering.
                        </p>
                    </motion.div>

                    <motion.div
                        className="about-stats"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                    >
                        {stats.map((stat, index) => (
                            <motion.div key={index} className="glass-card stat-card" variants={itemVariants}>
                                <div style={{ fontSize: '1.5rem', color: 'var(--accent-cyan)', marginBottom: 12 }}>
                                    {stat.icon}
                                </div>
                                <div className="stat-number">{stat.number}</div>
                                <div className="stat-label">{stat.label}</div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>

                {/* Resume Preview Card */}
                <motion.div
                    className="resume-card"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <div className="resume-card-inner">
                        <div className="resume-preview">
                            <img src="/assets/resume-preview.png" alt="Gaurav Kumar Resume" />
                            {/* <div className="resume-preview-overlay">
                                <a href="https://drive.google.com/file/d/1lhw-U1usZ2AgZw42YV99q6C3X93J-2rb/view?usp=sharing" target="_blank" rel="noreferrer" className="btn btn-primary" style={{ padding: '10px 24px', fontSize: '0.85rem' }}>
                                    <FaDownload /> View Full Resume
                                </a>
                            </div> */}
                        </div>
                        <div className="resume-info">
                            <h3>My Resume</h3>
                            <p>A detailed overview of my experience, skills, and education.</p>
                            <a href="https://drive.google.com/file/d/1lhw-U1usZ2AgZw42YV99q6C3X93J-2rb/view?usp=sharing" target="_blank" rel="noreferrer" className="btn btn-primary" style={{ padding: '12px 28px', fontSize: '0.9rem' }}>
                                <GrDocumentText /> View Resume
                            </a>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
