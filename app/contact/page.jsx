import ContactPage from "./ContactPageContent";


export const metadata = {
  title: 'Contact Us | MotionDev - Get in Touch',
  description: 'Contact MotionDev for professional 3D modeling, rendering, and visualization services. Reach out via email, phone, or our contact form. We\'re here to help bring your 3D vision to life.',
  keywords: [
    'contact MotionDev',
    '3D studio contact',
    '3D modeling services',
    'get quote 3D',
    'hire 3D artists',
    '3D visualization contact',
    'product rendering inquiry'
  ],
  openGraph: {
    title: 'Contact MotionDev | Professional 3D Studio',
    description: 'Get in touch with MotionDev for stunning 3D models, environments, and product renders. Email us at devmotion007@gmail.com or call +91 9518535585',
    url: 'https://www.motiondev.xyz/contact',
    type: 'website',
    images: [
      {
        url: 'https://www.motiondev.xyz/contact-og.png',
        width: 1200,
        height: 630,
        alt: 'Contact MotionDev',
      }
    ],
  },

  // Icons - Multiple sizes for better display
  icons: {
    icon: [
      { url: '/logo.svg', sizes: '32x32', type: 'image/x-icon' },
      { url: '/logo.svg', sizes: '16x16', type: 'image/png' },
      { url: '/logo.svg', sizes: '32x32', type: 'image/png' },
      { url: '/logo.svg', sizes: '48x48', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact MotionDev | Professional 3D Studio',
    description: 'Get in touch with MotionDev for stunning 3D models and product renders.',
    images: ['https://www.motiondev.xyz/contact-og.png'],
  },
  alternates: {
    canonical: 'https://www.motiondev.xyz/contact',
  },
};

export default function FAQPage() {
  return <ContactPage />;
}
