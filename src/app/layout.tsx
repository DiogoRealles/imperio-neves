import type { Metadata, Viewport } from 'next';
import { Cormorant_Garamond, Open_Sans } from 'next/font/google';
import '@/styles/globals.css';
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
    template: 'Império Neves - s%',
    default: 'Império Neves',
  },
  description: 'Império Neves',
};

export const viewport: Viewport = {
  themeColor: '#0E2B00',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="scroll-smooth" lang="pt-br">
      <body
        className={`${cormorant_garamond.variable} ${open_sans.variable} bg-black text-white `}
      >
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
