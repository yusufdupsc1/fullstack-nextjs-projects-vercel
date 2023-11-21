import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Yusuf ~Portfolio',
  description: 'Yusuf Porfolio Website',
  other: {
    'theme-color': '#0d1117',
    "color-scheme": "dark only",
    
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-black-100 font-poppins">{children}</body>
    </html>
  )
}
