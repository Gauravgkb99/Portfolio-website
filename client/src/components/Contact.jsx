import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaEnvelope, FaLinkedin, FaGithub, FaPaperPlane } from 'react-icons/fa'
import { SiLeetcode } from "react-icons/si";

export default function Contact() {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' })
    const [status, setStatus] = useState('')
    const [sending, setSending] = useState(false)

    const handleChange = (e) => {
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setSending(true)
        setStatus('')

        try {
            const API_BASE = import.meta.env.PROD
                ? import.meta.env.VITE_API_URL
                : ''
            const res = await fetch(`${API_BASE}/api/contact`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            })

            if (res.ok) {
                setStatus('success')
                setFormData({ name: '', email: '', message: '' })
            } else {
                setStatus('error')
            }
        } catch (err) {
            setStatus('error')
        } finally {
            setSending(false)
        }
    }

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
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
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

                    <motion.form
                        className="glass-card contact-form"
                        onSubmit={handleSubmit}
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="form-group">
                            <label htmlFor="contact-name">Name</label>
                            <input
                                type="text"
                                id="contact-name"
                                name="name"
                                placeholder="Your name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="contact-email">Email</label>
                            <input
                                type="email"
                                id="contact-email"
                                name="email"
                                placeholder="your@email.com"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="contact-message">Message</label>
                            <textarea
                                id="contact-message"
                                name="message"
                                placeholder="Tell me about your project..."
                                value={formData.message}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <button type="submit" className="btn btn-primary" disabled={sending} style={{ width: '100%', justifyContent: 'center' }}>
                            {sending ? 'Sending...' : (
                                <>Send Message <FaPaperPlane /></>
                            )}
                        </button>
                        {status === 'success' && (
                            <p className="form-status success">✅ Message sent successfully! I'll get back to you soon.</p>
                        )}
                        {status === 'error' && (
                            <p className="form-status error">❌ Something went wrong. Please try emailing me directly.</p>
                        )}
                    </motion.form>
                </div>
            </div>
        </section>
    )
}
