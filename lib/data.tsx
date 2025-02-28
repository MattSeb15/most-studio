import { ReactNode } from 'react'
import {
	Globe,
	Code,
	Smartphone,
	Megaphone,
	BrainCircuit,
	Palette,
	Trophy,
	Users,
	Award,
	Target,
	Zap,
	Rocket,
	Sparkles,
	Gem,
	Star,
	Cpu,
	Bot,
	BarChart4,
	PenTool,
	Layers,
	MessageSquareCode,
	Layout,
} from 'lucide-react'

export const services = [
	{
		icon: <Code className='w-8 h-8' />,
		title: 'Diseño y Desarrollo de Software',
		description: 'Desarrollamos aplicaciones web y móviles a medida.',
		accentColor1: '#3b82f6',
		accentColor2: '#8b5cf6',
	},
	{
		icon: <Megaphone className='w-8 h-8' />,
		title: 'Marketing Digital',
		description: 'Estrategias de marketing digital efectivas para tu negocio.',
		accentColor1: '#8b5cf6',
		accentColor2: '#ec4899',
	},
	{
		icon: <BrainCircuit className='w-8 h-8' />,
		title: 'Inteligencia Artificial',
		description: 'Soluciones de IA personalizadas para tu negocio.',
		accentColor1: '#f59e0b',
		accentColor2: '#f87171',
	},
	{
		icon: <PenTool className='w-6 h-6' />,
		title: 'Diseño Gráfico',
		description: 'Diseño visual impactante para tu marca.',
		accentColor1: '#ec4899',
		accentColor2: '#ef4444',
	},
	{
		icon: <MessageSquareCode className='w-8 h-8' />,
		title: 'Consultoría',
		description: 'Asesoramiento experto para optimizar tu presencia digital.',
		accentColor1: '#22c55e',
		accentColor2: '#3b82f6',
	},
]

