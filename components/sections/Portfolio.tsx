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

export function Portfolio() {
	const [activeTab, setActiveTab] = useState(0)

	return (
		<section
			id='portafolio'
			className='py-24 portfolio-section'>
			<div className='container mx-auto px-6'>
				<div className='text-start sm:text-center mb-16 fade-up'>
					<h2 className='text-3xl md:text-4xl font-bold mb-4'>
						Nuestro Portafolio
					</h2>
					<p className='text-lg md:text-xl text-foreground/80'>
						Soluciones digitales adaptadas a tus necesidades
					</p>
				</div>

				<div className='mb-12 overflow-x-auto fade-in'>
					<div className='flex space-x-2 min-w-max p-2'>
						{portfolioCategories.map((category, index) => (
							<button
								key={category.id}
								onClick={() => setActiveTab(index)}
								className={`flex items-center space-x-2 px-6 py-3 rounded-xl transition-all duration-300 ${
									activeTab === index
										? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg'
										: 'bg-background/50 hover:bg-background/80 border border-border'
								}`}>
								{category.icon}
								<span>{category.title}</span>
							</button>
						))}
					</div>
				</div>

				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 stagger-children'>
					{portfolioCategories[activeTab].projects.map(project => (
						<div
							key={project.title}
							className='group relative overflow-hidden rounded-2xl bg-background/50 backdrop-blur-sm border border-border hover:border-blue-500/50 transition-all duration-500'>
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
								<h3 className='text-xl font-bold mb-2 gradient-text'>
									{project.title}
								</h3>
								<p className='text-foreground/80 mb-4'>{project.description}</p>
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
							<div className='absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
								<button className='p-2 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors'>
									<ArrowRight className='w-5 h-5' />
								</button>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}
