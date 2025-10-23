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
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
         {/* Additional favicon links for better browser support */}
        <link rel="icon" type="image/x-icon" href="/logo.svg" sizes="32x32" />
        <link rel="icon" type="image/png" href="/logo.svg" sizes="16x16" />
        <link rel="icon" type="image/png" href="/logo.svg" sizes="32x32" />
        <link rel="icon" type="image/png" href="/logo.svg" sizes="48x48" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        
        {/* Schema.org structured data for Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "MotionDev",
              "url": "https://www.motiondev.xyz",
              "logo": "/logo.svg",
              "description": "Professional 3D modeling, rendering, and visualization services for studios, brands, and agencies.",
              "image": "/Header.png",
              "sameAs": [
                "https://www.instagram.com/motiondev_1",
                "https://x.com/motion_dev23733",
                "https://www.motiondev.xyz"
              ],
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "Customer Service",
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
              "publisher": {
                "@type": "Organization",
                "name": "MotionDev",
                "logo": {
                  "@type": "ImageObject",
                  "url": "/logo.svg"
                }
              },
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://www.motiondev.xyz/search?q={search_term_string}",
                "query-input": "required name=search_term_string"
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