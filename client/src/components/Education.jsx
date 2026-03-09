import { motion } from 'framer-motion'
import { HiAcademicCap } from 'react-icons/hi'
import { FaCalendarAlt } from 'react-icons/fa'

const education = [
    {
        degree: 'Bachelor of Technology',
        field: 'Electrical Engineering',
        school: 'Netaji Subhas Institute of Technology',
        year: '2021 – 2025',
        icon: '🎓',
    },
    {
        degree: 'High School Diploma',
        field: 'Science Stream',
        school: 'Universal Convent Senior Secondary School',
        year: 'Jul 2017 – Mar 2021',
        icon: '📚',
    },
]

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.2, delayChildren: 0.1 },
    },
}

const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

export default function Education() {
    return (
        <section className="section" id="education" style={{ position: 'relative' }}>
            <div className="bg-glow bg-glow-purple" style={{ top: '20%', left: '-8%' }} />
            <div className="container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="section-label">Education</span>
                    <h2 className="section-title">Academic Background</h2>
                    <p className="section-subtitle">
                        The educational milestones that built my foundation in engineering.
                    </p>
                </motion.div>

                <motion.div
                    className="education-grid"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                >
                    {education.map((edu, index) => (
                        <motion.div
                            key={index}
                            className="glass-card education-card"
                            variants={cardVariants}
                        >
                            <div className="education-icon">{edu.icon}</div>
                            <h3 className="education-degree">{edu.degree}</h3>
                            <p style={{ color: 'var(--text-secondary)', marginBottom: 6, fontSize: '0.95rem' }}>
                                {edu.field}
                            </p>
                            <p className="education-school">{edu.school}</p>
                            <p className="education-year">
                                <FaCalendarAlt style={{ fontSize: '0.8rem' }} />
                                {edu.year}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}
