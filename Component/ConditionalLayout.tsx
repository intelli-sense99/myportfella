'use client'
import { usePathname } from 'next/navigation'
import Header from './Header'
import Footer from './Footer'
import { useEffect } from 'react'

export default function ConditionalLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname()

    // Scroll to top on refresh/load to prevent jumping to sections if hash exists
    useEffect(() => {
        if (typeof window !== 'undefined') {
            window.scrollTo(0, 0);
        }
    }, []);

    // Check if current route is an auth page
    const isAuthPage = pathname?.startsWith('/signin') ||
        pathname?.startsWith('/signup') ||
        pathname?.startsWith('/signout')

    if (isAuthPage) {
        // Auth pages - no header/footer, no padding
        return (
            <main className="min-h-screen">
                {children}
            </main>
        )
    }

    // Regular pages - with header and footer
    return (
        <>
            <Header />
            <main className="pt-20 min-h-screen">
                {children}
            </main>
            <Footer />
        </>
    )
}