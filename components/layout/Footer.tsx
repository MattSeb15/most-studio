'use client'

import { useScrollAnimation } from '@/lib/hooks/useScrollAnimation'
import { MostStudioLogo } from '../ui/logo'

export function Footer() {
	useScrollAnimation()

	return (
		<footer className='py-12 border-t border-border'>
			<div className='container mx-auto px-6'>
				<div className='grid grid-cols-1 md:grid-cols-4 gap-12 stagger-children'>
					<div>
						<MostStudioLogo />
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
							<li>Portafolio</li>
							<li>Sobre Nosotros</li>
							<li>Testimonios</li>
							<li>Contacto</li>
						</ul>
					</div>
					<div>
						<h4 className='text-lg font-semibold mb-4'>Contacto</h4>
						<ul className='space-y-2 text-foreground/80'>
							<li>moststudio@gmail.com</li>
							<li>(+593) 123456789</li>
							<li>Quito, Ecuador</li>
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
