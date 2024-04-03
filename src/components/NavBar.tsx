import { Link, LinkProps } from 'react-router-dom'
import { Icons } from './Icons'
import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
	navigationMenuTriggerStyle,
} from './ui/navigation-menu'
import React from 'react'
import { cn } from '@/lib/utils'

const platforms: { title: string; href: string; description: string }[] = [
	{
		title: 'Find football Fields',
		href: '/services',
		description:
			'Explore available football fields in your area and book them for your matches or events.',
	},
	{
		title: 'Field Details',
		href: '/fields',
		description:
			'View detailed information about each football field, including amenities, availability, and pricing.',
	},
	{
		title: 'Booking',
		href: '/booking',
		description:
			'Track the progress of your football field booking, from selection to confirmation.',
	},
	{
		title: 'Become Our Partner',
		href: '/register-field',
		description:
			'Partner with us to manage your own football field and reach a wider audience of enthusiasts.',
	},
]

const NavBar = () => {
	return (
		<NavigationMenu>
			<NavigationMenuList>
				<NavigationMenuItem>
					<NavigationMenuTrigger className="capitalize">
						Introduction
					</NavigationMenuTrigger>
					<NavigationMenuContent>
						<ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
							<li className="row-span-3">
								<NavigationMenuLink asChild>
									<Link
										className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
										to="/"
									>
										<Icons.Logo />
										<div className="mb-2 mt-4 text-lg font-medium">Danang</div>
										<p className="text-sm leading-tight text-muted-foreground">
											Lorem ipsum dolor sit amet consectetur adipisicing elit.
											Amet nostrum harum suscipit laborum atque! Voluptas
											voluptatibus tempora quos minus illum.
										</p>
									</Link>
								</NavigationMenuLink>
							</li>
							<ListItem to="/" title="Introduction">
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
							</ListItem>
							<ListItem to="/booking" title="Booking">
								Lorem ipsum dolor sit amet.
							</ListItem>
							<ListItem to="/contact" title="Collaboration">
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
							</ListItem>
						</ul>
					</NavigationMenuContent>
				</NavigationMenuItem>
				<NavigationMenuItem>
					<NavigationMenuTrigger className="capitalize">
						Platform
					</NavigationMenuTrigger>
					<NavigationMenuContent>
						<ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
							{platforms.map((item) => (
								<ListItem key={item.title} title={item.title} to={item.href}>
									{item.description}
								</ListItem>
							))}
						</ul>
					</NavigationMenuContent>
				</NavigationMenuItem>
				<NavigationMenuItem>
					<Link to="/docs">
						<NavigationMenuLink
							className={navigationMenuTriggerStyle({
								className: 'capitalize',
							})}
						>
							Contact Us
						</NavigationMenuLink>
					</Link>
				</NavigationMenuItem>
			</NavigationMenuList>
		</NavigationMenu>
	)
}

const ListItem = React.forwardRef<React.ElementRef<'a'>, LinkProps>(
	({ className, title, children, to, ...props }, ref) => {
		return (
			<li>
				<NavigationMenuLink asChild>
					<Link
						to={to}
						ref={ref}
						className={cn(
							'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
							className,
						)}
						{...props}
					>
						<div className="text-sm font-medium leading-none">{title}</div>
						<p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
							{children}
						</p>
					</Link>
				</NavigationMenuLink>
			</li>
		)
	},
)

export default NavBar
