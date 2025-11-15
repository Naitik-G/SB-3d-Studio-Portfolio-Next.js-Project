import AboutPageContent from './AboutPageContent';

export const metadata = {
  title: 'About Us | MotionDev - Professional 3D Studio Team',
  description: 'Learn about MotionDev, a passionate team of 3D artists delivering professional 3D modeling, rendering, and visualization services. We help studios, brands, and agencies bring their vision to reality.',
  keywords: [
    'about MotionDev',
    '3D studio team',
    'professional 3D artists',
    '3D modeling company',
    '3D rendering studio',
    'creative 3D team',
    '3D visualization experts'
  ],
  openGraph: {
    title: 'About MotionDev | Professional 3D Studio',
    description: 'Meet the passionate team behind MotionDev. We create stunning 3D models, environments, and product renders for clients worldwide.',
    url: 'https://www.motiondev.xyz/about',
    type: 'website',
    images: [
      {
        url: 'https://www.motiondev.xyz/about-og.png',
        width: 1200,
        height: 630,
        alt: 'About MotionDev Team',
      }
    ],
  },

  // Icons
  icons: {
    icon: '/logo.svg',

  },
  twitter: {
    card: 'summary_large_image',
    title: 'About MotionDev | Professional 3D Studio',
    description: 'Meet the passionate team behind MotionDev.',
    images: ['https://www.motiondev.xyz/about-og.png'],
  },
  alternates: {
    canonical: 'https://www.motiondev.xyz/about',
  },
};

export default function AboutPage() {
  return <AboutPageContent />;
}