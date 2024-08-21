import type { Metadata, Viewport } from 'next';
import '@/styles/globals.css';
import { GoogleTagManager, GoogleAnalytics } from '@next/third-parties/google';
import { Cormorant_Garamond, Open_Sans } from 'next/font/google';
import Navigation from '@/components/Navgation';
import Footer from '@/components/Footer';

const cormorant_garamond = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-cormorant_garamond',
});

const open_sans = Open_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-open_sans',
});

export const metadata: Metadata = {
  title: {
    default: 'Império Neves - Trajes a rigor',
    template: 'Império Neves - Trajes a rigor - s%',
  },
  description:
    'Vendas e aluguel de trajes masculinos para festas e eventos. Seu sonho e momento são importantes para nós.',
  keywords:
    'império neves, trajes a rigor, masculino festas, eventos, reuniões.',
  robots: {
    index: true,
    follow: true,
    nocache: false,
  },
  metadataBase: new URL('https://imperio-neves.vercel.app/'),
  alternates: {
    canonical: '/',
    languages: {
      'pt-BR': '/pt-BR',
    },
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Império Neves - Trajes a rigor',
    description:
      'Vendas e aluguel de trajes masculinos para festas e eventos. Seu sonho e momento são importantes para nós.',
    creator: 'Diogo Realles - Front-end',
    siteId: '',
    creatorId: '',
    images: {
      url: 'https://imperio-neves.vercel.app/opengraph-image.png',
      alt: 'Império Neves - Trajes a rigor',
    },
  },
  verification: {
    google:
      'google-site-verification=3SlupKUH0CMNB0NobkUuwdDCRA9J88hg5hWKaak5rzo',
  },
};

export const viewport: Viewport = {
  themeColor: '#101010',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Marcação JSON-LD para SEO
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    name: 'Império Neves - Trajes a rigor',
    image: 'https://imperio-neves.vercel.app/opengraph-image.jpg',
    description:
      'Vendas e aluguel de trajes masculinos para festas e eventos. Seu sonho e momento são importantes para nós.',
    url: 'https://imperio-neves.vercel.app/',
    publisher: {
      '@type': 'Organization',
      name: 'Império Neves',
      logo: {
        '@type': 'ImageObject',
        url: 'https://imperio-neves.vercel.app/favicon.ico',
      },
    },
  };

  return (
    <html className="scroll-smooth" lang="pt-br">
      <GoogleTagManager gtmId="GTM-TV5LZ94X" />
      <GoogleAnalytics gaId="G-RRGQJR1X5P" />

      <body
        className={`${cormorant_garamond.variable} ${open_sans.variable} selection:bg-[#101010] selection:text-white bg-[#101010] text-white`}
      >
        {/* Add JSON-LD to your page */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
