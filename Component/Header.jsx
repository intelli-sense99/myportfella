'use client';
import Link from "next/link";
import { useState, useEffect } from "react";


export default function Navbar() {
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

    // Close menu when clicking on a link
    const handleLinkClick = () => {
        setOpen(false);
    };

    return (
        <>
            <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
                ? 'bg-[var(--bg-primary)]/90 backdrop-blur-xl border-b border-[var(--accent-primary)]/20 shadow-lg'
                : 'bg-gradient-to-b from-black/70 to-transparent backdrop-blur border-b border-white/5'
                }`}>
                <div className="max-w-7xl mx-auto px-3 lg:px-4 flex items-center justify-between h-16">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-3 group">
                        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[var(--accent-primary)] to-[var(--accent-secondary)] flex items-center justify-center text-white font-bold shadow-lg glow-on-hover transition-transform group-hover:scale-110">
                            C
                        </div>
                        <div className="text-base font-bold bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] bg-clip-text text-transparent">
                            Croxx
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex gap-8 text-sm font-medium">
                        {['About', 'Skills', 'Projects', 'Contact'].map((item) => (
                            <a
                                key={item}
                                href={`#${item.toLowerCase()}`}
                                className="relative text-[var(--text-secondary)] hover:text-[var(--accent-primary)] transition-colors group"
                            >
                                {item}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] group-hover:w-full transition-all duration-300"></span>
                            </a>
                        ))}
                    </nav>

                    {/* Desktop CTA Buttons */}
                    <div className="hidden md:flex items-center gap-3">
                        <Link
                            href="/signin"
                            className="px-5 py-2.5 text-sm font-semibold bg-[var(--card-bg)] backdrop-blur-xl border border-[var(--card-border)] rounded-lg hover:border-[var(--accent-primary)] hover:scale-105 transition-all duration-300"
                        >
                            Sign In
                        </Link>
                        <a href="#contact" className="btn-neon">
                            Let's Talk
                        </a>
                    </div>

                    {/* Hamburger Menu Button */}
                    <button
                        className="md:hidden relative w-10 h-10 flex items-center justify-center focus:outline-none group"
                        onClick={() => setOpen(!open)}
                        aria-label="Toggle menu"
                    >
                        <div className="w-6 h-5 relative flex flex-col justify-between">
                            <span className={`w-full h-0.5 bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] rounded-full transform transition-all duration-300 ${open ? 'rotate-45 translate-y-2' : ''
                                }`}></span>
                            <span className={`w-full h-0.5 bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] rounded-full transition-all duration-300 ${open ? 'opacity-0' : 'opacity-100'
                                }`}></span>
                            <span className={`w-full h-0.5 bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] rounded-full transform transition-all duration-300 ${open ? '-rotate-45 -translate-y-2' : ''
                                }`}></span>
                        </div>
                    </button>
                </div>

                {/* Mobile Menu */}
                <div className={`md:hidden overflow-hidden transition-all duration-300 ${open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}>
                    <div className="bg-[var(--card-bg)] backdrop-blur-xl border-t border-[var(--accent-primary)]/20">
                        <div className="max-w-7xl mx-auto px-3 lg:px-4 py-6 flex flex-col gap-4">
                            {['About', 'Skills', 'Projects', 'Contact'].map((item, index) => (
                                <a
                                    key={item}
                                    href={`#${item.toLowerCase()}`}
                                    onClick={handleLinkClick}
                                    className="text-[var(--text-secondary)] hover:text-[var(--accent-primary)] font-medium transition-all duration-300 hover:translate-x-2 flex items-center gap-3 group"
                                    style={{ animationDelay: `${index * 50}ms` }}
                                >
                                    <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] opacity-0 group-hover:opacity-100 transition-opacity"></span>
                                    {item}
                                </a>
                            ))}
                            <a
                                href="#contact"
                                onClick={handleLinkClick}
                                className="btn-neon mt-2 text-center"
                            >
                                Let's Talk
                            </a>
                        </div>
                    </div>
                </div>
            </header>

            {/* Backdrop overlay for mobile menu */}
            {open && (
                <div
                    className="md:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity duration-300"
                    onClick={() => setOpen(false)}
                ></div>
            )}
        </>
    );
}
