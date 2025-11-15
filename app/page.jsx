import React from 'react'
import Home from "@/components/Home"
import Services from '@/components/Services'
import OurWork from '@/components/OurWork'
import Achievements from '@/components/Achievements'

// Metadata for SEO
export const metadata = {
  metadataBase: new URL('https://www.motiondev.xyz'),
  
  title: 'MotionDev | Professional 3D Models, Environments & Product Renders',
  description: 'We create stunning 3D models, environments, and product renders for studios, brands, and agencies. From concept to final render — we bring your vision to reality.',
  
  keywords: [
    '3D modeling',
    '3D studio',
    'product visualization',
    '3D rendering',
    'game assets',
    '3D animation',
    'character modeling',
    'environment design',
    'texturing',
    'LookDev',
    'professional 3D services',
    'MotionDev',
    '3D design services'
  ],
  
  authors: [{ name: 'MotionDev' }],
  creator: 'MotionDev',
  publisher: 'MotionDev',
  
  // Open Graph - FIXED WITH ABSOLUTE URLS
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.motiondev.xyz',
    title: 'MotionDev | Professional 3D Models & Product Renders',
    description: 'We create stunning 3D models, environments, and product renders for studios, brands, and agencies.',
    siteName: 'MotionDev',
    images: [
      {
        url: 'https://www.motiondev.xyz/Header.png', // ABSOLUTE URL
        width: 1200,
        height: 630,
        alt: 'MotionDev - Professional 3D Studio Portfolio',
        type: 'image/png',
      },
    ],
  },
  
  // Twitter Card - FIXED WITH ABSOLUTE URL
  twitter: {
    card: 'summary_large_image',
    site: '@motion_dev23733',
    creator: '@motion_dev23733',
    title: 'MotionDev | Professional 3D Models & Product Renders',
    description: 'We create stunning 3D models, environments, and product renders for studios, brands, and agencies.',
    images: ['https://www.motiondev.xyz/Header.png'], // ABSOLUTE URL
  },
  
  // Additional meta tags
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  
  // Icons
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '32x32' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
  },
  
  // Manifest
  manifest: '/site.webmanifest',
  
  // Canonical URL
  alternates: {
    canonical: 'https://www.motiondev.xyz',
  },
  
  // Other meta tags
  category: '3D Design & Visualization',
  
  // Additional metadata
  applicationName: 'MotionDev',
  referrer: 'origin-when-cross-origin',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
}

export default function page() {
  return (
    <>
      <Home />
      <Services />
      <OurWork />
      <Achievements />
    </>
  )
}