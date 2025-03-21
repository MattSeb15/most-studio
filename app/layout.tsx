import { Toaster } from '@/components/ui/toaster'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'Most Studio - Diseño y Desarrollo Web Profesional',
	description:
		'Agencia de diseño y desarrollo web especializada en crear experiencias digitales excepcionales. Servicios de diseño web, desarrollo, marketing digital y más.',
	keywords:
		'diseño web, desarrollo web, diseño de páginas web, diseño de sitios web, diseño de tiendas online, diseño de aplicaciones web, diseño de landing pages, diseño de páginas optimización SEO, branding digital',
	creator: 'Most Studio',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html
			lang='es'
			className='scroll-smooth dark'>
			<body className={inter.className}>
				{children} <Toaster />
				<Analytics />
			</body>
		</html>
	)
}