export const portfolioCategories = [
	{
		id: 'web-design',
		title: 'Diseño Web',
		icon: <Globe className='w-6 h-6' />,
		description: 'Diseños web modernos y responsivos',
		projects: [
			{
				title: 'Portal Corporativo',
				image:
					'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?q=80&w=1000',
				description: 'Diseño elegante y profesional para empresas',
				tags: ['UI/UX', 'Responsive', 'Moderno'],
			},
			{
				title: 'E-commerce Premium',
				image:
					'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000',
				description: 'Tienda online con diseño exclusivo',
				tags: ['E-commerce', 'UI/UX', 'Conversión'],
			},
			{
				title: 'Blog Creativo',
				image:
					'https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=1000',
				description: 'Plataforma de contenido moderna',
				tags: ['Blog', 'Contenido', 'SEO'],
			},
		],
	},
	{
		id: 'web-development',
		title: 'Desarrollo Web',
		icon: <Code className='w-6 h-6' />,
		description: 'Aplicaciones web modernas y escalables',
		projects: [
			{
				title: 'Plataforma SaaS',
				image:
					'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000',
				description: 'Software como servicio con arquitectura escalable',
				tags: ['React', 'Node.js', 'SaaS'],
			},
			{
				title: 'Dashboard Analítico',
				image:
					'https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1000',
				description: 'Panel de control con visualización de datos avanzada',
				tags: ['Dashboard', 'Analytics', 'API'],
			},
			{
				title: 'Sistema de Gestión',
				image:
					'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1000',
				description: 'Plataforma integral para gestión empresarial',
				tags: ['CRM', 'ERP', 'Cloud'],
			},
		],
	},
	{
		id: 'mobile-apps',
		title: 'Apps Móviles',
		icon: <Smartphone className='w-6 h-6' />,
		description: 'Aplicaciones nativas y multiplataforma',
		projects: [
			{
				title: 'App de Fitness',
				image:
					'https://images.unsplash.com/photo-1540563491646-4e7eff2d2c97?q=80&w=1000',
				description: 'Aplicación para seguimiento de actividad física',
				tags: ['iOS', 'Android', 'React Native'],
			},
			{
				title: 'Marketplace Local',
				image:
					'https://images.unsplash.com/photo-1607082349566-187342175e2f?q=80&w=1000',
				description: 'Plataforma de compra-venta para comercios locales',
				tags: ['Flutter', 'Firebase', 'Geolocalización'],
			},
			{
				title: 'App de Productividad',
				image:
					'https://images.unsplash.com/photo-1512758017271-d7b84c2113f1?q=80&w=1000',
				description: 'Herramienta para gestión de tareas y proyectos',
				tags: ['Swift', 'Kotlin', 'Cloud Sync'],
			},
		],
	},
	{
		id: 'digital-marketing',
		title: 'Marketing Digital',
		icon: <Megaphone className='w-6 h-6' />,
		description: 'Estrategias de marketing efectivas',
		projects: [
			{
				title: 'Campaña E-commerce',
				image:
					'https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1000',
				description: 'Estrategia integral para tienda online',
				tags: ['SEO', 'SEM', 'Email Marketing'],
			},
			{
				title: 'Branding Corporativo',
				image:
					'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1000',
				description: 'Desarrollo de identidad de marca completa',
				tags: ['Branding', 'Social Media', 'Contenido'],
			},
			{
				title: 'Lanzamiento de Producto',
				image:
					'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1000',
				description: 'Estrategia para introducción de nuevo producto',
				tags: ['Ads', 'PR', 'Influencers'],
			},
		],
	},
	{
		id: 'ai-solutions',
		title: 'Soluciones IA',
		icon: <BrainCircuit className='w-6 h-6' />,
		description: 'Inteligencia artificial aplicada',
		projects: [
			{
				title: 'Chatbot Atención Cliente',
				image:
					'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?q=80&w=1000',
				description: 'Asistente virtual para soporte 24/7',
				tags: ['NLP', 'Machine Learning', 'API'],
			},
			{
				title: 'Sistema Recomendación',
				image:
					'https://images.unsplash.com/photo-1555421689-491a97ff2040?q=80&w=1000',
				description: 'Motor de recomendaciones personalizado',
				tags: ['AI', 'Big Data', 'Personalización'],
			},
			{
				title: 'Análisis Predictivo',
				image:
					'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000',
				description: 'Herramienta de predicción para negocios',
				tags: ['Data Science', 'Forecasting', 'Business Intelligence'],
			},
		],
	},
	{
		id: 'graphic-design',
		title: 'Diseño Gráfico',
		icon: <PenTool className='w-6 h-6' />,
		description: 'Diseño visual impactante',
		projects: [
			{
				title: 'Identidad Corporativa',
				image:
					'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=1000',
				description: 'Desarrollo completo de identidad visual',
				tags: ['Logo', 'Branding', 'Guidelines'],
			},
			{
				title: 'Diseño Editorial',
				image:
					'https://images.unsplash.com/photo-1476234251651-f353703a034d?q=80&w=1000',
				description: 'Publicaciones impresas y digitales',
				tags: ['Editorial', 'Publicaciones', 'Maquetación'],
			},
			{
				title: 'Diseño Publicitario',
				image:
					'https://images.unsplash.com/photo-1542744094-3a31f272c490?q=80&w=1000',
				description: 'Materiales para campañas publicitarias',
				tags: ['Publicidad', 'Campañas', 'Visual'],
			},
		],
	},
]

export const teamMembers = [
	{
		name: 'Ana García',
		role: 'Directora Creativa',
		image:
			'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1000',
		description:
			'Experta en diseño y experiencia de usuario con más de 8 años en la industria.',
	},
	{
		name: 'Carlos Rodríguez',
		role: 'Desarrollador Senior',
		image:
			'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1000',
		description: 'Especialista en desarrollo web y aplicaciones móviles.',
	},
	{
		name: 'Laura Martínez',
		role: 'Marketing Manager',
		image:
			'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1000',
		description: 'Estratega digital con experiencia en grandes marcas.',
	},
]

