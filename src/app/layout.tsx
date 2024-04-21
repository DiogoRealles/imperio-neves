import type { Metadata, Viewport } from 'next';
import { Noto_Sans_Display } from 'next/font/google';
import '@/styles/globals.css';
import Navigation from '@/components/Navgation';
import Footer from '@/components/Footer';
const noto_sans_display = Noto_Sans_Display({ subsets: ['latin'] });

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
      <body className={`${noto_sans_display.className} bg-black text-white `}>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
