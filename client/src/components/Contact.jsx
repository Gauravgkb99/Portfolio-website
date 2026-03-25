import { motion } from 'framer-motion'
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa'
import { SiLeetcode } from "react-icons/si";

export default function Contact() {
    return (
        <section className="section" id="contact" style={{ position: 'relative' }}>
            <div className="bg-glow bg-glow-cyan" style={{ bottom: '5%', right: '-5%' }} />
            <div className="container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="section-label">Contact</span>
                    <h2 className="section-title">Let's Work Together</h2>
                    <p className="section-subtitle">
                        Have a project in mind or want to connect? Drop me a message!
                    </p>
                </motion.div>

                <div className="contact-wrapper">
                    <motion.div
                        className="contact-info"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h3>Get In Touch</h3>
                        <p>
                            I'm currently open to new opportunities and collaborations. Whether you have a question, a project idea, or just want to say hello, feel free to reach out!
                        </p>

                        <div className="contact-links">
                            <a href="mailto:gauravgkb99@gmail.com" className="contact-link">
                                <span className="contact-link-icon"><FaEnvelope /></span>
                                gauravgkb99@gmail.com
                            </a>
                            <a href="https://www.linkedin.com/in/gauravgkb99" target="_blank" rel="noreferrer" className="contact-link">
                                <span className="contact-link-icon"><FaLinkedin /></span>
                                linkedin.com/in/gauravgkb99
                            </a>
                            <a href="https://github.com/gauravgkb99" target="_blank" rel="noreferrer" className="contact-link">
                                <span className="contact-link-icon"><FaGithub /></span>
                                github.com/gauravgkb99
                            </a>
                            <a href="https://leetcode.com/u/Gauravgkb9913/" target="_blank" rel="noreferrer" className="contact-link">
                                <span className="contact-link-icon"><SiLeetcode /></span>
                                leetcode.com/u/Gauravgkb9913/
                            </a>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
