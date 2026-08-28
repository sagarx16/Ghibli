import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Ghibli',
  description: 'Studio Ghibli streaming – explore the magical world of Ghibli films.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
