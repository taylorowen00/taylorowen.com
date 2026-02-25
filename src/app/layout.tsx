import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'

export const metadata: Metadata = {
  title: 'Taylor Owen',
  description: 'Academic, writer and podcast host working on media, digital technology and public policy.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main style={{ minHeight: 'calc(100vh - 72px)' }}>
          {children}
        </main>
      </body>
    </html>
  )
}
