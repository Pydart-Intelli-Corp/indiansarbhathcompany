import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Indian Sarbath Company - Premium Refreshing Drinks',
  description: 'Discover the authentic taste of traditional Indian sarbath drinks created by three passionate friends. Premium quality refreshing beverages for every occasion.',
  keywords: 'sarbath, indian drinks, refreshing beverages, traditional drinks, premium quality',
  authors: [{ name: 'Indian Sarbath Company' }],
  openGraph: {
    title: 'Indian Sarbath Company - Premium Refreshing Drinks',
    description: 'Authentic traditional Indian sarbath drinks crafted with passion',
    url: 'https://indiansarbhathcompany.com',
    siteName: 'Indian Sarbath Company',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}