export const timeline = [
	{
		year: '2020',
		title: 'Fundación',
		description: 'Comenzamos nuestra aventura con un equipo de 3 personas.',
	},
	{
		year: '2021',
		title: 'Expansión',
		description: 'Duplicamos nuestro equipo y abrimos nueva oficina.',
	},
	{
		year: '2022',
		title: 'Reconocimiento',
		description: 'Ganamos premio a mejor agencia digital emergente.',
	},
	{
		year: '2023',
		title: 'Internacional',
		description: 'Expandimos operaciones a nivel internacional.',
	},
]

export const achievements = [
	{
		icon: <Trophy className='w-6 h-6' />,
		title: '+100 Proyectos',
		description: 'Completados con éxito',
	},
	{
		icon: <Users className='w-6 h-6' />,
		title: '+50 Clientes',
		description: 'Satisfechos con nuestro trabajo',
	},
	{
		icon: <Award className='w-6 h-6' />,
		title: '15 Premios',
		description: 'Reconocimientos de la industria',
	},
	{
		icon: <Target className='w-6 h-6' />,
		title: '100% Compromiso',
		description: 'Con cada proyecto',
	},
]

// Pricing data
export const pricingCategories = [
	{
		id: 'packs-completos',
		title: 'Packs Completos',
		icon: <Rocket className='w-6 h-6' />,
		description: 'Soluciones integrales para tu negocio',
		plans: [
			{
				name: 'Nova Starter',
				price: { monthly: '€799', annual: '€7,990' },
				description:
					'Impulsa tu presencia digital con nuestro pack esencial para pequeños negocios.',
				accentColor: '#3b82f6',
				secondaryColor: '#60a5fa',
				ctaText: 'Despegar Ahora',
				popular: false,
				features: [
					{ title: 'Diseño web responsive', included: true },
					{ title: 'Hasta 5 páginas', included: true },
					{ title: 'SEO básico', included: true },
					{ title: 'Formulario de contacto', included: true },
					{ title: 'Integración con redes sociales', included: true },
					{ title: 'Dominio personalizado (1 año)', included: true },
					{ title: 'Hosting (1 año)', included: true },
					{ title: 'Soporte por email', included: true },
					{ title: 'Campaña básica en redes sociales', included: true },
					{ title: 'E-commerce', included: false },
					{ title: 'Contenido personalizado', included: false },
					{ title: 'Análisis de competencia', included: false },
				],
			},
			{
				name: 'Quantum Business',
				price: { monthly: '€1,499', annual: '€14,990' },
				description:
					'Solución completa para empresas que buscan destacar en el entorno digital.',
				accentColor: '#8b5cf6',
				secondaryColor: '#a78bfa',
				ctaText: 'Potenciar Negocio',
				popular: true,
				features: [
					{ title: 'Diseño web responsive premium', included: true },
					{ title: 'Hasta 10 páginas', included: true },
					{ title: 'SEO avanzado', included: true },
					{ title: 'Formulario de contacto avanzado', included: true },
					{ title: 'Integración con redes sociales', included: true },
					{ title: 'Dominio personalizado (1 año)', included: true },
					{ title: 'Hosting (1 año)', included: true },
					{ title: 'Soporte por email y teléfono', included: true },
					{ title: 'Estrategia de marketing digital', included: true },
					{ title: 'E-commerce básico', included: true },
					{ title: 'Contenido personalizado', included: true },
					{ title: 'Análisis de competencia', included: true },
				],
			},
			{
				name: 'Stellar Enterprise',
				price: { monthly: '€2,999', annual: '€29,990' },
				description:
					'Experiencia digital completa y personalizada para grandes empresas.',
				accentColor: '#ec4899',
				secondaryColor: '#f472b6',
				ctaText: 'Transformar Empresa',
				popular: false,
				features: [
					{ title: 'Diseño web a medida', included: true },
					{ title: 'Páginas ilimitadas', included: true },
					{ title: 'SEO avanzado + SEM', included: true },
					{ title: 'Sistema CRM integrado', included: true },
					{ title: 'Estrategia completa en redes', included: true },
					{ title: 'Dominio personalizado (1 año)', included: true },
					{ title: 'Hosting premium (1 año)', included: true },
					{ title: 'Soporte prioritario 24/7', included: true },
					{ title: 'Plan de marketing integral', included: true },
					{ title: 'E-commerce completo', included: true },
					{ title: 'Contenido profesional', included: true },
					{ title: 'Análisis de mercado completo', included: true },
				],
			},
		],
	},
	{
		id: 'diseno-desarrollo',
		title: 'Diseño & Desarrollo',
		icon: <Code className='w-6 h-6' />,
		description: 'Servicios especializados en diseño y desarrollo web',
		plans: [
			{
				name: 'Pixel Perfect',
				price: { monthly: '€599', annual: '€5,990' },
				description:
					'Diseño web profesional y desarrollo básico para tu presencia online.',
				accentColor: '#3b82f6',
				secondaryColor: '#60a5fa',
				ctaText: 'Crear Web',
				popular: false,
				features: [
					{ title: 'Diseño web responsive', included: true },
					{ title: 'Hasta 5 páginas', included: true },
					{ title: 'SEO básico', included: true },
					{ title: 'Formulario de contacto', included: true },
					{ title: 'Integración con redes sociales', included: true },
					{ title: 'Dominio personalizado (1 año)', included: true },
					{ title: 'Hosting (1 año)', included: true },
					{ title: 'Soporte por email', included: true },
					{ title: 'Actualizaciones mensuales', included: false },
					{ title: 'Funcionalidades avanzadas', included: false },
					{ title: 'Contenido personalizado', included: false },
					{ title: 'Mantenimiento premium', included: false },
				],
			},
			{
				name: 'Code Fusion',
				price: { monthly: '€1,299', annual: '€12,990' },
				description:
					'Desarrollo web avanzado con funcionalidades personalizadas.',
				accentColor: '#8b5cf6',
				secondaryColor: '#a78bfa',
				ctaText: 'Desarrollar Proyecto',
				popular: true,
				features: [
					{ title: 'Diseño web premium', included: true },
					{ title: 'Hasta 10 páginas', included: true },
					{ title: 'SEO avanzado', included: true },
					{ title: 'Formularios personalizados', included: true },
					{ title: 'Integración con APIs', included: true },
					{ title: 'Dominio personalizado (1 año)', included: true },
					{ title: 'Hosting (1 año)', included: true },
					{ title: 'Soporte técnico prioritario', included: true },
					{ title: 'Actualizaciones mensuales', included: true },
					{ title: 'Funcionalidades avanzadas', included: true },
					{ title: 'Panel de administración', included: true },
					{ title: 'Optimización de rendimiento', included: true },
				],
			},
			{
				name: 'Tech Architect',
				price: { monthly: '€2,499', annual: '€24,990' },
				description:
					'Soluciones tecnológicas avanzadas y arquitectura web personalizada.',
				accentColor: '#ec4899',
				secondaryColor: '#f472b6',
				ctaText: 'Arquitectura Avanzada',
				popular: false,
				features: [
					{ title: 'Arquitectura web a medida', included: true },
					{ title: 'Aplicación web compleja', included: true },
					{ title: 'SEO técnico avanzado', included: true },
					{ title: 'Integración con sistemas', included: true },
					{ title: 'APIs personalizadas', included: true },
					{ title: 'Infraestructura cloud', included: true },
					{ title: 'Seguridad avanzada', included: true },
					{ title: 'Soporte técnico 24/7', included: true },
					{ title: 'Mantenimiento continuo', included: true },
					{ title: 'Escalabilidad garantizada', included: true },
					{ title: 'Testing automatizado', included: true },
					{ title: 'Optimización continua', included: true },
				],
			},
		],
	},
	{
		id: 'marketing-digital',
		title: 'Marketing Digital',
		icon: <Megaphone className='w-6 h-6' />,
		description: 'Estrategias de marketing para potenciar tu negocio',
		plans: [
			{
				name: 'Impulso Digital',
				price: { monthly: '€499', annual: '€4,990' },
				description:
					'Estrategia básica de marketing digital para pequeños negocios.',
				accentColor: '#3b82f6',
				secondaryColor: '#60a5fa',
				ctaText: 'Iniciar Campaña',
				popular: false,
				features: [
					{ title: 'Gestión de redes sociales', included: true },
					{ title: 'SEO básico', included: true },
					{ title: 'Contenido mensual (4 posts)', included: true },
					{ title: 'Email marketing básico', included: true },
					{ title: 'Informe mensual', included: true },
					{ title: 'Google My Business', included: true },
					{ title: 'Análisis de competencia', included: false },
					{ title: 'Publicidad pagada', included: false },
					{ title: 'Estrategia de contenidos', included: false },
					{ title: 'Marketing de influencers', included: false },
					{ title: 'Análisis avanzado', included: false },
					{ title: 'Consultoría estratégica', included: false },
				],
			},
			{
				name: 'Visibilidad 360',
				price: { monthly: '€999', annual: '€9,990' },
				description: 'Marketing digital completo para empresas en crecimiento.',
				accentColor: '#8b5cf6',
				secondaryColor: '#a78bfa',
				ctaText: 'Amplificar Marca',
				popular: true,
				features: [
					{ title: 'Gestión avanzada de redes', included: true },
					{ title: 'SEO completo', included: true },
					{ title: 'Contenido semanal', included: true },
					{ title: 'Email marketing avanzado', included: true },
					{ title: 'Informes semanales', included: true },
					{ title: 'Presencia local optimizada', included: true },
					{ title: 'Análisis de competencia', included: true },
					{ title: 'Publicidad en redes sociales', included: true },
					{ title: 'Estrategia de contenidos', included: true },
					{ title: 'Marketing de influencers', included: false },
					{ title: 'Análisis avanzado', included: false },
					{ title: 'Consultoría estratégica', included: false },
				],
			},
			{
				name: 'Dominio Digital',
				price: { monthly: '€1,999', annual: '€19,990' },
				description:
					'Estrategia integral de marketing digital para dominar tu sector.',
				accentColor: '#ec4899',
				secondaryColor: '#f472b6',
				ctaText: 'Dominar Mercado',
				popular: false,
				features: [
					{ title: 'Estrategia omnicanal', included: true },
					{ title: 'SEO/SEM avanzado', included: true },
					{ title: 'Contenido diario', included: true },
					{ title: 'Automatización de marketing', included: true },
					{ title: 'Dashboard en tiempo real', included: true },
					{ title: 'Posicionamiento local premium', included: true },
					{ title: 'Análisis competitivo profundo', included: true },
					{ title: 'Campañas publicitarias completas', included: true },
					{ title: 'Estrategia editorial completa', included: true },
					{ title: 'Campañas con influencers', included: true },
					{ title: 'Business Intelligence', included: true },
					{ title: 'Consultoría estratégica', included: true },
				],
			},
		],
	},
	{
		id: 'ia-chatbots',
		title: 'IA & Chatbots',
		icon: <Bot className='w-6 h-6' />,
		description: 'Soluciones de inteligencia artificial para tu negocio',
		plans: [
			{
				name: 'AI Assistant',
				price: { monthly: '€399', annual: '€3,990' },
				description:
					'Chatbot básico para atención al cliente y preguntas frecuentes.',
				accentColor: '#3b82f6',
				secondaryColor: '#60a5fa',
				ctaText: 'Implementar Asistente',
				popular: false,
				features: [
					{ title: 'Chatbot básico', included: true },
					{ title: 'Respuestas predefinidas', included: true },
					{ title: 'Integración web', included: true },
					{ title: 'Horario 24/7', included: true },
					{ title: 'Personalización básica', included: true },
					{ title: 'Estadísticas mensuales', included: true },
					{ title: 'Aprendizaje automático', included: false },
					{ title: 'Integración con CRM', included: false },
					{ title: 'Procesamiento lenguaje natural', included: false },
					{ title: 'Personalización avanzada', included: false },
					{ title: 'Análisis de sentimiento', included: false },
					{ title: 'Integración multicanal', included: false },
				],
			},
			{
				name: 'Neural Concierge',
				price: { monthly: '€899', annual: '€8,990' },
				description:
					'Asistente virtual inteligente con capacidades avanzadas de conversación.',
				accentColor: '#8b5cf6',
				secondaryColor: '#a78bfa',
				ctaText: 'Activar Inteligencia',
				popular: true,
				features: [
					{ title: 'Chatbot avanzado', included: true },
					{ title: 'Aprendizaje continuo', included: true },
					{ title: 'Integración web y móvil', included: true },
					{ title: 'Disponibilidad 24/7', included: true },
					{ title: 'Personalización completa', included: true },
					{ title: 'Análisis de conversaciones', included: true },
					{ title: 'Aprendizaje automático', included: true },
					{ title: 'Integración con CRM', included: true },
					{ title: 'Procesamiento lenguaje natural', included: true },
					{ title: 'Personalización avanzada', included: false },
					{ title: 'Análisis de sentimiento', included: false },
					{ title: 'Integración multicanal', included: false },
				],
			},
			{
				name: 'Quantum Intelligence',
				price: { monthly: '€1,799', annual: '€17,990' },
				description:
					'Ecosistema de IA completo para transformar la experiencia de tus clientes.',
				accentColor: '#ec4899',
				secondaryColor: '#f472b6',
				ctaText: 'Transformar con IA',
				popular: false,
				features: [
					{ title: 'Ecosistema IA completo', included: true },
					{ title: 'Aprendizaje profundo', included: true },
					{ title: 'Integración omnicanal', included: true },
					{ title: 'Asistencia inteligente 24/7', included: true },
					{ title: 'Personalización total', included: true },
					{ title: 'Análisis predictivo', included: true },
					{ title: 'Machine Learning avanzado', included: true },
					{ title: 'Integración sistemas completa', included: true },
					{ title: 'NLP avanzado', included: true },
					{ title: 'Personalización contextual', included: true },
					{ title: 'Análisis emocional avanzado', included: true },
					{ title: 'Automatización inteligente', included: true },
				],
			},
		],
	},
	{
		id: 'diseno-grafico',
		title: 'Diseño Gráfico',
		icon: <PenTool className='w-6 h-6' />,
		description: 'Servicios de diseño visual para tu marca',
		plans: [
			{
				name: 'Identidad Esencial',
				price: { monthly: '€349', annual: '€3,490' },
				description: 'Paquete básico de identidad visual para tu marca.',
				accentColor: '#3b82f6',
				secondaryColor: '#60a5fa',
				ctaText: 'Crear Identidad',
				popular: false,
				features: [
					{ title: 'Diseño de logo', included: true },
					{ title: 'Paleta de colores', included: true },
					{ title: 'Tipografía', included: true },
					{ title: 'Tarjetas de visita', included: true },
					{ title: 'Plantilla de redes sociales', included: true },
					{ title: 'Firma de email', included: true },
					{ title: 'Manual de marca', included: false },
					{ title: 'Papelería corporativa', included: false },
					{ title: 'Diseño de packaging', included: false },
					{ title: 'Ilustraciones personalizadas', included: false },
					{ title: 'Fotografía de producto', included: false },
					{ title: 'Vídeo corporativo', included: false },
				],
			},
			{
				name: 'Branding Premium',
				price: { monthly: '€799', annual: '€7,990' },
				description: 'Identidad de marca completa para destacar en tu sector.',
				accentColor: '#8b5cf6',
				secondaryColor: '#a78bfa',
				ctaText: 'Potenciar Marca',
				popular: true,
				features: [
					{ title: 'Diseño de logo avanzado', included: true },
					{ title: 'Sistema de colores completo', included: true },
					{ title: 'Sistema tipográfico', included: true },
					{ title: 'Papelería corporativa', included: true },
					{ title: 'Kit de redes sociales', included: true },
					{ title: 'Firma y plantillas email', included: true },
					{ title: 'Manual de marca', included: true },
					{ title: 'Elementos gráficos', included: true },
					{ title: 'Diseño de packaging básico', included: true },
					{ title: 'Ilustraciones personalizadas', included: false },
					{ title: 'Fotografía de producto', included: false },
					{ title: 'Vídeo corporativo', included: false },
				],
			},
			{
				name: 'Visual Universe',
				price: { monthly: '€1,499', annual: '€14,990' },
				description: 'Ecosistema visual completo para una marca inolvidable.',
				accentColor: '#ec4899',
				secondaryColor: '#f472b6',
				ctaText: 'Crear Universo Visual',
				popular: false,
				features: [
					{ title: 'Sistema de identidad completo', included: true },
					{ title: 'Estrategia de marca', included: true },
					{ title: 'Sistema visual extenso', included: true },
					{ title: 'Papelería premium', included: true },
					{ title: 'Sistema completo para redes', included: true },
					{ title: 'Comunicación digital completa', included: true },
					{ title: 'Manual de marca extenso', included: true },
					{ title: 'Sistema de packaging', included: true },
					{ title: 'Diseño de experiencia', included: true },
					{ title: 'Ilustraciones personalizadas', included: true },
					{ title: 'Sesión fotográfica', included: true },
					{ title: 'Vídeo corporativo', included: true },
				],
			},
		],
	},
]

