import React from "react"
import type { Metadata } from 'next'
import { Manrope } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const manrope = Manrope({ 
  subsets: ["latin"],
  weight: ["300", "400", "600", "700", "800"],
  variable: "--font-manrope"
});

export const metadata: Metadata = {
  title: 'XRBridge - Deploy CV Models to Meta Quest',
  description: 'Platform for deploying computer vision to Meta Quest as real-time, world-locked overlays. Voice-controlled, model-agnostic, deployed as infrastructure.',
  keywords: 'AR, XR, Meta Quest 3, Computer Vision, SAM3, Segmentation, Voice Control, Developer Platform, Spatial Computing',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
