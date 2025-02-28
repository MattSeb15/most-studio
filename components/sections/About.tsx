'use client'

import { Lightbulb, Trophy, Users, Award, Target } from 'lucide-react'
import Image from 'next/image'
import { teamMembers, timeline, achievements } from '@/lib/data'

export function About() {
	return (
		<section
			id='nosotros'
			className='py-24 relative'>
			<div className='about-background'></div>
			<div className='container mx-auto px-6 relative'>
				{/* Introduction */}
				<div className='intro-section text-start sm:text-center mb-24 fade-up'>
					<div className='intro-icon-container'>
						<Lightbulb className='w-12 h-12 text-blue-500' />
					</div>
					<h2 className='text-3xl md:text-4xl font-bold mb-6'>Quiénes Somos</h2>
					<p className='text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto'>
						Somos un equipo apasionado por la creación de experiencias digitales
						excepcionales. Combinamos creatividad, tecnología y estrategia para
						transformar ideas en realidades digitales.
					</p>
				</div>

				{/* Timeline */}
				<div className='timeline-container mb-24'>
					<h3 className='text-3xl font-bold text-center mb-12 fade-up'>
						Nuestra Historia
					</h3>
					{timeline.map((item, index) => (
						<div
							key={item.year}
							className={`timeline-item`}>
							<div className='timeline-content'>
								<span className='timeline-year'>{item.year}</span>
								<h4 className='timeline-title'>{item.title}</h4>
								<p className='timeline-description'>{item.description}</p>
							</div>
						</div>
					))}
				</div>

				{/* Team */}
				<div className='mb-24'>
					<h3 className='text-3xl font-bold text-center mb-12 fade-up'>
						Nuestro Equipo
					</h3>
					<div className='grid grid-cols-1 md:grid-cols-3 gap-8 stagger-children'>
						{teamMembers.map(member => (
							<div
								key={member.name}
								className='team-card'>
								<div className='team-image-container'>
									<Image
										src={member.image}
										alt={member.name}
										fill
										className='team-image'
									/>
								</div>
								<div className='team-info'>
									<h4 className='team-name'>{member.name}</h4>
									<p className='team-role'>{member.role}</p>
									<p className='team-description'>{member.description}</p>
								</div>
							</div>
						))}
					</div>
				</div>

				{/* Achievements */}
				<div>
					<h3 className='text-3xl font-bold text-center mb-12 fade-up'>
						Nuestros Logros
					</h3>
					<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 stagger-children'>
						{achievements.map(achievement => (
							<div
								key={achievement.title}
								className='achievement-card'>
								<div className='achievement-icon'>{achievement.icon}</div>
								<h4 className='achievement-title'>{achievement.title}</h4>
								<p className='achievement-description'>
									{achievement.description}
								</p>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	)
}
