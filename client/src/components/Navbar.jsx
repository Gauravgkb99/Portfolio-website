import { useState, useEffect } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'

const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Skills', href: '#skills' },
    { label: 'Education', href: '#education' },
    // { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50)
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    useEffect(() => {
        if (menuOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = ''
        }
        return () => { document.body.style.overflow = '' }
    }, [menuOpen])

    const handleNavClick = (e, href) => {
        e.preventDefault()
        setMenuOpen(false)
        const el = document.querySelector(href)
        if (el) el.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''} ${menuOpen ? 'menu-open' : ''}`}>
            <div className="container">
                <a href="#" className="nav-logo" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                    GK<span style={{ color: 'var(--accent-cyan)' }}>.</span>
                </a>

                <button className="nav-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Close menu' : 'Open menu'}>
                    {menuOpen ? <FaTimes size={22} /> : (
                        <>
                            <span></span>
                            <span></span>
                            <span></span>
                        </>
                    )}
                </button>
            </div>

            {menuOpen && (
                <div className="nav-links open">
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
            )}
        </nav>
    )
}
