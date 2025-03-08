'use client'

import { useState } from 'react'
import Image from 'next/image'
import {
	ArrowRight,
	Globe,
	Code,
	Smartphone,
	Megaphone,
	BrainCircuit,
	Palette,
} from 'lucide-react'
import { portfolioCategories } from '@/lib/data'
import { PortfolioCategory, SERVICES } from '@/lib/types'

export function Portfolio() {
	const [activeTab, setActiveTab] = useState<string | null>('software-design-0')
	const groupedPortfolioCategories = new Map<string, PortfolioCategory[]>()

	portfolioCategories.forEach(category => {
		const serviceId = category.service.id
		if (!groupedPortfolioCategories.has(serviceId)) {
			groupedPortfolioCategories.set(serviceId, [])
		}
		groupedPortfolioCategories.get(serviceId)?.push(category)
	})

	const activeCategory = portfolioCategories.find(
		category =>
			`${category.service.id}-${groupedPortfolioCategories
				.get(category.service.id)
				?.indexOf(category)}` === activeTab
	)

	return (
		<section
			id='portafolio'
			className='py-24 portfolio-section'>
			<div className='container mx-auto px-6'>
				<div className='text-start sm:text-center mb-6 fade-up'>
					<h2 className='text-3xl md:text-4xl font-bold mb-4'>
						Nuestro Portafolio
					</h2>
					<p className='text-lg md:text-xl text-foreground/80'>
						Soluciones digitales adaptadas a tus necesidades
					</p>
				</div>

				<div className='mb-10 overflow-x-auto fade-in'>
					<div className='flex flex-wrap mx-3 space-x-0 sm:space-x-3 gap-2 pt-10 sm:justify-center justify-start'>
						{Array.from(groupedPortfolioCategories.entries()).map(
							([serviceId, categories]) => {
								const service = SERVICES.getServiceById(serviceId)
								return (
									<div
										key={serviceId}
										className='px-0.5 rounded-xl mb-4 relative'
										style={{
											background: `linear-gradient(45deg, ${categories[0].service.accentColor1}, ${categories[0].service.accentColor2})`,
										}}>
										<div className='flex rounded-xl my-0.5 bg-background/60 justify-normal sm:justify-center space-x-2 min-w-max p-1 sm:p-2'>
											{categories.map((category, index) => {
												const uniqueIndex = `${serviceId}-${index}`
												return (
													<button
														key={uniqueIndex}
														onClick={() => setActiveTab(uniqueIndex)}
														style={
															activeTab === uniqueIndex
																? {
																		background: `linear-gradient(45deg, ${category.service.accentColor1}, ${category.service.accentColor2})`,
																		color: 'white',
																  }
																: {}
														}
														className={`flex items-center space-x-2 px-4 md:px-6 py-2 md:py-3 rounded-xl transition-all duration-300  hover:scale-105  shadow-lg`}>
														{category.icon}
														<span className='hidden md:block md:text-sm'>
															{category.title}
														</span>
													</button>
												)
											})}
										</div>
										<div
											style={{
												background: `linear-gradient(45deg, ${service.accentColor1}, ${service.accentColor2})`,
											}}
											className='absolute -top-6 -left-3 text-white bg-background w-8 h-8 rounded-full flex items-center justify-center p-1'>
											{service.icon}
										</div>
									</div>
								)
							}
						)}
					</div>
				</div>

				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 stagger-children'>
					{activeCategory &&
						activeCategory.projects.map(project => (
							<div
								key={project.title}
								className='group relative overflow-hidden rounded-2xl border border-border hover:border-blue-500/50 transition-all duration-500'>
								<div className='aspect-video relative overflow-hidden'>
									<Image
										src={project.image}
										alt={project.title}
										fill
										className='object-cover transition-transform duration-500 group-hover:scale-110'
									/>
									<div className='absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
								</div>
								<div className='p-6'>
									<h3
										style={
											{
												'--accent-color-1': activeCategory.service.accentColor1,
												'--accent-color-2': activeCategory.service.accentColor2,
											} as React.CSSProperties
										}
										className='text-xl font-bold mb-2 gradient-text-var'>
										{project.title}
									</h3>
									<p className='text-foreground/80 mb-4'>
										{project.description}
									</p>
									<div className='flex flex-wrap gap-2'>
										{project.tags.map(tag => (
											<span
												key={tag}
												className='px-3 py-1 text-sm rounded-full bg-blue-500/10 text-blue-500'>
												{tag}
											</span>
										))}
									</div>
								</div>
								{/* <div className='absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                                    <button className='p-2 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors'>
                                        <ArrowRight className='w-5 h-5' />
                                    </button>
                                </div> */}
							</div>
						))}
				</div>
			</div>
		</section>
	)
}
