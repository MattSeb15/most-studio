'use client'

import {
	Lightbulb,
	Trophy,
	Users,
	Award,
	Target,
	BotMessageSquare,
	Wand,
	ChartPie,
	ChartNoAxesColumn,
	Film,
	PencilRuler,
	Briefcase,
	Code,
	Rabbit,
	BrainCircuit,
	Megaphone,
	MessageCircleQuestion,
} from 'lucide-react'
import Image from 'next/image'
import { teamMembers, timeline, achievements } from '@/lib/data'
import { MostStudioLogo } from '../ui/logo'
import { SERVICES } from '@/lib/types'
import React, { ReactNode } from 'react'

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
					<div className='mb-5 text-foreground/80 text-lg md:text-xl max-w-3xl mx-auto'>
						Somos{' '}
						<MostStudioLogo
							isInline
							className='justify-end items-start'
						/>{' '}
						un equipo
						<span className='font-bold ecuador-flag-gradient-text'>
							{' '}
							ECUATORIANO
						</span>{' '}
						apasionado por la creación de experiencias digitales excepcionales.
						Combinamos{' '}
						<span className='font-semibold text-foreground'>
							CREATIVIDAD
						</span>,{' '}
						<span className='font-semibold text-foreground'>TECNOLOGÍA</span> y{' '}
						<span className='font-semibold text-foreground'>ESTRATEGIA</span>{' '}
						para transformar ideas en realidades digitales que impulsan negocios
						y marcas hacia el éxito.
					</div>
					<div className='max-w-3xl mx-auto mt-6'>
						<div
							style={{
								backgroundImage: 'url(/most_studio_logo_500.avif)',
								backgroundSize: 'cover',
								backgroundPosition: 'center',
								backgroundRepeat: 'no-repeat',
							}}
							className='relative w-[250px] h-[250px] md:w-[380px] md:h-[380px] lg:w-[500px] lg:h-[500px] mx-auto mt-6'>
							<div className='absolute bottom-0 sm:bottom-10 -left-4 sm:-left-28 flex flex-col gap-2 items-end'>
								<ServiceContainer text='Desarrollo de Software'>
									<Code />
								</ServiceContainer>
								<ServiceContainer text='Diseño de Software'>
									<Wand />
								</ServiceContainer>
								<ServiceContainer text={SERVICES.EXPRESS.title}>
									<Rabbit />
								</ServiceContainer>
							</div>
							<div className='absolute top-0 sm:top-10 -left-4 sm:-left-28 flex flex-col gap-2 items-end'>
								<ServiceContainer text={SERVICES.AI.title}>
									<BrainCircuit />
								</ServiceContainer>
								<ServiceContainer text='Chat Bots'>
									<BotMessageSquare />
								</ServiceContainer>
							</div>
							<div className='absolute top-5 sm:top-10 -right-4 sm:-right-28 flex flex-col gap-2 items-start'>
								<ServiceContainer text={SERVICES.MARKETING.title}>
									<Megaphone />
								</ServiceContainer>
								<ServiceContainer text='Gestion de Redes'>
									<ChartNoAxesColumn />
								</ServiceContainer>
							</div>
							<div className='absolute right-0 bottom-1/2 transform translate-y-1/2 flex flex-col gap-2 items-start'>
								<ServiceContainer text='Diseño Gráfico'>
									<PencilRuler />
								</ServiceContainer>
								<ServiceContainer text='Creación de Videos'>
									<Film />
								</ServiceContainer>
							</div>
							<div className='absolute bottom-5 sm:bottom-10 -right-5 sm:-right-28 flex flex-col gap-2 items-start'>
								<ServiceContainer text={SERVICES.CONSULT.title}>
									<MessageCircleQuestion />
								</ServiceContainer>
								<ServiceContainer text='Asesoramiento'>
									<Briefcase />
								</ServiceContainer>
							</div>
						</div>
					</div>
					<div className='flex flex-col sm:flex-row mt-5 space-y-4 space-x-0 sm:space-y-0 sm:space-x-4 text-foreground/80 text-lg md:text-xl max-w-3xl mx-auto'>
						<div>
							Con{' '}
							<span className='font-semibold text-foreground'>
								AÑOS DE EXPERIENCIA
							</span>{' '}
							en el sector, hemos trabajado con clientes de diversas industrias,
							brindando soluciones innovadoras y personalizadas que cumplen con
							sus necesidades específicas. Nos enorgullece ser{' '}
							<span className='font-semibold text-foreground'>PIONEROS</span> en
							Ecuador en ofrecer un paquete completo de servicios digitales,
							cubriendo todas las áreas esenciales para el crecimiento de una
							marca en el mundo digital.
						</div>
						<div>
							<span className='text-foreground font-semibold'>
								A DIFERENCIA DE OTRAS AGENCIAS
							</span>
							, todo nuestro trabajo es realizado por nuestro equipo interno,
							sin necesidad de que nuestros clientes recurran a diferentes
							proveedores. Ofrecemos un ecosistema integral que incluye
							<span className='text-foreground font-semibold'>
								{' '}
								MÁS DE 5 SERVICIOS
							</span>{' '}
							digitales en un solo paquete.
						</div>
					</div>
				</div>

				{/* Timeline */}
				{/* 	<div className='timeline-container mb-24'>
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
				</div> */}

				{/* Team */}
				{/* 				<div className='mb-24'>
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
				</div> */}

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
const ServiceContainer: React.FC<{ children: ReactNode; text: string }> = ({
	children,
	text,
}) => {
	return (
		<div className='bg-background/50 backdrop-blur-sm px-3 py-1 rounded-md text-xs md:text-sm min-w-64 max-w-fit'>
			<div className='flex items-center space-x-2'>
				<span>{text}</span>
				{React.cloneElement(children as React.ReactElement, {
					className: 'w-4 h-4 md:w-6 md:h-6 hidden sm:block',
				})}
			</div>
		</div>
	)
}
