import { useState, useEffect } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'

const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Skills', href: '#skills' },
    { label: 'Education', href: '#education' },
    { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50)
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const handleNavClick = (e, href) => {
        e.preventDefault()
        setMenuOpen(false)
        const el = document.querySelector(href)
        if (el) el.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="container">
                <a href="#" className="nav-logo" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                    GK<span style={{ color: 'var(--accent-cyan)' }}>.</span>
                </a>

                <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
                    {menuOpen && (
                        <button
                            className="nav-toggle"
                            onClick={() => setMenuOpen(false)}
                            aria-label="Close menu"
                            style={{ position: 'absolute', top: 24, right: 24 }}
                        >
                            <FaTimes size={24} color="var(--text-primary)" />
                        </button>
                    )}
                    {navItems.map((item) => (
                        <a
                            key={item.href}
                            href={item.href}
                            className="nav-link"
                            onClick={(e) => handleNavClick(e, item.href)}
                        >
                            {item.label}
                        </a>
                    ))}
                    <a href="#contact" className="btn btn-primary" onClick={(e) => handleNavClick(e, '#contact')} style={{ padding: '10px 24px', fontSize: '0.85rem' }}>
                        Let's Talk
                    </a>
                </div>

                <button className="nav-toggle" onClick={() => setMenuOpen(true)} aria-label="Open menu">
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
        </nav>
    )
}
