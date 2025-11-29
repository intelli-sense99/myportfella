export default function Footer() {
    return (
        <>
            <footer className="mt-24 border-t border-white/5 py-8">
                <div className="container text-center text-sm text-[color:var(--muted)]">
                    © {new Date().getFullYear()} Croxx — PHP, Laravel & Magento 2 developer
                </div>
            </footer>
        </>
    );
}