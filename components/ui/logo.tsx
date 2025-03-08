import { cn } from '@/lib/utils'

export const MostStudioLogo: React.FC<{
	className?: string
	isInline?: boolean
}> = ({ className, isInline }) => {
	return (
		<div className={isInline ? 'inline-block' : ''}>
			<div className={cn('flex items-center space-x-2', className)}>
				<picture>
					<img
						className='w-6 h-6'
						src='/most_studio_logo_32.avif'
						alt='most studio logo'
					/>
				</picture>
				<div className='text-xl lg:text-2xl font-bold gradient-text'>
					Most Studio
				</div>
			</div>
		</div>
	)
}
