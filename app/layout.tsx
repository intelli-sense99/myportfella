import './globals.css'
import ConditionalLayout from '../Component/ConditionalLayout'

export const metadata = {
  title: 'Croxx — Dev Portfolio (Dark)',
  description: 'Croxx — PHP, Laravel & Magento 2 developer',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body>
        <ConditionalLayout>
          {children}
        </ConditionalLayout>
      </body>
    </html>
  )
}
