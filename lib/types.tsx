import {
	BrainCircuit,
	Code,
	Megaphone,
	MessageCircleQuestion,
	MessageSquareCode,
	PenTool,
	Rabbit,
	View,
} from 'lucide-react'
import { ReactNode } from 'react'

export class SERVICES {
	static readonly EXPRESS: Service = {
		id: 'express',
		icon: <Rabbit className='w-auto h-auto' />,
		title: 'Desarrollo Express',
		description: 'Desarrollo rápido y efectivo de aplicaciones web y móviles.',
		accentColor1: '#34D399',
		accentColor2: '#10B981',
	}
	static readonly SOFTWARE_DESIGN: Service = {
		id: 'software-design',
		icon: <Code className='w-auto h-auto' />,
		title: 'Diseño y Desarrollo de Software',
		description: 'Desarrollamos aplicaciones web y móviles a medida.',
		accentColor1: '#3b82f6',
		accentColor2: '#8b5cf6',
	}
	static readonly MARKETING: Service = {
		id: 'marketing',
		icon: <Megaphone className='w-auto h-auto' />,
		title: 'Marketing Digital',
		description: 'Estrategias de marketing digital efectivas para tu negocio.',
		accentColor1: '#8b5cf6',
		accentColor2: '#ec4899',
	}
	static readonly AI: Service = {
		id: 'ai',
		icon: <BrainCircuit className='w-auto h-auto' />,
		title: 'Inteligencia Artificial',
		description: 'Soluciones de IA personalizadas para tu negocio.',
		accentColor1: '#f59e0b',
		accentColor2: '#f87171',
	}
	static readonly VISUAL_PRODUCTION: Service = {
		id: 'graphic-design',
		icon: <View className='w-auto h-auto' />,
		title: 'Producción Visual',
		description:
			'Potencia tu marca con diseño visual y videos de alto impacto.',
		accentColor1: '#ec4899',
		accentColor2: '#ef4444',
	}
	static readonly CONSULT: Service = {
		id: 'consult',
		icon: <MessageCircleQuestion className='w-auto h-auto' />,
		title: 'Consultoría',
		description: 'Asesoramiento experto para optimizar tu presencia digital.',
		accentColor1: '#22c55e',
		accentColor2: '#3b82f6',
	}
	static readonly ALL = [
		SERVICES.SOFTWARE_DESIGN,
		SERVICES.MARKETING,
		SERVICES.AI,
		SERVICES.VISUAL_PRODUCTION,
		SERVICES.CONSULT,
	]

	static getServiceById(id: string): Service {
		return SERVICES.ALL.find(service => service.id === id) as Service
	}
}

export interface Service {
	id: string
	icon: ReactNode
	title: string
	description: string
	accentColor1: string
	accentColor2: string
}

export interface PortfolioProject {
	title: string
	image: string
	description: string
	tags: string[]
}

export interface PortfolioCategory {
	id: string
	title: string
	icon: ReactNode
	description: string
	service: Service
	projects: PortfolioProject[]
}

export interface Feature {
	service_id?: string
	title: string
	included?: boolean
}

export enum PAY_METHOD {
	MONTHLY = 'al mes',
	ONCE = 'pago único',
	ANNUALLY = 'al año',
}

export interface PricingPlan {
	name: string
	price: string
	description: string
	accentColor: string
	secondaryColor: string
	ctaText: string
	payMethod: PAY_METHOD
	popular: boolean
	features: Feature[]
}

export interface PricingCategory {
	id: string
	title: string
	icon: ReactNode
	description: string
	service: Service
	plans: PricingPlan[]
}
export interface FAQ {
	question: string
	answer: string
}
