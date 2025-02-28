'use client'

import { useState } from 'react'
import { Check, X, Sparkles, ArrowRight, Zap } from 'lucide-react'
import { cn } from '@/lib/utils'
import { pricingCategories, pricingFAQs } from '@/lib/data'

export function Pricing() {
	const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>(
		'monthly'
	)
	const [activeCategory, setActiveCategory] = useState(0)

	return (
		<section
			id='precios'
			className='py-24 relative overflow-hidden'>
			{/* Animated background elements */}
			<div className='absolute inset-0 overflow-hidden'>
				<div className='absolute top-0 left-0 w-full h-full'>
					<div className='absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse'></div>
					<div
						className='absolute bottom-1/3 right-1/4 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl animate-pulse'
						style={{ animationDelay: '2s' }}></div>
					<div
						className='absolute top-2/3 left-1/2 w-80 h-80 bg-pink-500/5 rounded-full blur-3xl animate-pulse'
						style={{ animationDelay: '4s' }}></div>
				</div>
				<div className='absolute inset-0 bg-grid-pattern opacity-5'></div>
			</div>

			<div className='container mx-auto px-6 relative z-10'>
				<div className='text-start sm:text-center mb-16 fade-up'>
					<h2 className='text-3xl md:text-4xl font-bold mb-4'>
						Nuestros Planes
					</h2>
					<p className='text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto'>
						Soluciones adaptadas a tus necesidades y presupuesto
					</p>
				</div>

				{/* Category tabs */}
				<div className='mb-12 overflow-x-auto fade-in'>
					<div className='flex space-x-2 min-w-max p-2 justify-center'>
						{pricingCategories.map((category, index) => (
							<button
								key={category.id}
								onClick={() => setActiveCategory(index)}
								className={`flex items-center space-x-2 px-6 py-3 rounded-xl transition-all duration-300 ${
									activeCategory === index
										? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg scale-105'
										: 'bg-background/50 hover:bg-background/80 border border-border'
								}`}>
								{category.icon}
								<span>{category.title}</span>
							</button>
						))}
					</div>
				</div>

				{/* Category description */}
				<div className='text-center mb-12 fade-in'>
					<p className='text-lg text-foreground/80 max-w-2xl mx-auto'>
						{pricingCategories[activeCategory].description}
					</p>
				</div>

				{/* Billing toggle */}
				<div className='flex justify-center mb-12 fade-in'>
					<div className='bg-background/50 p-1 rounded-xl border border-border inline-flex'>
						<button
							onClick={() => setBillingCycle('monthly')}
							className={cn(
								'px-6 py-2 rounded-lg text-sm font-medium transition-all',
								billingCycle === 'monthly'
									? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-md'
									: 'text-foreground/70 hover:text-foreground'
							)}>
							Mensual
						</button>
						<button
							onClick={() => setBillingCycle('annual')}
							className={cn(
								'px-6 py-2 rounded-lg text-sm font-medium transition-all',
								billingCycle === 'annual'
									? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-md'
									: 'text-foreground/70 hover:text-foreground'
							)}>
							Anual <span className='text-xs opacity-75'>(10% descuento)</span>
						</button>
					</div>
				</div>

				{/* Pricing cards */}
				<div className='grid grid-cols-1 md:grid-cols-3 gap-8 stagger-children'>
					{pricingCategories[activeCategory].plans.map(plan => (
						<div
							key={plan.name}
							className={cn(
								'card-3d relative rounded-2xl overflow-hidden border border-border transition-all duration-500',
								plan.popular ? 'md:-mt-4 md:mb-4 shadow-xl' : 'bg-background/50'
							)}>
							<div className='card-3d-inner'>
								{plan.popular && (
									<div
										className='absolute top-0 right-0 px-4 py-1 text-xs font-medium text-white'
										style={{
											background: `linear-gradient(to right, ${plan.accentColor}, ${plan.secondaryColor})`,
										}}>
										<Sparkles className='inline-block w-3 h-3 mr-1' />
										Más Popular
									</div>
								)}

								<div className='p-8'>
									<div className='flex items-center mb-2'>
										<div
											className='w-10 h-10 rounded-full flex items-center justify-center mr-3'
											style={{
												background: `linear-gradient(135deg, ${plan.accentColor}, ${plan.secondaryColor})`,
											}}>
											<Zap className='w-5 h-5 text-white' />
										</div>
										<h3 className='text-2xl font-bold'>{plan.name}</h3>
									</div>
									<p className='text-foreground/70 mb-6'>{plan.description}</p>

									<div className='mb-6'>
										<span
											className='text-4xl font-bold'
											style={{ color: plan.accentColor }}>
											{billingCycle === 'monthly'
												? plan.price.monthly
												: plan.price.annual}
										</span>
										<span className='text-foreground/60 ml-2'>
											{billingCycle === 'monthly' ? '/mes' : '/año'}
										</span>
									</div>

									<button
										className='w-full py-3 px-6 rounded-xl font-medium text-white mb-8 transition-all hover:scale-105 flex items-center justify-center'
										style={{
											background: `linear-gradient(to right, ${plan.accentColor}, ${plan.secondaryColor})`,
										}}>
										{plan.ctaText}
										<ArrowRight className='inline-block ml-2 w-4 h-4' />
									</button>

									<div className='space-y-4'>
										{plan.features.map((feature, index) => (
											<div
												key={index}
												className='flex items-start'>
												{feature.included ? (
													<Check
														className='w-5 h-5 mr-3 flex-shrink-0 mt-0.5'
														style={{ color: plan.accentColor }}
													/>
												) : (
													<X className='w-5 h-5 mr-3 flex-shrink-0 mt-0.5 text-foreground/40' />
												)}
												<span
													className={
														feature.included ? '' : 'text-foreground/40'
													}>
													{feature.title}
												</span>
											</div>
										))}
									</div>
								</div>
							</div>
						</div>
					))}
				</div>

				{/* Enterprise plan */}
				<div className='mt-16 p-8 rounded-2xl border border-border bg-background/50 glow-border fade-up'>
					<div className='flex flex-col md:flex-row justify-between items-center'>
						<div className='mb-6 md:mb-0'>
							<h3 className='text-2xl font-bold mb-2'>
								¿Necesitas una solución personalizada?
							</h3>
							<p className='text-foreground/70 max-w-2xl'>
								Contacta con nosotros para discutir tus necesidades específicas
								y obtener un presupuesto a medida.
							</p>
						</div>
						<button className='px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-xl font-semibold hover:scale-105 transition-transform'>
							Solicitar Presupuesto
						</button>
					</div>
				</div>

				{/* FAQ */}
				<div className='mt-24 fade-up'>
					<h3 className='text-2xl font-bold text-start sm:text-center mb-12'>
						Preguntas Frecuentes
					</h3>
					<div className='grid grid-cols-1 md:grid-cols-2 gap-8 stagger-children'>
						{pricingFAQs.map((faq, index) => (
							<div
								key={index}
								className='p-6 rounded-xl border border-border bg-background/50 hover:bg-background/70 transition-colors'>
								<h4 className='text-lg font-semibold mb-2'>{faq.question}</h4>
								<p className='text-foreground/70'>{faq.answer}</p>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	)
}
