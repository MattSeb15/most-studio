'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import emailjs from '@emailjs/browser'
import { Loader2 } from 'lucide-react'
import { toast } from '@/hooks/use-toast'

// Validation schema
const formSchema = z.object({
	name: z.string().min(2, 'El nombre debe tener al menos 2 caracteres'),
	email: z.string().email('Email inválido'),
	subject: z.string().min(5, 'El asunto debe tener al menos 5 caracteres'),
	message: z.string().min(10, 'El mensaje debe tener al menos 10 caracteres'),
})

type FormData = z.infer<typeof formSchema>

export function Contact() {
	const [isSubmitting, setIsSubmitting] = useState(false)

	const showNotification = (
		title: string,
		description: string,
		variant?: 'destructive' | 'default'
	) => {
		toast({
			title,
			variant,
			description,
		})
	}

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<FormData>({
		resolver: zodResolver(formSchema),
	})

	const onSubmit = async (data: FormData) => {
		setIsSubmitting(true)

		try {
			// Replace these with your actual EmailJS credentials
			const result = await emailjs.send(
				process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '', // Service ID from EmailJS
				process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || '', // Template ID from EmailJS
				{
					form_name: data.name,
					form_email: data.email,
					form_asunto: data.subject,
					form_mensaje: data.message,
					to_email:
						process.env.NEXT_PUBLIC_EMAILJS_TO_EMAIL || 'info@moststudio.com', // Your company email
				},
				process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || '' // Public Key from EmailJS
			)

			if (result.status === 200) {
				/* 				toast.success('¡Mensaje enviado con éxito!') */
				showNotification(
					'¡Mensaje enviado con éxito',
					'¡Gracias por contactarnos!'
				)
				console.log('¡Mensaje enviado con éxito!')
				reset() // Reset form
			}
		} catch (error) {
			console.error('Error sending email:', error)

			showNotification(
				'Error al enviar el mensaje',
				'Por favor, inténtalo de nuevo',
				'destructive'
			)
		} finally {
			setIsSubmitting(false)
		}
	}

	return (
		<section
			id='contacto'
			className='py-24 relative contact-pattern'>
			<div className='container mx-auto px-6'>
				<div className='max-w-4xl mx-auto bg-background/50 backdrop-blur-lg p-8 rounded-2xl border border-border fade-up'>
					<div className='text-center mb-12'>
						<h2 className='text-4xl font-bold mb-4'>Contacta con Nosotros</h2>
						<p className='text-xl text-foreground/80'>
							¿Listo para comenzar tu próximo proyecto? Escríbenos
						</p>
					</div>

					<form
						onSubmit={handleSubmit(onSubmit)}
						className='space-y-6 stagger-children'>
						<div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
							<div className='space-y-2'>
								<input
									type='text'
									placeholder='Nombre'
									className={`custom-input w-full ${
										errors.name ? 'border-red-500' : ''
									}`}
									{...register('name')}
								/>
								{errors.name && (
									<p className='text-sm text-red-500'>{errors.name.message}</p>
								)}
							</div>

							<div className='space-y-2'>
								<input
									type='email'
									placeholder='Email'
									className={`custom-input w-full ${
										errors.email ? 'border-red-500' : ''
									}`}
									{...register('email')}
								/>
								{errors.email && (
									<p className='text-sm text-red-500'>{errors.email.message}</p>
								)}
							</div>
						</div>

						<div className='space-y-2'>
							<input
								type='text'
								placeholder='Asunto'
								className={`custom-input w-full ${
									errors.subject ? 'border-red-500' : ''
								}`}
								{...register('subject')}
							/>
							{errors.subject && (
								<p className='text-sm text-red-500'>{errors.subject.message}</p>
							)}
						</div>

						<div className='space-y-2'>
							<textarea
								placeholder='Mensaje'
								rows={6}
								className={`custom-input w-full ${
									errors.message ? 'border-red-500' : ''
								}`}
								{...register('message')}></textarea>
							{errors.message && (
								<p className='text-sm text-red-500'>{errors.message.message}</p>
							)}
						</div>

						<button
							type='submit'
							disabled={isSubmitting}
							className='w-full px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-xl font-semibold hover:scale-105 transition-transform disabled:opacity-70 disabled:hover:scale-100 flex items-center justify-center'>
							{isSubmitting ? (
								<>
									<Loader2 className='w-5 h-5 mr-2 animate-spin' />
									Enviando...
								</>
							) : (
								'Enviar Mensaje'
							)}
						</button>
					</form>
				</div>
			</div>
		</section>
	)
}
