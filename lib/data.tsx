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
	Rabbit,
	Video,
	BadgePercent,
} from 'lucide-react'
import {
	FAQ,
	PAY_METHOD,
	PortfolioCategory,
	PricingCategory,
	SERVICES,
	Service,
} from './types'

export const services: Service[] = [
	SERVICES.SOFTWARE_DESIGN,
	SERVICES.MARKETING,
	SERVICES.AI,
	SERVICES.VISUAL_PRODUCTION,
	SERVICES.CONSULT,
]

export const portfolioCategories: PortfolioCategory[] = [
	{
		id: 'web-design',
		title: 'Diseño Web',
		icon: <Globe className='w-6 h-6' />,
		description: 'Diseños web modernos y responsivos',
		service: SERVICES.SOFTWARE_DESIGN,
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
		service: SERVICES.SOFTWARE_DESIGN,
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
		service: SERVICES.SOFTWARE_DESIGN,
		projects: [
			{
				title: 'App de Fitness',
				image:
					'https://media.licdn.com/dms/image/v2/D5612AQEz_EwPsFSQWw/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1705065290862?e=2147483647&v=beta&t=MuslmkQmS6fYHoZBLb3a3HRnq1Kg60pZus8cepQWiGg',
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
		service: SERVICES.MARKETING,
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
		service: SERVICES.AI,
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
		service: SERVICES.VISUAL_PRODUCTION,
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
	{
		id: 'video-production',
		title: 'Producción de Video',
		icon: <Video className='w-6 h-6' />,
		description: 'Creación y edición de videos impactantes',
		service: SERVICES.VISUAL_PRODUCTION,
		projects: [
			{
				title: 'Edición de Video',
				image:
					'https://images.unsplash.com/photo-1581090124473-4d71aa51f0a8?q=80&w=1000',
				description: 'Montaje, efectos y corrección de color',
				tags: ['Edición', 'Postproducción', 'Corrección de color'],
			},
			{
				title: 'Animación y Motion Graphics',
				image:
					'https://images.unsplash.com/photo-1607746882042-944635dfe10e?q=80&w=1000',
				description: 'Gráficos animados para contenido visual',
				tags: ['Animación', 'Motion Graphics', 'VFX'],
			},
			{
				title: 'Producción Audiovisual',
				image:
					'https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=1000',
				description: 'Grabación y producción de videos',
				tags: ['Grabación', 'Producción', 'Cinematografía'],
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
		icon: <Target className='w-6 h-6' />,
		title: '100% Compromiso',
		description: 'Con cada proyecto',
	},
	{
		icon: <BadgePercent className='w-6 h-6' />,
		title: 'Precios Accesibles',
		description: 'Mejores del mercado',
	},
]

// Pricing data
export const pricingCategories: PricingCategory[] = [
	{
		id: 'packs-completos',
		title: 'Packs Completos',
		icon: <Rocket className='w-6 h-6' />,
		description: 'Soluciones integrales para tu negocio',
		service: SERVICES.SOFTWARE_DESIGN,
		plans: [
			{
				name: 'Nova Starter',
				price: '$500',
				payMethod: PAY_METHOD.ONCE,
				description:
					'Impulsa tu presencia digital con nuestro pack esencial para pequeños negocios.',
				accentColor: '#3b82f6',
				secondaryColor: '#60a5fa',
				ctaText: 'Despegar Ahora',
				popular: false,
				features: [
					{
						title: 'Diseño web responsive',
						included: true,
						service_id: 'software-design',
					},
					{
						title: 'Hasta 5 páginas',
						included: true,
						service_id: 'software-design',
					},
					{
						title: 'SEO básico',
						included: true,
						service_id: 'software-design',
					},
					{
						title: 'Formulario de contacto',
						included: true,
						service_id: 'software-design',
					},
					{
						title: 'Integración con redes sociales',
						included: true,
						service_id: 'software-design',
					},
					{
						title: 'Dominio personalizado (1 año)',
						included: true,
						service_id: 'software-design',
					},
					{
						title: 'Hosting (1 año)',
						included: true,
						service_id: 'software-design',
					},
					{
						title: 'Soporte por email',
						included: true,
						service_id: 'software-design',
					},
					{
						title: 'E-commerce',
						included: false,
						service_id: 'software-design',
					},

					{
						title: 'Gestion básica de redes sociales',
						included: true,
						service_id: 'marketing',
					},
					{
						title:
							'Campaña básica en redes sociales (no incluye presupuesto publicitario)',
						included: true,
						service_id: 'marketing',
					},
					{
						title: 'Diseño de Marca Básico',
						service_id: 'graphic-design',
					},
					{
						title: 'Diseño de hasta 5 Ads',
						service_id: 'graphic-design',
					},
					{
						title: 'Video(s)',
						included: false,
						service_id: 'graphic-design',
					},
					{
						title:
							'Chat Bot básico (Atención al cliente y preguntas frecuentes)',
						service_id: 'ai',
					},
					{
						title: 'Asesoramiento básico',
						service_id: 'consult',
					},
					{ title: 'E-commerce', included: false },
					{ title: 'Panel administrativo', included: false },
					{ title: 'Análisis de competencia', included: false },
				],
			},
			{
				name: 'Quantum Business',
				price: '$1200',
				payMethod: PAY_METHOD.ONCE,
				description:
					'Potencia tu negocio con un paquete avanzado que incluye herramientas profesionales para crecimiento acelerado.',
				accentColor: '#db2777', // Rosa vibrante
				secondaryColor: '#f9a8d4', // Rosa claro
				ctaText: 'Potenciar Ahora',
				popular: true,
				features: [
					{
						title: 'Diseño web responsive premium',
						included: true,
						service_id: 'software-design',
					},
					{
						title: 'Hasta 10 páginas',
						included: true,
						service_id: 'software-design',
					},
					{
						title: 'SEO avanzado',
						included: true,
						service_id: 'software-design',
					},
					{
						title: 'Formulario de contacto avanzado',
						included: true,
						service_id: 'software-design',
					},
					{
						title: 'Integración con redes sociales y CRM',
						included: true,
						service_id: 'software-design',
					},
					{
						title: 'Dominio personalizado (2 años)',
						included: true,
						service_id: 'software-design',
					},
					{
						title: 'Hosting premium (2 años)',
						included: true,
						service_id: 'software-design',
					},
					{
						title: 'Soporte prioritario por email y chat',
						included: true,
						service_id: 'software-design',
					},
					{
						title: 'E-commerce básico',
						included: true,
						service_id: 'software-design',
					},
					{
						title: 'Panel administrativo básico',
						included: true,
						service_id: 'software-design',
					},
					{
						title: 'Gestion profesional de redes sociales',
						included: true,
						service_id: 'marketing',
					},
					{
						title:
							'Campaña avanzada en redes sociales (incluye $200 en presupuesto publicitario)',
						included: true,
						service_id: 'marketing',
					},
					{
						title: 'Diseño de Marca Profesional',
						included: true,
						service_id: 'graphic-design',
					},
					{
						title: 'Diseño de hasta 10 Ads',
						included: true,
						service_id: 'graphic-design',
					},
					{
						title:
							'Chat AI Respuesta Avanzada (ventas, soporte y atención al cliente)',
						included: true,
						service_id: 'ai',
					},
					{
						title: 'Asesoramiento estratégico',
						included: true,
						service_id: 'consult',
					},
					{
						title: 'Análisis de competencia',
						included: true,
						service_id: 'consult',
					},
					{
						title: 'Integración con Google Analytics',
						included: true,
						service_id: 'software-design',
					},
				],
			},
			{
				name: 'Stellar Enterprise',
				price: '$2500',
				payMethod: PAY_METHOD.ONCE,
				description:
					'La solución definitiva para negocios que buscan dominar el mercado con herramientas de última generación.',
				accentColor: '#ea580c', // Naranja intenso
				secondaryColor: '#fdba74', // Naranja claro
				ctaText: 'Conocer más',
				popular: false,
				features: [
					{
						title:
							'Diseño web responsive premium con animaciones personalizadas',
						included: true,
						service_id: 'software-design',
					},
					{
						title: 'Hasta 20 páginas',
						included: true,
						service_id: 'software-design',
					},
					{
						title: 'SEO avanzado y auditoría técnica',
						included: true,
						service_id: 'software-design',
					},
					{
						title: 'Formulario de contacto avanzado con integración CRM',
						included: true,
						service_id: 'software-design',
					},
					{
						title:
							'Integración con redes sociales, CRM y herramientas de automatización',
						included: true,
						service_id: 'software-design',
					},
					{
						title: 'Dominio personalizado (3 años)',
						included: true,
						service_id: 'software-design',
					},
					{
						title: 'Hosting premium (3 años)',
						included: true,
						service_id: 'software-design',
					},
					{
						title: 'Soporte prioritario 24/7 por email, chat y teléfono',
						included: true,
						service_id: 'software-design',
					},
					{
						title: 'E-commerce avanzado con pasarela de pago integrada',
						included: true,
						service_id: 'software-design',
					},
					{
						title: 'Panel administrativo avanzado con análisis de datos',
						included: true,
						service_id: 'software-design',
					},
					{
						title: 'Gestión profesional de redes sociales y contenido mensual',
						included: true,
						service_id: 'marketing',
					},
					{
						title:
							'Campaña avanzada en redes sociales (incluye $500 en presupuesto publicitario)',
						included: true,
						service_id: 'marketing',
					},
					{
						title: 'Diseño de Marca Premium (Identidad visual completa)',
						included: true,
						service_id: 'graphic-design',
					},
					{
						title: 'Diseño de hasta 20 Ads',
						included: true,
						service_id: 'graphic-design',
					},
					{
						title:
							'Chat Bot avanzado con IA (Atención al cliente, ventas y soporte técnico)',
						included: true,
						service_id: 'ai',
					},
					{
						title: 'Asesoramiento estratégico personalizado',
						included: true,
						service_id: 'consult',
					},
					{
						title: 'Análisis de competencia y mercado',
						included: true,
						service_id: 'consult',
					},
					{
						title: 'Integración con Google Analytics y Google Tag Manager',
						included: true,
						service_id: 'software-design',
					},
					{
						title: 'Email marketing automatizado',
						included: true,
						service_id: 'marketing',
					},
					{
						title: 'Landing pages de alta conversión',
						included: true,
						service_id: 'software-design',
					},
					{
						title: 'Certificado SSL premium',
						included: true,
						service_id: 'software-design',
					},
				],
			},
		],
	},
	{
		id: 'express',
		title: 'Express',
		icon: <Rabbit className='w-6 h-6' />,
		description:
			'Soluciones rápidas y efectivas que se ajustan a tu negocio (2-5 días de entrega).',
		service: SERVICES.EXPRESS,
		plans: [
			{
				name: 'Web Express',
				price: '$300',
				payMethod: PAY_METHOD.ONCE,
				description:
					'Obtén tu página web lista en tiempo récord con nuestro servicio rápido y eficiente.',
				accentColor: '#ef4444',
				secondaryColor: '#f87171',
				ctaText: 'Crear mi Web Rápido',
				popular: false,
				features: [
					{ title: 'Diseño web responsive', included: true },
					{ title: 'Desarrollo web', included: true },
					{ title: 'Hasta 3 páginas', included: true },
					{ title: 'Formulario de contacto', included: true },
					{ title: 'SEO básico', included: true },
					{ title: 'Soporte por email', included: true },
					{ title: 'Plantilla personalizable', included: true },
					{ title: 'Dominio personalizado (1 año)', included: true },
					{ title: 'Hosting (1 año)', included: true },
				],
			},
			{
				name: 'Landing Page',
				price: '$150',
				payMethod: PAY_METHOD.ONCE,
				description:
					'Maximiza tus conversiones con una landing page diseñada para captar la atención de tus clientes.',
				accentColor: '#10b981',
				secondaryColor: '#34d399',
				ctaText: 'Comenzar Ahora',
				popular: true,
				features: [
					{ title: 'Diseño web responsive', included: true },
					{ title: 'Estilo de diseño', included: true },
					{ title: 'Desarrollo web', included: true },
					{ title: 'Formulario de contacto', included: true },
					{ title: 'SEO básico', included: true },
					{ title: 'Soporte por email', included: true },
					{ title: 'Dominio personalizado (1 año)', included: true },
					{ title: 'Hosting (1 año)', included: true },
				],
			},
			{
				name: 'App Móvil Fast',
				price: '$250',
				payMethod: PAY_METHOD.ONCE,
				description:
					'Obtén una aplicación móvil básica funcional en tiempo récord con nuestro servicio rápido y eficiente.',
				accentColor: '#f97316',
				secondaryColor: '#fb923c',
				ctaText: 'Crear mi App Rápido',
				popular: false,
				features: [
					{
						title: 'Desarrollo multiplataforma (iOS y Android)',
						included: true,
					},
					{ title: 'Diseño UI/UX básico', included: true },
					{
						title: 'Diseño Adaptativo (MiniPhone, Smartphone, Tablet) ',
						included: true,
					},
					{ title: 'Integración con APIs básicas', included: true },
					{ title: 'Soporte técnico por 3 meses', included: true },
					{ title: 'Publicación en App Store o Google Play', included: true },
					{ title: 'Notificaciones push básicas', included: true },
					{ title: 'Funcionalidades de pago integradas', included: false },
					{ title: 'Animaciones avanzadas', included: false },
					{ title: 'Seguridad avanzada', included: false },
					{ title: 'Optimización de rendimiento', included: false },
				],
			},
			{
				name: 'Diseño Flash',
				price: '$200',
				payMethod: PAY_METHOD.ONCE,
				description:
					'Obtén hasta 5 diseños publicitarios profesionales en tiempo récord para impulsar tus campañas.',
				accentColor: '#8b5cf6',
				secondaryColor: '#a78bfa',
				ctaText: 'Ordenar Diseños',
				popular: false,
				features: [
					{ title: 'Hasta 5 diseños publicitarios', included: true },
					{ title: 'Diseños optimizados para redes sociales', included: true },
					{
						title: 'Formatos personalizados (Facebook, Instagram, Google Ads)',
						included: true,
					},
					{ title: 'Revisión y ajustes básicos', included: true },
					{ title: 'Entrega en 24 horas (por cada diseño)', included: true },
					{ title: 'Diseños en alta resolución', included: true },
					{ title: 'Video(s)', included: false },
					{ title: 'Branding completo', included: false },
					{ title: 'Estrategia de campaña', included: false },
					{ title: 'Fotografía profesional', included: false },
					{ title: 'Copywriting publicitario', included: false },
				],
			},
		],
	},
	{
		id: 'diseno-desarrollo',
		title: 'Diseño & Desarrollo',
		icon: <Code className='w-6 h-6' />,
		description: 'Servicios especializados en diseño y desarrollo web',
		service: SERVICES.SOFTWARE_DESIGN,
		plans: [
			{
				name: 'Pixel Perfect',
				price: '$499',
				payMethod: PAY_METHOD.ONCE,
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
				price: '$999',
				payMethod: PAY_METHOD.ONCE,
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
				price: '$1,499',
				payMethod: PAY_METHOD.ONCE,
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
		service: SERVICES.MARKETING,
		plans: [
			{
				name: 'Impulso Digital',
				price: '$199',
				payMethod: PAY_METHOD.MONTHLY,
				description:
					'Estrategia básica de marketing digital para pequeños negocios.',
				accentColor: '#3b82f6',
				secondaryColor: '#60a5fa',
				ctaText: 'Iniciar Campaña',
				popular: false,
				features: [
					{ title: 'Gestión de redes sociales', included: true },
					{ title: 'SEO básico', included: true },
					{ title: 'Contenido mensual (5 posts)', included: true },
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
				price: '$499',
				payMethod: PAY_METHOD.MONTHLY,
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
				price: '$1,499',
				payMethod: PAY_METHOD.MONTHLY,
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
		service: SERVICES.AI,
		plans: [
			{
				name: 'ChatBot Assistant',
				price: '$99',
				payMethod: PAY_METHOD.MONTHLY,
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
				price: '$399',
				payMethod: PAY_METHOD.MONTHLY,
				description:
					'Asistente virtual inteligente con capacidades avanzadas de conversación.',
				accentColor: '#8b5cf6',
				secondaryColor: '#a78bfa',
				ctaText: 'Activar Inteligencia',
				popular: true,
				features: [
					{ title: 'Chat IA avanzado', included: true },
					{ title: 'Respuestas avanzadas (imagenes, videos)', included: true },
					{ title: 'Aprendizaje continuo', included: true },
					{ title: 'Integración Web, Móvil, WhatsApp', included: true },
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
				price: '$999',
				payMethod: PAY_METHOD.MONTHLY,
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
		title: 'Producción Gráfica',
		icon: <PenTool className='w-6 h-6' />,
		description: 'Servicios de diseño visual para tu marca',
		service: SERVICES.VISUAL_PRODUCTION,
		plans: [
			{
				name: 'Identidad Esencial',
				price: '$299',
				payMethod: PAY_METHOD.ONCE,
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
				price: '$599',
				payMethod: PAY_METHOD.ONCE,
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
					{ title: 'Vídeo corporativo', included: true },
					{ title: 'Ilustraciones personalizadas', included: false },
					{ title: 'Fotografía de producto', included: false },
				],
			},
			{
				name: 'Visual Universe',
				price: '$1,199',
				payMethod: PAY_METHOD.ONCE,
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
	{
		id: 'video-produccion',
		title: 'Producción Audiovisual',
		icon: <Video className='w-6 h-6' />,
		description: 'Servicios de diseño visual para tu marca',
		service: SERVICES.VISUAL_PRODUCTION,
		plans: [
			{
				name: 'Video Express',
				price: '$49',
				description:
					'Videos simples y efectivos para redes sociales o promociones rápidas.',
				accentColor: '#ef4444',
				secondaryColor: '#f87171',
				payMethod: PAY_METHOD.ONCE,
				ctaText: 'Crear Video',
				popular: true,
				features: [
					{ title: 'Video de hasta 1 minuto', included: true },
					{ title: 'Edición básica con transiciones', included: true },
					{ title: 'Música de stock', included: true },
					{ title: 'Grabación con equipo básico', included: true },
					{ title: 'Subtítulos integrados', included: true },
					{ title: 'Storyboard básico', included: false },
					{ title: 'Locución profesional', included: false },
					{ title: 'Efectos visuales', included: false },
					{ title: 'Derechos de música premium', included: false },
					{ title: 'Revisions ilimitadas', included: false },
				],
			},
			{
				name: 'Video Pro',
				price: '$249',
				description:
					'Videos profesionales para campañas publicitarias o contenido corporativo.',
				accentColor: '#3b82f6',
				secondaryColor: '#60a5fa',
				ctaText: 'Producir Ahora',
				payMethod: PAY_METHOD.ONCE,
				popular: false,
				features: [
					{ title: 'Video de hasta 3 minutos', included: true },
					{
						title: 'Edición avanzada (After Effects/Premiere)',
						included: true,
					},
					{ title: 'Música personalizada o licencias premium', included: true },
					{ title: 'Grabación con equipo profesional (4K)', included: true },
					{ title: 'Storyboard detallado', included: true },
					{ title: 'Locución profesional' },
					{ title: 'Efectos visuales básicos', included: true },
					{ title: 'Hasta 3 revisiones', included: true },
					{ title: 'Animaciones 2D básicas', included: false },
					{ title: 'Drones o tomas aéreas', included: false },
					{ title: 'Actor o modelo profesional', included: false },
				],
			},
			{
				name: 'Video Premium',
				price: '$1,499',
				description:
					'Producciones audiovisuales de alto impacto con recursos exclusivos.',
				accentColor: '#8b5cf6',
				secondaryColor: '#a78bfa',
				ctaText: 'Proyecto Élite',
				popular: false,
				payMethod: PAY_METHOD.ONCE,
				features: [
					{ title: 'Video de hasta 5+ minutos', included: true },
					{ title: 'Edición premium + motion graphics', included: true },
					{
						title: 'Tomas con drones o equipos especializados',
						included: true,
					},
					{ title: 'Actor/modelo profesional', included: true },
					{ title: 'Locución en múltiples idiomas', included: true },
					{ title: 'Animaciones 2D/3D', included: true },
					{ title: 'Música original compuesta', included: true },
					{ title: 'Revisions ilimitadas', included: true },
					{ title: 'Estrategia de distribución', included: true },
					{ title: 'Fotografía BTS (Behind The Scenes)', included: false },
					{ title: 'Campaña multiplataforma', included: false },
				],
			},
		],
	},
]
// FAQ data
export const pricingFAQs: FAQ[] = [
	{
		question:
			'¿Qué diferencia hay entre una Landing Page y un Sitio Web Completo?',
		answer:
			'Una Landing Page es una página única diseñada para captar clientes potenciales, mientras que un Sitio Web Completo es un sitio completo con varias páginas y funcionalidades.',
	},
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

export const testimonials = [
	{
		name: 'María López',
		position: 'Marketing Manager',
		company: 'Creative Agency',
		avatar:
			'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=1000',
		rating: 4,
		text: 'Gran experiencia trabajando con el equipo. Resultados excepcionales.',
		date: 'Febrero 2023',
		project: 'Marketing Digital',
	},
	{
		name: 'Carlos Sánchez',
		position: 'CTO',
		company: 'Innovatech',
		avatar:
			'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=1000',
		rating: 5,
		text: 'Soluciones innovadoras y soporte técnico de primera clase.',
		date: 'Enero 2023',
		project: 'Inteligencia Artificial',
	},
	{
		name: 'Laura Gómez',
		position: 'Product Manager',
		company: 'E-commerce Inc.',
		avatar:
			'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1000',
		rating: 4,
		text: 'Muy satisfechos con el diseño y desarrollo de nuestra tienda online.',
		date: 'Diciembre 2022',
		project: 'Desarrollo E-commerce',
	},
	{
		name: 'Sofía Martínez',
		position: 'UX Designer',
		company: 'Design Studio',
		avatar:
			'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=1000',
		rating: 5,
		text: 'El equipo de diseño superó nuestras expectativas. ¡Increíble trabajo!',
		date: 'Noviembre 2022',
		project: 'Diseño Gráfico',
	},
	{
		name: 'Elena Ruiz',
		position: 'CMO',
		company: 'Marketing Experts',
		avatar:
			'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=1000',
		rating: 4,
		text: 'Estrategias de marketing efectivas que aumentaron nuestras ventas.',
		date: 'Septiembre 2022',
		project: 'Marketing Digital',
	},
	{
		name: 'David Fernández',
		position: 'CTO',
		company: 'Tech Innovators',
		avatar:
			'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=1000',
		rating: 5,
		text: 'Implementaron soluciones de IA que transformaron nuestro negocio.',
		date: 'Agosto 2022',
		project: 'Inteligencia Artificial',
	},
]
