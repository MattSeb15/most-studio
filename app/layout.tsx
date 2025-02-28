import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Most Studio - Diseño y Desarrollo Web Profesional',
  description: 'Agencia de diseño y desarrollo web especializada en crear experiencias digitales excepcionales. Servicios de diseño web, desarrollo, marketing digital y más.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="scroll-smooth dark">
      <body className={inter.className}>{children}</body>
    </html>
  );
}