'use client'

import { useState } from 'react'

export function Contact() {
	const [email, setEmail] = useState('')

	return (
		<section
			id='contacto'
			className='py-24 relative contact-pattern'>
			<div className='container mx-auto px-3 sm:px-6'>
				<div className='max-w-4xl mx-auto backdrop-blur-sm py-4 px-4 sm:p-8 rounded-2xl border border-border fade-up'>
					<div className='text-start sm:text-center mb-5 sm:mb-12'>
						<h2 className='text-2xl md:text-4xl font-bold mb-4'>
							Contacta con Nosotros
						</h2>
						<p className='text-lg md:text-xl text-foreground/80'>
							¿Listo para comenzar tu próximo proyecto? Escríbenos
						</p>
					</div>
					<form className='space-y-2 sm:space-y-6 stagger-children'>
						<div className='grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-6'>
							<input
								type='text'
								placeholder='Nombre'
								className='custom-input'
							/>
							<input
								type='email'
								placeholder='Email'
								className='custom-input'
								value={email}
								onChange={e => setEmail(e.target.value)}
							/>
						</div>
						<input
							type='text'
							placeholder='Asunto'
							className='custom-input'
						/>
						<textarea
							placeholder='Mensaje'
							rows={6}
							className='custom-input resize-none'></textarea>
						<button
							type='submit'
							className='w-full text-sm sm:text-base px-4 py-2 sm:px-8 sm:py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-xl font-semibold hover:scale-105 transition-transform'>
							Enviar Mensaje
						</button>
					</form>
				</div>
			</div>
		</section>
	)
}
