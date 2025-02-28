'use client'

import { useScrollAnimation } from '@/lib/hooks/useScrollAnimation'

export function Footer() {
	useScrollAnimation()

	return (
		<footer className='py-12 border-t border-border'>
			<div className='container mx-auto px-6'>
				<div className='grid grid-cols-1 md:grid-cols-4 gap-12 stagger-children'>
					<div>
						<div className='text-2xl font-bold gradient-text mb-4'>
							Most Studio
						</div>
						<p className='text-foreground/80'>
							Transformando ideas en experiencias digitales excepcionales.
						</p>
					</div>
					<div>
						<h4 className='text-lg font-semibold mb-4'>Servicios</h4>
						<ul className='space-y-2 text-foreground/80'>
							<li>Diseño Web</li>
							<li>Desarrollo</li>
							<li>Marketing Digital</li>
							<li>Consultoría</li>
						</ul>
					</div>
					<div>
						<h4 className='text-lg font-semibold mb-4'>Compañía</h4>
						<ul className='space-y-2 text-foreground/80'>
							<li>Sobre Nosotros</li>
							<li>Portafolio</li>
							<li>Testimonios</li>
							<li>Contacto</li>
						</ul>
					</div>
					<div>
						<h4 className='text-lg font-semibold mb-4'>Contacto</h4>
						<ul className='space-y-2 text-foreground/80'>
							<li>most@gmail.com</li>
							<li>+34 900 123 456</li>
							<li>Madrid, España</li>
						</ul>
					</div>
				</div>
				<div className='mt-12 pt-8 border-t border-border text-center text-foreground/60 fade-up'>
					<p>&copy; 2024 Most Studio. Todos los derechos reservados.</p>
				</div>
			</div>
		</footer>
	)
}
