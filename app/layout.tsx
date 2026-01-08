import './globals.css'
import ConditionalLayout from '../Component/ConditionalLayout'
import WaterWave from '../Component/WaterWave'
import CursorEffect from '../Component/CursorEffect'

export const metadata = {
  title: 'Croxx — Dev Portfolio (Dark)',
  description: 'Croxx — PHP, Laravel & Magento 2 developer',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body>
        <WaterWave />
        {/* <CursorEffect /> */}
        <ConditionalLayout>
          {children}
        </ConditionalLayout>
      </body>
    </html>
  )
}
