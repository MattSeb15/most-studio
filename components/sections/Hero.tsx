'use client'

import Link from 'next/link'
import { useState, useEffect, useRef } from 'react'
import { ArrowRight, ChevronDown } from 'lucide-react'

export function Hero() {
	const [animatedTitle, setAnimatedTitle] = useState('')
	const title = 'Transformamos Ideas en Experiencias Digitales'
	const heroRef = useRef<HTMLDivElement>(null)

	useEffect(() => {
		let currentIndex = 0
		const interval = setInterval(() => {
			if (currentIndex <= title.length) {
				setAnimatedTitle(title.slice(0, currentIndex))
				currentIndex++
			} else {
				clearInterval(interval)
			}
		}, 100)

		return () => clearInterval(interval)
	}, [])

	// Mouse move effect for spotlight
	useEffect(() => {
		const handleMouseMove = (e: MouseEvent) => {
			if (heroRef.current) {
				const rect = heroRef.current.getBoundingClientRect()
				const x = ((e.clientX - rect.left) / rect.width) * 100
				const y = ((e.clientY - rect.top) / rect.height) * 100

				heroRef.current.style.setProperty('--x', `${x}%`)
				heroRef.current.style.setProperty('--y', `${y}%`)
			}
		}

		const heroElement = heroRef.current
		if (heroElement) {
			heroElement.addEventListener('mousemove', handleMouseMove)
		}

		return () => {
			if (heroElement) {
				heroElement.removeEventListener('mousemove', handleMouseMove)
			}
		}
	}, [])

	const scrollToNextSection = () => {
		const nextSection = document.getElementById('servicios')
		if (nextSection) {
			nextSection.scrollIntoView({ behavior: 'smooth' })
		}
	}

	return (
		<section
			ref={heroRef}
			className='hero-section min-h-screen flex items-center justify-center relative overflow-hidden'
			style={{ '--x': '50%', '--y': '99%' } as React.CSSProperties}>
			{/* Animated background */}
			<div className='animated-bg'>
				<div className='animated-bg-gradient'></div>
			</div>

			{/* Spotlight effect */}
			<div className='hero-spotlight'></div>

			{/* Particles */}
			<div className='hero-particles'>
				{[...Array(10)].map((_, i) => (
					<div
						key={i}
						className='hero-particle'></div>
				))}
			</div>

			<div className='container mx-auto px-6 py-24 relative z-10'>
				<div className='max-w-4xl mx-auto text-center'>
					<div className='flex w-full items-start sm:w-fit mb-6 sm:inline-block fade-in'>
						<span className='px-4 py-1 rounded-full bg-blue-500/10 text-blue-500 text-sm font-medium'>
							Diseño & Desarrollo Web
						</span>
					</div>

					<h1 className='text-3xl text-start sm:text-center md:text-5xl lg:text-7xl font-bold mb-8 hero-title fade-up'>
						{title}
						{/* <span className='animate-blink'>|</span> */}
					</h1>

					<p
						className='text-lg text-start sm:text-center md:text-lg lg:text-2xl text-foreground/80 mb-12 max-w-3xl mx-auto fade-up'
						style={{ animationDelay: '0.2s' }}>
						Creamos experiencias digitales que cautivan, conectan y convierten.
						Diseño web profesional con enfoque en resultados.
					</p>

					<div
						className='flex flex-col items-start sm:flex-row sm:items-center justify-center gap-4 fade-up'
						style={{ animationDelay: '0.4s' }}>
						<Link
							href='#contacto'
							className='hero-button px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-sm lg:text-base rounded-xl font-semibold hover:scale-105 transition-transform'>
							Comienza tu Proyecto
							<ArrowRight className='inline-block ml-2 w-5 h-5' />
						</Link>
						<Link
							href='#portafolio'
							className='hero-button px-8 py-4 border-2 border-foreground/20 text-sm lg:text-base rounded-xl font-semibold hover:border-foreground/40 transition-colors'>
							Ver Portafolio
						</Link>
					</div>
				</div>
			</div>

			<div
				className='absolute z-10 bottom-5 animate-bounce fade-in'
				style={{ animationDelay: '0.6s' }}>
				<button
					onClick={scrollToNextSection}
					className='p-2 rounded-full bg-foreground/10 hover:bg-foreground/20 transition-colors'
					aria-label='Scroll down'>
					<ChevronDown className='w-6 h-6' />
				</button>
			</div>

			{/* Decorative elements */}
			<div className='absolute top-1/4 left-10 w-24 h-24 bg-blue-500/5 rounded-full blur-3xl'></div>
			<div className='absolute bottom-1/4 right-10 w-32 h-32 bg-purple-500/5 rounded-full blur-3xl'></div>
			<div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-500/5 rounded-full blur-3xl'></div>
		</section>
	)
}
