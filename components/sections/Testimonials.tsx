'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Star, Quote } from 'lucide-react'
import { useScrollAnimation } from '@/lib/hooks/useScrollAnimation'
import { testimonials } from '@/lib/data'

export function Testimonials() {
	useScrollAnimation()
	const [visibleTestimonials, setVisibleTestimonials] = useState(
		testimonials.slice(0, 4)
	)
	const [currentIndex, setCurrentIndex] = useState(0)
	const [fade, setFade] = useState(false)

	// Auto scroll effect with fade in/out
	useEffect(() => {
		const interval = setInterval(() => {
			setFade(true)
			setTimeout(() => {
				setCurrentIndex(prevIndex => {
					const nextIndex = (prevIndex + 4) % testimonials.length
					setVisibleTestimonials(testimonials.slice(nextIndex, nextIndex + 4))
					setFade(false)
					return nextIndex
				})
			}, 300) // Duration of fade out
		}, 7000) // Adjust the interval as needed

		return () => clearInterval(interval)
	}, [])

	return (
		<section
			id='testimonios'
			className='py-5 md:py-24 relative overflow-hidden'>
			{/* Background elements */}
			<div className='absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/5 to-transparent opacity-50'></div>
			<div className='absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(59,130,246,0.1),transparent_60%)]'></div>

			<div className='container mx-auto px-6 relative z-10'>
				<div className='text-start sm:text-center mb-16 fade-up'>
					<h2 className='text-3xl md:text-4xl font-bold mb-4'>
						Lo Que Dicen Nuestros Clientes
					</h2>
					<p className='text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto'>
						Historias de éxito y experiencias de quienes han confiado en
						nosotros
					</p>
				</div>

				{/* Testimonials container */}
				<div
					className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-8 px-2 transition-opacity duration-500 ${
						fade ? 'opacity-0' : 'opacity-100'
					}`}>
					{visibleTestimonials.map((testimonial, index) => (
						<div
							key={index}
							className='flex flex-col justify-between w-full bg-background/50 backdrop-blur-md rounded-2xl border border-border p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-80'>
							<div className='flex items-start mb-6'>
								<div className='relative w-16 h-16 flex-none rounded-full overflow-hidden mr-4 border-2 border-blue-500/20'>
									<Image
										src={testimonial.avatar}
										alt={testimonial.name}
										fill
										className='object-cover'
									/>
								</div>
								<div>
									<h3 className='font-bold text-lg'>{testimonial.name}</h3>
									<p className='text-foreground/60 text-xs truncate'>
										{testimonial.position}
									</p>
									<p className='text-foreground/60 text-xs truncate'>
										{testimonial.company}
									</p>
									<div className='flex mt-1'>
										{[...Array(5)].map((_, i) => (
											<Star
												key={i}
												className={`w-4 h-4 ${
													i < testimonial.rating
														? 'text-yellow-500 fill-yellow-500'
														: 'text-yellow-500/50'
												}`}
											/>
										))}
									</div>
								</div>
								<Quote
									strokeWidth={0.5}
									className='ml-auto flex-shrink-0 w-10 h-10 text-blue-500'
								/>
							</div>
							<p className='text-foreground/80 italic leading-relaxed overflow-hidden text-ellipsis'>
								{testimonial.text}
							</p>
							<div className='mt-6 pt-4 border-t border-border flex justify-between items-center'>
								<span className='text-sm text-foreground/60'>
									{testimonial.date}
								</span>
								<div className='flex items-center'>
									<span className='text-sm font-medium bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent'>
										{testimonial.project}
									</span>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}
