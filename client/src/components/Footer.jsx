import { FaLinkedin, FaGithub, FaEnvelope, FaHeart } from 'react-icons/fa'
import { SiLeetcode } from "react-icons/si";

export default function Footer() {
    return (
        <footer className="footer">
            <div className="container footer-content">
                <p className="footer-text">
                    © {new Date().getFullYear()} Gaurav Kumar. Crafted with <FaHeart style={{ color: 'var(--accent-pink)', verticalAlign: 'middle', fontSize: '0.75rem' }} /> and lots of ☕
                </p>
                <div className="footer-socials">
                    <a
                        href="mailto:gauravgkb99@gmail.com"
                        className="footer-social"
                        aria-label="Email"
                    >
                        <FaEnvelope />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/gauravgkb99"
                        target="_blank"
                        rel="noreferrer"
                        className="footer-social"
                        aria-label="LinkedIn"
                    >
                        <FaLinkedin />
                    </a>
                    <a
                        href="https://github.com/gauravgkb99"
                        target="_blank"
                        rel="noreferrer"
                        className="footer-social"
                        aria-label="GitHub"
                    >
                        <FaGithub />
                    </a>
                    <a
                        href="https://leetcode.com/u/Gauravgkb9913/"
                        target="_blank"
                        rel="noreferrer"
                        className="footer-social"
                        aria-label="Leetcode"
                    >
                        <SiLeetcode />
                    </a>
                </div>
            </div>
        </footer>
    )
}
