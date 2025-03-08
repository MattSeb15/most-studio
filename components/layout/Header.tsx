'use client'

import { Menu, X } from 'lucide-react'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { MostStudioLogo } from '../ui/logo'

interface HeaderProps {
	isDark: boolean
	toggleTheme: () => void
}

export function Header({ isDark, toggleTheme }: HeaderProps) {
	const [isMenuOpen, setIsMenuOpen] = useState(false)
	const [scrolled, setScrolled] = useState(false)
	const [activeLink, setActiveLink] = useState('')

	useEffect(() => {
		const handleScroll = () => {
			setScrolled(window.scrollY > 50)

			const sections = [
				'servicios',
				'portafolio',
				'precios',
				'nosotros',
				'contacto',
			]
			const currentSection = sections.find(section => {
				const element = document.getElementById(section)
				if (element) {
					const rect = element.getBoundingClientRect()
					return rect.top <= 100 && rect.bottom >= 100
				}
				return false
			})

			setActiveLink(currentSection || '')
		}

		window.addEventListener('scroll', handleScroll)
		return () => window.removeEventListener('scroll', handleScroll)
	}, [])

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		})
	}

	return (
		<header
			className={`fixed w-full z-50 transition-all duration-300 ${
				scrolled || isMenuOpen
					? 'py-2 bg-background/80 backdrop-blur-md border-b border-border'
					: 'py-6 bg-transparent'
			}`}>
			<nav className='container mx-auto px-6'>
				<div className='flex items-center justify-between'>
					<div
						className='relative group cursor-pointer'
						onClick={scrollToTop}>
						<MostStudioLogo />
						<div className='logo-glow'></div>
						<div className='absolute -bottom-2 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-300'></div>
					</div>

					<div className='hidden md:flex items-center md:space-x-0.5 lg:space-x-8'>
						{['Servicios', 'Portafolio', 'Precios', 'Nosotros', 'Contacto'].map(
							item => (
								<Link
									key={item}
									href={`#${item.toLowerCase()}`}
									className={`nav-link relative px-4 py-2 text-foreground/80 hover:text-foreground transition-colors ${
										activeLink === item.toLowerCase() ? 'nav-link-active' : ''
									}`}>
									{item}
									<div className='nav-link-highlight'></div>
								</Link>
							)
						)}
						<button
							style={{
								background: isDark
									? 'linear-gradient(to right, #3b82f6, #8b5cf6)'
									: 'linear-gradient(to right, rgba(59, 130, 246, 0.7), rgba(139, 92, 246, 0.7))',
							}}
							onClick={toggleTheme}
							className={`theme-switch ${isDark ? 'dark' : ''}`}
							aria-label='Toggle theme'>
							<span className='sr-only'>Toggle theme</span>
						</button>
					</div>

					<div className='md:hidden flex items-center space-x-4'>
						<button
							style={{
								background: isDark
									? 'linear-gradient(to right, #3b82f6, #8b5cf6)'
									: 'linear-gradient(to right, rgba(59, 130, 246, 0.7), rgba(139, 92, 246, 0.7))',
							}}
							onClick={toggleTheme}
							className={`theme-switch ${isDark ? 'dark' : ''} mr-2`}
							aria-label='Toggle theme'>
							<span className='sr-only'>Toggle theme</span>
						</button>
						<button
							onClick={() => setIsMenuOpen(!isMenuOpen)}
							className='text-foreground hover:text-foreground/80 transition-colors'
							aria-label='Toggle menu'>
							{isMenuOpen ? (
								<X className='w-6 h-6' />
							) : (
								<Menu className='w-6 h-6' />
							)}
						</button>
					</div>
				</div>
				{/* phone */}
				<div
					className={`md:hidden transition-all duration-300 ${
						isMenuOpen
							? 'max-h-screen opacity-100 visible'
							: 'max-h-0 opacity-0 invisible'
					}`}>
					<div className='py-4 space-y-4'>
						{['Servicios', 'Portafolio', 'Precios', 'Nosotros', 'Contacto'].map(
							item => (
								<Link
									key={item}
									href={`#${item.toLowerCase()}`}
									onClick={() => setIsMenuOpen(false)}
									className={`block px-4 py-2 text-foreground/80 hover:text-foreground transition-colors ${
										activeLink === item.toLowerCase() ? 'text-blue-500' : ''
									}`}>
									{item}
								</Link>
							)
						)}
					</div>
				</div>
			</nav>
		</header>
	)
}
