import React from 'react'
import { Link, To } from 'react-router-dom'
import { buttonVariants } from './ui/button'
import { cn } from '@/lib/utils'

const ContactItem = ({
	to,
	title,
	content,
	icon,
}: {
	to?: To
	title: string
	content: string
	icon: React.ReactNode
}) => {
	return (
		<li className="flex gap-x-3 truncate xl:justify-center">
			<div
				className={cn(
					buttonVariants({ size: 'icon' }),
					'size-10 min-w-max shrink-0 rounded-full md:size-14 lg:size-12',
				)}
			>
				{icon}
			</div>
			<div>
				<span className="font-semibold text-secondary-foreground">{title}</span>
				<p className="text-xs md:text-base lg:text-sm">
					{to ? (
						<Link className="transition hover:text-primary" to={to}>
							{content}
						</Link>
					) : (
						<address>{content}</address>
					)}
				</p>
			</div>
		</li>
	)
}

export default ContactItem
