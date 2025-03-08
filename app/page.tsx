'use client'

import { useState, useEffect } from 'react'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Hero } from '@/components/sections/Hero'
import { Services } from '@/components/sections/Services'
import { Portfolio } from '@/components/sections/Portfolio'
import { Pricing } from '@/components/sections/Pricing'
import { About } from '@/components/sections/About'
import { Contact } from '@/components/sections/Contact'
import { Testimonials } from '@/components/sections/Testimonials'

export default function Home() {
	const [isDark, setIsDark] = useState(true)
	const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 })
	const [cursorFollowerPosition, setCursorFollowerPosition] = useState({
		x: 0,
		y: 0,
	})

	const toggleTheme = () => {
		setIsDark(!isDark)
		document.documentElement.classList.toggle('dark')
	}

	useEffect(() => {
		const handleMouseMove = (e: MouseEvent) => {
			setCursorPosition({ x: e.clientX, y: e.clientY })

			// Add a slight delay to the follower for a nice effect
			setTimeout(() => {
				setCursorFollowerPosition({ x: e.clientX, y: e.clientY })
			}, 100)
		}

		window.addEventListener('mousemove', handleMouseMove)

		// Scroll animation observer
		const observerOptions = {
			root: null,
			rootMargin: '0px',
			threshold: 0.1,
		}

		const handleIntersect = (
			entries: IntersectionObserverEntry[],
			observer: IntersectionObserver
		) => {
			entries.forEach(entry => {
				if (entry.isIntersecting) {
					entry.target.classList.add('visible')
					// For staggered children animations
					if (entry.target.classList.contains('stagger-children')) {
						entry.target.classList.add('visible')
					}
				}
			})
		}

		const observer = new IntersectionObserver(handleIntersect, observerOptions)

		// Observe all elements with animation classes
		const animatedElements = document.querySelectorAll(
			'.fade-up, .fade-in, .slide-in-left, .slide-in-right, .scale-up, .stagger-children'
		)

		animatedElements.forEach(el => {
			observer.observe(el)
		})

		return () => {
			window.removeEventListener('mousemove', handleMouseMove)
			animatedElements.forEach(el => {
				observer.unobserve(el)
			})
		}
	}, [])

	return (
		<div className='min-h-screen bg-background text-foreground transition-colors duration-300 animated-gradient-bg'>
			{/* Custom cursor (hidden on mobile) */}
			<div
				className='custom-cursor hidden md:block'
				style={{
					left: `${cursorPosition.x}px`,
					top: `${cursorPosition.y}px`,
				}}></div>
			<div
				className='custom-cursor-follower hidden md:block'
				style={{
					left: `${cursorFollowerPosition.x}px`,
					top: `${cursorFollowerPosition.y}px`,
				}}></div>

			<Header
				isDark={isDark}
				toggleTheme={toggleTheme}
			/>
			<Hero />
			<Services />
			<Portfolio />
			<Pricing />
			<Testimonials />
			<About />
			<Contact />
			<Footer />
		</div>
	)
}
