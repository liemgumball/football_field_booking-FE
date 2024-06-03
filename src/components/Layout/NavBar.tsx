import React from 'react'
import { Link, LinkProps } from 'react-router-dom'

import { cn } from '@/lib/utils'
import { Icons } from '../Icons'
import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
	navigationMenuTriggerStyle,
} from '../ui/navigation-menu'
import { PATHS } from '@/constants/navigation'
import useAuthStore from '@/stores/auth'

const platforms = [
	{
		title: 'Find football Fields',
		href: PATHS.FIELD.BASE,
		description:
			'Explore available football fields in your area and book them for your matches or events.',
	},
	{
		title: 'Become Our Partner',
		href: PATHS.REGISTER_FIELD,
		description:
			'Partner with us to manage your own football field and reach a wider audience of enthusiasts.',
	},
]

const NavBar = () => {
	const user = useAuthStore((set) => set.user)

	return (
		<NavigationMenu className="hidden md:block">
			<NavigationMenuList>
				<NavigationMenuItem>
					<NavigationMenuTrigger className="capitalize">
						Introduction
					</NavigationMenuTrigger>
					<NavigationMenuContent>
						<ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
							<li className="row-span-2">
								<NavigationMenuLink asChild>
									<Link
										className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
										to={PATHS.HOME}
									>
										<Icons.Logo />
										<div className="mb-2 mt-4 text-lg font-medium">Danang</div>
										<p className="text-sm leading-tight text-muted-foreground">
											Welcome to DN Fooball, Your Ultimate Football Field
											Booking Destination!
										</p>
									</Link>
								</NavigationMenuLink>
							</li>
							<ListItem to={PATHS.HOME} title="Introduction">
								Let's experience the thrill of effortless football field booking
								together.
							</ListItem>
							<ListItem
								to={PATHS.AVAILABLE_BOOKING.BASE}
								title="Available Bookings"
							>
								Step onto the Field, Unleash Your Passion. Book Now!
							</ListItem>
						</ul>
					</NavigationMenuContent>
				</NavigationMenuItem>
				<NavigationMenuItem>
					<Link to={PATHS.AVAILABLE_BOOKING.BASE}>
						<NavigationMenuLink
							className={navigationMenuTriggerStyle({
								className: 'capitalize',
							})}
						>
							Booking
						</NavigationMenuLink>
					</Link>
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
					<Link to={PATHS.ABOUT_US}>
						<NavigationMenuLink
							className={navigationMenuTriggerStyle({
								className: 'capitalize',
							})}
						>
							About Us
						</NavigationMenuLink>
					</Link>
				</NavigationMenuItem>
				{user && (
					<NavigationMenuItem>
						<Link to={PATHS.BOOKING.BASE}>
							<NavigationMenuLink
								className={navigationMenuTriggerStyle({
									className: 'capitalize',
								})}
							>
								Bookings History
							</NavigationMenuLink>
						</Link>
					</NavigationMenuItem>
				)}
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
						<p className="text-sm font-medium leading-none">{title}</p>
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
