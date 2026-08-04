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
                <div className="mx-auto px-6 lg:px-8 flex items-center justify-between h-20">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-3 group cursor-pointer">
                        <div className="relative transition-all duration-300 group-hover:scale-110">
                            <span className="text-3xl font-bold text-[var(--accent-primary)] tracking-tight" style={{ fontFamily: "'JetBrains Mono', 'Fira Code', 'Courier New', monospace" }}>
                                &lt;??&gt;
                            </span>
                            <div className="absolute inset-0 blur-lg bg-[var(--accent-primary)] opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex gap-1 text-base font-medium">
                        {['About', 'Skills', 'Projects'].map((item) => (
                            <a
                                key={item}
                                href={`#${item.toLowerCase()}`}
                                className="relative px-5 py-2 text-[var(--text-primary)] hover:text-[var(--accent-primary)] transition-all duration-300 group hover:-translate-y-0.5 cursor-pointer"
                            >
                                <span className="relative z-10">{item}</span>
                                {/* Elegant thin underline */}
                                <span className="absolute bottom-1 left-5 right-5 h-[1px] bg-[var(--accent-primary)] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center"></span>
                            </a>
                        ))}
                    </nav>

                    {/* Desktop CTA Buttons */}
                    <div className="hidden md:flex items-center gap-6">
                        <Link
                            href="/signin"
                            className="text-base font-medium text-[var(--text-secondary)] hover:text-white transition-all duration-300 hover:-translate-y-0.5 cursor-pointer"
                        >
                            Sign In
                        </Link>
                        <a href="#contact" className="btn-neon">
                            Let's Talk
                        </a>
                    </div>

                    {/* Hamburger Menu Button */}
                    <button
                        className="md:hidden relative w-10 h-10 flex items-center justify-center focus:outline-none group cursor-pointer"
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
                <div className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${open ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'
                    }`}>
                    <div className="bg-[var(--card-bg)] backdrop-blur-xl border-t border-[var(--accent-primary)]/20">
                        <div className="mx-auto px-6 lg:px-8 py-10 flex flex-col items-center gap-8 text-center">
                            {['About', 'Skills', 'Projects'].map((item, index) => (
                                <a
                                    key={item}
                                    href={`#${item.toLowerCase()}`}
                                    onClick={handleLinkClick}
                                    className="relative text-2xl text-[var(--text-primary)] hover:text-[var(--accent-primary)] font-medium transition-all duration-300 group cursor-pointer"
                                    style={{ animationDelay: `${index * 50}ms` }}
                                >
                                    <span className="relative z-10">{item}</span>
                                    {/* Elegant thin underline centered */}
                                    <span className="absolute -bottom-1 left-0 right-0 h-[1px] bg-[var(--accent-primary)] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center"></span>
                                </a>
                            ))}
                            <div className="flex flex-col items-center gap-6 pt-6 border-t border-white/5 w-full">
                                <Link
                                    href="/signin"
                                    onClick={handleLinkClick}
                                    className="text-xl font-medium text-[var(--text-secondary)] hover:text-white transition-all duration-300 hover:-translate-y-1 cursor-pointer"
                                >
                                    Sign In
                                </Link>
                                <a
                                    href="#contact"
                                    onClick={handleLinkClick}
                                    className="btn-neon text-center py-4 px-10 w-full max-w-[250px]"
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
                    className="md:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity duration-300 cursor-pointer"
                    onClick={() => setOpen(false)}
                ></div>
            )}
        </>
    );
}
