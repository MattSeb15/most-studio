'use client'

import { services } from '@/lib/data'
import { Code, Layout, Megaphone, MessageSquareCode } from 'lucide-react'
import { useEffect, useRef } from 'react'

export function Services() {
	return (
		<section
			id='servicios'
			className='py-24 relative'>
			<div className='container mx-auto px-6'>
				<div className='text-start sm:text-center mb-16 fade-up'>
					<h2 className='text-3xl md:text-4xl font-bold mb-4'>
						Nuestros Servicios
					</h2>
					<p className='text-lg md:text-xl text-foreground/80'>
						Soluciones digitales completas para tu negocio
					</p>
				</div>
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 stagger-children'>
					{services.map((service, index) => (
						<div
							key={service.title}
							className={`service-card service-card-${
								index + 1
							} p-8 rounded-2xl`}
							style={
								{
									'--accent-color-1': service.accentColor1,
									'--accent-color-2': service.accentColor2,
								} as React.CSSProperties
							}>
							<div className='service-icon-container'>
								<div className='service-icon'>{service.icon}</div>
							</div>
							<h3 className='service-title text-xl font-bold mb-4'>
								{service.title}
							</h3>
							<p className='service-description text-foreground/80'>
								{service.description}
							</p>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}
