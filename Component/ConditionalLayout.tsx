'use client'
import { usePathname } from 'next/navigation'
import Header from './Header'
import Footer from './Footer'

export default function ConditionalLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname()

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
            <main className="pt-24 min-h-screen">
                {children}
            </main>
            <Footer />
        </>
    )
}
