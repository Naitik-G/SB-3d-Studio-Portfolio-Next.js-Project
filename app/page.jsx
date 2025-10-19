import React from 'react'
import { Metadata } from 'next'
import Home from "@/components/Home"
import Services from '@/components/Services'
import OurWork from '@/components/OurWork'
import Contact from '@/components/Contact'
import Achievements from '@/components/Achievements'

// Metadata for SEO
export const metadata = {
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
    'professional 3D services'
  ],
  authors: [{ name: 'Your Studio Name' }],
  creator: 'Your Studio Name',
  publisher: 'Your Studio Name',
  
  // Open Graph
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://yourdomain.com',
    title: 'MotionDEv | Professional 3D Models & Product Renders',
    description: 'We create stunning 3D models, environments, and product renders for studios, brands, and agencies.',
    siteName: 'MotionDev',
    images: [
      {
        url: '/Header.png',
        width: 1200,
        height: 630,
        alt: 'MotionDev Portfolio',
      },
    ],
  },
  
  // Twitter Card
  twitter: {
    card: 'summary_large_image',
    title: 'MotionDEV | Professional 3D Models & Product Renders',
    description: 'We create stunning 3D models, environments, and product renders for studios, brands, and agencies.',
    images: ['https://yourdomain.com/twitter-image.jpg'],
    creator: '@yourtwitterhandle',
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
  
  // Verification
  verification: {
    google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
    // bing: 'your-bing-verification-code',
  },
  
  // Icons
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  
  // Manifest
  manifest: '/site.webmanifest',
  
  // Alternate languages (if applicable)
  alternates: {
    canonical: 'https://yourdomain.com',
    languages: {
      'en-US': 'https://yourdomain.com',
      // 'es-ES': 'https://yourdomain.com/es',
    },
  },
  
  // Other meta tags
  category: '3D Design & Visualization',
}

export default function page() {
  return (
    <>
      <Home />
      <Services />
      <OurWork />
      <Achievements />
      <Contact />
    </>
  )
}