'use client';
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Header() {
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleLinkClick = () => {
        setOpen(false);
    };

    const navItems = [
        { label: 'About', href: '#about' },
        { label: 'Skills', href: '#skills' },
        { label: 'Projects', href: '#projects' },
        { label: 'Services', href: '#services' },
        { label: 'Contact', href: '#contact' },
    ];

    return (
        <>
            <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
                    ? 'bg-[var(--bg-primary)]/85 backdrop-blur-xl border-b border-[var(--card-border)] shadow-xl shadow-black/40'
                    : 'bg-gradient-to-b from-black/60 to-transparent backdrop-blur-sm border-b border-white/5'
                }`}>
                <div className="container mx-auto px-6 lg:px-8 flex items-center justify-between h-20">
                    {/* Modern Brand Logo - Clean standalone icon */}
                    <Link href="/" className="flex items-center cursor-pointer" aria-label="Home">
                        <img
                            src="/logo.png"
                            alt="VK Logo"
                            className="h-10 md:h-11 w-auto object-contain"
                        />
                    </Link>

                    {/* Desktop Navigation with Moving Border Beam */}
                    <div className="hidden md:flex relative p-[1px] rounded-full overflow-hidden shadow-[0_0_20px_rgba(0,242,157,0.12)] group">
                        {/* Rotating Glowing Border Beam Animation */}
                        <div
                            className="absolute -inset-[150%] w-[400%] h-[400%] animate-[spin_4s_linear_infinite] pointer-events-none"
                            style={{
                                background: 'conic-gradient(from 0deg at 50% 50%, transparent 0deg, transparent 270deg, var(--accent-secondary) 315deg, var(--accent-primary) 360deg)',
                            }}
                        />

                        {/* Navigation Container */}
                        <nav className="relative flex items-center gap-1 bg-[var(--bg-secondary)]/90 backdrop-blur-xl px-3 py-1.5 rounded-full z-10 border border-white/5">
                            {navItems.map((item) => (
                                <a
                                    key={item.label}
                                    href={item.href}
                                    className="relative px-4 py-1.5 text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--accent-primary)] transition-all duration-200 group rounded-full hover:bg-[var(--accent-primary)]/10 cursor-pointer"
                                >
                                    <span className="relative z-10">{item.label}</span>
                                </a>
                            ))}
                        </nav>
                    </div>

                    {/* Desktop CTA Button */}
                    <div className="hidden md:flex items-center gap-4">
                        <a href="#contact" className="btn-neon text-xs tracking-wider uppercase font-bold py-2.5 px-6">
                            Let's Talk
                        </a>
                    </div>

                    {/* Hamburger Menu Button */}
                    <button
                        className="md:hidden relative w-10 h-10 flex items-center justify-center focus:outline-none bg-[var(--bg-secondary)]/80 border border-[var(--card-border)] rounded-xl cursor-pointer"
                        onClick={() => setOpen(!open)}
                        aria-label="Toggle menu"
                    >
                        <div className="w-5 h-4 relative flex flex-col justify-between">
                            <span className={`w-full h-0.5 bg-[var(--accent-primary)] rounded-full transform transition-all duration-300 ${open ? 'rotate-45 translate-y-1.5' : ''}`} />
                            <span className={`w-full h-0.5 bg-[var(--accent-secondary)] rounded-full transition-all duration-300 ${open ? 'opacity-0' : 'opacity-100'}`} />
                            <span className={`w-full h-0.5 bg-[var(--accent-primary)] rounded-full transform transition-all duration-300 ${open ? '-rotate-45 -translate-y-2' : ''}`} />
                        </div>
                    </button>
                </div>

                {/* Mobile Menu */}
                <div className={`md:hidden overflow-hidden transition-all duration-400 ease-in-out ${open ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                    }`}>
                    <div className="bg-[var(--bg-secondary)]/95 backdrop-blur-2xl border-b border-[var(--card-border)] shadow-2xl">
                        <div className="mx-auto px-6 py-8 flex flex-col items-center gap-5 text-center">
                            {navItems.map((item) => (
                                <a
                                    key={item.label}
                                    href={item.href}
                                    onClick={handleLinkClick}
                                    className="text-lg text-[var(--text-primary)] hover:text-[var(--accent-primary)] font-medium transition-colors cursor-pointer py-1"
                                >
                                    {item.label}
                                </a>
                            ))}
                            <div className="pt-4 border-t border-white/5 w-full flex justify-center">
                                <a
                                    href="#contact"
                                    onClick={handleLinkClick}
                                    className="btn-neon text-center py-3 px-8 w-full max-w-[220px]"
                                >
                                    Let's Talk
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            {/* Backdrop overlay for mobile menu */}
            {open && (
                <div
                    className="md:hidden fixed inset-0 bg-black/60 backdrop-blur-sm z-40 transition-opacity duration-300"
                    onClick={() => setOpen(false)}
                />
            )}
        </>
    );
}
