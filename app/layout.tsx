import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import CosmicBackground from '@/components/CosmicBackground'

export const metadata: Metadata = {
  title: 'AMON | آمون — اکانت بازی، سیگنال VIP و طراحی وبسایت',
  description: 'برند رسمی AMON | خرید اکانت بازی، اشتراک سیگنال کریپتو و فارکس، سفارش طراحی وبسایت حرفه‌ای',
  keywords: 'آمون, AMON, اکانت بازی, سیگنال VIP, طراحی سایت',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fa" dir="rtl">
      <body className="font-vazir antialiased">
        <CosmicBackground />
        <div className="relative z-10 min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
