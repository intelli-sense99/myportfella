import './globals.css'
import ConditionalLayout from '../Component/ConditionalLayout'
import WaterWave from '../Component/WaterWave'
import CursorEffect from '../Component/CursorEffect'

export const metadata = {
  title: 'Vikas Kumar — PHP & Laravel Developer | Magento 2',
  description: 'Vikas Kumar — Results-driven PHP, Laravel & Magento 2 Developer specialized in scalable backend systems, APIs & AI Integrations.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className="bg-[var(--bg-primary)] text-[var(--text-primary)]">
        <WaterWave />
        {/* <CursorEffect /> */}
        <ConditionalLayout>
          {children}
        </ConditionalLayout>
      </body>
    </html>
  )
}
