import './globals.css'
import Header from '../Component/Header'
import Footer from '../Component/Footer'

export const metadata = {
  title: 'Croxx — Dev Portfolio (Dark)',
  description: 'Croxx — PHP, Laravel & Magento 2 developer',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body>
        <Header />
        <main className="pt-24 min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
