import React from "react"
import type { Metadata } from 'next'
import { Be_Vietnam_Pro, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const beVietnamPro = Be_Vietnam_Pro({ 
  subsets: ["latin", "vietnamese"],
  weight: ["300", "400", "500", "600", "700"],
  variable: '--font-be-vietnam'
});

const playfairDisplay = Playfair_Display({ 
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600", "700"],
  variable: '--font-playfair'
});

export const metadata: Metadata = {
  title: 'Đèo Ô Quy Hồ - Thiên Đường Trên Mây | Lai Châu',
  description: 'Khám phá Đèo Ô Quy Hồ - một trong tứ đại đỉnh đèo Tây Bắc, nơi giao thoa giữa trời và đất, với cảnh sắc hùng vĩ tuyệt đẹp tại Lai Châu, Việt Nam.',
  generator: 'v0.app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="vi" className="bg-background">
      <body className={`${beVietnamPro.variable} ${playfairDisplay.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
