import { motion } from 'framer-motion'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import { FaBriefcase, FaCode, FaChalkboardTeacher } from 'react-icons/fa'
import { HiAcademicCap } from 'react-icons/hi'

const experiences = [
    {
        title: 'Software Engineer',
        company: 'Newton School (Incanus)',
        location: 'New Delhi',
        date: 'Jun 2025 – Present',
        description:
            'Building and scaling web applications using React, Node.js and TypeScript. Developing features for a scalable edtech platform serving thousands of users. Collaborating with cross-functional teams to deliver high-impact product features.',
        icon: <FaBriefcase />,
        iconBg: '#00d4ff',
    },
    {
        title: 'Software Engineer Intern',
        company: 'NXP Semiconductors',
        location: 'Noida',
        date: 'Jan 2025 – Jun 2025',
        description:
            'Worked on production-grade software engineering projects. Gained hands-on experience in software design, development workflows, and code quality practices at a leading semiconductor company.',
        icon: <FaCode />,
        iconBg: '#7c3aed',
    },
    {
        title: 'Junior Executive',
        company: 'CodeChef NSUT Chapter',
        location: 'Delhi, India',
        date: 'Feb 2022 – Feb 2023',
        description:
            'Active junior member of the CodeChef chapter at NSUT. Organized coding contests, conducted workshops, and fostered a competitive programming culture among students.',
        icon: <HiAcademicCap />,
        iconBg: '#ec4899',
    },
    // {
    //     title: 'Education Mentor',
    //     company: 'Exphub',
    //     location: 'Dwarka, Delhi, India',
    //     date: 'Jun 2022 – Dec 2022',
    //     description:
    //         'Mentored students in programming fundamentals and problem-solving techniques. Created learning resources and guided mentees through structured learning paths.',
    //     icon: <FaChalkboardTeacher />,
    //     iconBg: '#10b981',
    // },
]

export default function Experience() {
    return (
        <section className="section" id="experience" style={{ position: 'relative' }}>
            <div className="bg-glow bg-glow-purple" style={{ top: '30%', right: '-5%' }} />
            <div className="container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="section-label">Experience</span>
                    <h2 className="section-title">Where I've Worked</h2>
                    <p className="section-subtitle">
                        A journey through professional roles that shaped my engineering career.
                    </p>
                </motion.div>

                <VerticalTimeline lineColor="transparent">
                    {experiences.map((exp, index) => (
                        <VerticalTimelineElement
                            key={index}
                            date={exp.date}
                            iconStyle={{
                                background: exp.iconBg,
                                color: '#fff',
                                boxShadow: `0 0 0 4px rgba(0, 212, 255, 0.3), 0 0 20px rgba(0, 212, 255, 0.2)`,
                            }}
                            icon={exp.icon}
                            contentStyle={{
                                background: 'rgba(20, 20, 50, 0.6)',
                                border: '1px solid rgba(255, 255, 255, 0.08)',
                                borderRadius: '16px',
                                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4)',
                            }}
                            contentArrowStyle={{
                                borderRight: '7px solid rgba(20, 20, 50, 0.6)',
                            }}
                        >
                            <h3 className="timeline-title">{exp.title}</h3>
                            <h4 className="timeline-company">{exp.company}</h4>
                            <p className="timeline-location">📍 {exp.location}</p>
                            <p className="timeline-description">{exp.description}</p>
                        </VerticalTimelineElement>
                    ))}
                </VerticalTimeline>
            </div>
        </section>
    )
}
