import FAQPageContent from './FAQPageContent';

export const metadata = {
  title: 'FAQs | MotionDev - Frequently Asked Questions',
  description: 'Find answers to frequently asked questions about MotionDev\'s 3D modeling, rendering, and visualization services. Learn about our process, pricing, deliverables, and more.',
  keywords: [
    'MotionDev FAQ',
    '3D modeling questions',
    '3D rendering FAQ',
    'product visualization help',
    '3D services questions',
    'game asset FAQ',
    '3D studio support'
  ],
  openGraph: {
    title: 'FAQs | MotionDev - Your Questions Answered',
    description: 'Get quick answers to common questions about MotionDev\'s professional 3D services.',
    url: 'https://www.motiondev.xyz/faq',
    type: 'website',
    images: [
      {
        url: 'https://www.motiondev.xyz/faq-og.png',
        width: 1200,
        height: 630,
        alt: 'MotionDev FAQs',
      }
    ],
  },
  // Icons
  icons: {
    icon: '/logo.svg',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FAQs | MotionDev',
    description: 'Get answers to your questions about MotionDev\'s 3D services.',
    images: ['https://www.motiondev.xyz/faq-og.png'],
  },
  alternates: {
    canonical: 'https://www.motiondev.xyz/faq',
  },
};

export default function FAQPage() {
  return <FAQPageContent />;
}