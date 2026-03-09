import { motion } from 'framer-motion'
import { FaCode, FaServer, FaTools } from 'react-icons/fa'
import {
    SiJavascript, SiTypescript, SiCplusplus, SiPython,
    SiReact, SiNextdotjs, SiNodedotjs, SiExpress,
    SiGit, SiMongodb, SiPostman, SiLeetcode
} from 'react-icons/si'

const skillCategories = [
    {
        title: 'Languages',
        icon: <FaCode />,
        iconBg: 'linear-gradient(135deg, #00d4ff, #3b82f6)',
        color: '#00d4ff',
        skills: [
            { name: 'JavaScript', icon: <SiJavascript /> },
            { name: 'TypeScript', icon: <SiTypescript /> },
            { name: 'C++', icon: <SiCplusplus /> },
            { name: 'Python', icon: <SiPython /> },
        ],
    },
    {
        title: 'Frameworks & Libraries',
        icon: <FaServer />,
        iconBg: 'linear-gradient(135deg, #7c3aed, #ec4899)',
        color: '#7c3aed',
        skills: [
            { name: 'React.js', icon: <SiReact /> },
            { name: 'Next.js', icon: <SiNextdotjs /> },
            { name: 'Node.js', icon: <SiNodedotjs /> },
            { name: 'Express.js', icon: <SiExpress /> },
        ],
    },
    {
        title: 'Tools & Platforms',
        icon: <FaTools />,
        iconBg: 'linear-gradient(135deg, #10b981, #00d4ff)',
        color: '#10b981',
        skills: [
            { name: 'Git & GitHub', icon: <SiGit /> },
            { name: 'MongoDB', icon: <SiMongodb /> },
            { name: 'REST APIs', icon: <SiPostman /> },
            { name: 'DSA / LeetCode', icon: <SiLeetcode /> },
        ],
    },
]

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.15, delayChildren: 0.1 },
    },
}

const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

const tagVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
}

export default function Skills() {
    return (
        <section className="section" id="skills" style={{ position: 'relative' }}>
            <div className="bg-glow bg-glow-cyan" style={{ bottom: '10%', right: '10%' }} />
            <div className="container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="section-label">Skills</span>
                    <h2 className="section-title">Technologies I Work With</h2>
                    <p className="section-subtitle">
                        A curated set of tools and technologies I use to build exceptional software.
                    </p>
                </motion.div>

                <motion.div
                    className="skills-grid"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    {skillCategories.map((category, catIndex) => (
                        <motion.div
                            key={catIndex}
                            className="glass-card skill-category"
                            variants={cardVariants}
                            style={{ '--cat-color': category.color }}
                        >
                            <div className="skill-category-header">
                                <div
                                    className="skill-category-icon"
                                    style={{ background: category.iconBg }}
                                >
                                    {category.icon}
                                </div>
                                <h3 className="skill-category-title">{category.title}</h3>
                            </div>
                            <div className="skill-tags">
                                {category.skills.map((skill, skillIndex) => (
                                    <motion.div
                                        key={skillIndex}
                                        className="skill-tag"
                                        variants={tagVariants}
                                        transition={{ duration: 0.4, delay: skillIndex * 0.1 }}
                                    >
                                        <span className="skill-tag-icon">
                                            {skill.icon}
                                        </span>
                                        <span>{skill.name}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}