// FAQ data
export const pricingFAQs = [
	{
		question: '¿Qué incluye el mantenimiento web?',
		answer:
			'Nuestro servicio de mantenimiento incluye actualizaciones de seguridad, copias de seguridad, correcciones de errores y soporte técnico para mantener tu sitio funcionando correctamente.',
	},
	{
		question: '¿Cuánto tiempo tarda en desarrollarse un proyecto?',
		answer:
			'El tiempo de desarrollo varía según la complejidad del proyecto. Un sitio web básico puede estar listo en 2-3 semanas, mientras que proyectos más complejos pueden llevar 2-3 meses.',
	},
	{
		question: '¿Puedo actualizar mi plan más adelante?',
		answer:
			'Sí, puedes actualizar tu plan en cualquier momento. Te ayudaremos a hacer la transición sin problemas y solo pagarás la diferencia.',
	},
	{
		question: '¿Ofrecen servicios de marketing digital?',
		answer:
			'Sí, ofrecemos servicios de marketing digital completos, incluyendo SEO, gestión de redes sociales, publicidad digital y estrategias de contenido.',
	},
	{
		question: '¿Cómo funciona el proceso de diseño?',
		answer:
			'Nuestro proceso de diseño comienza con una fase de descubrimiento para entender tus necesidades, seguida de wireframes, diseño visual, revisiones y finalmente implementación.',
	},
	{
		question: '¿Qué tecnologías utilizan para el desarrollo?',
		answer:
			'Utilizamos tecnologías modernas como React, Next.js, Node.js, y otras herramientas de vanguardia para crear soluciones web rápidas, seguras y escalables.',
	},
]
