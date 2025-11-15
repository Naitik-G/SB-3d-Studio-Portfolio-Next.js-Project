import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL('https://www.motiondev.xyz'),
  title: {
    default: 'MotionDev | Professional 3D Studio',
    template: '%s | MotionDev',
  },
  description: 'Professional 3D modeling, rendering, and visualization services',
  
  // Global Open Graph settings
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.motiondev.xyz',
    siteName: 'MotionDev',
    images: [
      {
        url: 'https://www.motiondev.xyz/Header.png', // ABSOLUTE URL
        width: 1200,
        height: 630,
        alt: 'MotionDev - Professional 3D Studio',
      },
    ],
  },
  
  // Global Twitter Card settings
  twitter: {
    card: 'summary_large_image',
    site: '@motion_dev23733',
    creator: '@motion_dev23733',
    images: ['https://www.motiondev.xyz/Header.png'], // ABSOLUTE URL
  },
  
  // Icons
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '32x32' },
      { url: '/logo.svg', sizes: 'any', type: 'image/svg+xml' },
    ],
    apple: '/apple-touch-icon.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Schema.org structured data for Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "MotionDev",
              "url": "https://www.motiondev.xyz",
              "logo": "https://www.motiondev.xyz/logo.svg",
              "image": "https://www.motiondev.xyz/Header.png",
              "description": "Professional 3D modeling, rendering, and visualization services for studios, brands, and agencies.",
              "email": "devmotion007@gmail.com",
              "telephone": "+91-9518535585",
              "sameAs": [
                "https://www.instagram.com/motiondev_1",
                "https://x.com/motion_dev23733"
              ],
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "Customer Service",
                "email": "devmotion007@gmail.com",
                "telephone": "+91-9518535585",
                "availableLanguage": ["English"]
              },
              "founder": {
                "@type": "Person",
                "name": "MotionDev Team"
              },
              "foundingDate": "2024",
              "knowsAbout": [
                "3D Modeling",
                "3D Rendering",
                "Product Visualization",
                "Game Assets",
                "Character Modeling",
                "Environment Design",
                "3D Animation"
              ]
            })
          }}
        />

        {/* Additional structured data for WebSite */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "MotionDev",
              "url": "https://www.motiondev.xyz",
              "description": "Professional 3D modeling, rendering, and visualization services",
              "image": "https://www.motiondev.xyz/Header.png",
              "publisher": {
                "@type": "Organization",
                "name": "MotionDev",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://www.motiondev.xyz/logo.svg"
                }
              }
            })
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black`}
      >
        <Header />
        <main className="pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}