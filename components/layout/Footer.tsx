'use client'

import Link from 'next/link'
import { useScrollAnimation } from '@/lib/hooks/useScrollAnimation'
import { SERVICES } from '@/lib/types'
import {
	Facebook,
	Twitter,
	Instagram,
	Linkedin,
	Mail,
	Phone,
	MapPin,
	ArrowUpRight,
} from 'lucide-react'
import { MostStudioLogo } from '../ui/logo'

export function Footer() {
	useScrollAnimation()

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		})
	}

	return (
		<footer className='py-12 border-t border-border relative overflow-hidden'>
			{/* Background gradient */}
			<div className='absolute inset-0 bg-gradient-to-b from-background via-background/50 to-background opacity-50'></div>

			<div className='container mx-auto px-6 relative'>
				{/* Main footer content */}
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 stagger-children'>
					{/* Brand section */}
					<div>
						<button onClick={scrollToTop}>
							<MostStudioLogo />
						</button>
						<p className='text-foreground/80 mb-6'>
							Transformando ideas en experiencias digitales excepcionales.
						</p>
						<div className='flex space-x-4'>
							<a
								href='#'
								className='text-foreground/60 hover:text-foreground transition-colors'>
								<Facebook className='w-5 h-5' />
							</a>
							<a
								href='#'
								className='text-foreground/60 hover:text-foreground transition-colors'>
								<Twitter className='w-5 h-5' />
							</a>
							<a
								href='#'
								className='text-foreground/60 hover:text-foreground transition-colors'>
								<Instagram className='w-5 h-5' />
							</a>
							<a
								href='#'
								className='text-foreground/60 hover:text-foreground transition-colors'>
								<Linkedin className='w-5 h-5' />
							</a>
						</div>
					</div>

					{/* Services section */}
					<div>
						<h4 className='text-lg font-semibold mb-4'>Servicios</h4>
						<ul className='space-y-2'>
							{SERVICES.ALL.map(service => (
								<li key={service.id}>
									<Link
										href={`#servicios`}
										className='text-foreground/80 hover:text-foreground transition-colors flex items-center group'>
										{service.title}
										<ArrowUpRight className='w-4 h-4 ml-1 opacity-0 group-hover:opacity-100 transition-opacity' />
									</Link>
								</li>
							))}
						</ul>
					</div>

					{/* Quick links */}
					<div>
						<h4 className='text-lg font-semibold mb-4'>Enlaces Rápidos</h4>
						<ul className='space-y-2'>
							{[
								{ title: 'Inicio', href: '#' },
								{ title: 'Servicios', href: '#servicios' },
								{ title: 'Portafolio', href: '#portafolio' },
								{ title: 'Precios', href: '#precios' },
								{ title: 'Testimonios', href: '#testimonios' },
								{ title: 'Sobre Nosotros', href: '#nosotros' },
								{ title: 'Contacto', href: '#contacto' },
							].map(link => (
								<li key={link.title}>
									<Link
										href={link.href}
										className='text-foreground/80 hover:text-foreground transition-colors flex items-center group'>
										{link.title}
										<ArrowUpRight className='w-4 h-4 ml-1 opacity-0 group-hover:opacity-100 transition-opacity' />
									</Link>
								</li>
							))}
						</ul>
					</div>

					{/* Contact section */}
					<div>
						<h4 className='text-lg font-semibold mb-4'>Contacto</h4>
						<ul className='space-y-4'>
							<li className='flex items-start'>
								<Mail className='w-5 h-5 mr-3 mt-1 text-foreground/60' />
								<div>
									<p className='text-foreground/80'>Email:</p>
									<a
										href='mailto:info@moststudio.com'
										className='hover:text-foreground transition-colors'>
										{process.env.NEXT_PUBLIC_EMAILJS_TO_EMAIL}
									</a>
								</div>
							</li>
							<li className='flex items-start'>
								<Phone className='w-5 h-5 mr-3 mt-1 text-foreground/60' />
								<div>
									<p className='text-foreground/80'>Teléfono:</p>
									<a
										href='tel:+34900123456'
										className='hover:text-foreground transition-colors'>
										+593 99 136 7939
									</a>
								</div>
							</li>
							<li className='flex items-start'>
								<MapPin className='w-5 h-5 mr-3 mt-1 text-foreground/60' />
								<div>
									<p className='text-foreground/80'>Dirección:</p>
									<p>Quito, Ecuador</p>
								</div>
							</li>
						</ul>
					</div>
				</div>

				{/* Bottom bar */}
				<div className='mt-12 pt-8 border-t border-border text-center text-foreground/60 fade-up'>
					<div className='flex flex-col md:flex-row justify-between items-center gap-4'>
						<p>
							&copy; {new Date().getFullYear()} Most Studio. Todos los derechos
							reservados.
						</p>
						<div className='flex space-x-6'>
							<Link
								href='#'
								className='hover:text-foreground transition-colors'>
								Términos y Condiciones
							</Link>
							<Link
								href='#'
								className='hover:text-foreground transition-colors'>
								Política de Privacidad
							</Link>
						</div>
					</div>
				</div>
			</div>
		</footer>
	)
}
