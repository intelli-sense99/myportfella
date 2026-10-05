export default function Footer() {
    return (
        <footer className="mt-24 border-t border-white/5 py-10 bg-[#060A0C]">
            <div className="container mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-[var(--muted)]">
                <div className="flex items-center gap-3">
                    <img
                        src="/logo.png"
                        alt="VK Logo"
                        className="h-5 w-auto object-contain drop-shadow-[0_0_6px_rgba(0,242,157,0.3)]"
                    />
                    <span className="text-[var(--text-primary)] font-medium">Vikas Kumar</span>
                    <span className="text-white/20">|</span>
                    <span>PHP & Laravel Developer</span>
                </div>
                <div className="text-xs text-[var(--muted)]">
                    © {new Date().getFullYear()} Vikas Kumar. All rights reserved.
                </div>
            </div>
        </footer>
    );
}