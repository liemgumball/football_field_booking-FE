import { Sheet, SheetContent, SheetHeader, SheetTrigger } from '../ui/sheet'
import { Link } from 'react-router-dom'
import { MenuIcon } from 'lucide-react'
import { Icons } from '../Icons'
import { buttonVariants } from '../ui/button'
import { cn } from '@/lib/utils'
import { useState } from 'react'
import useAuthStore from '@/stores/auth'
import { PATHS } from '@/constants/navigation'
import { Separator } from '../ui/separator'

const SideBar = () => {
	const [isOpen, setIsOpen] = useState(false)
	const user = useAuthStore((set) => set.user)

	return (
		<Sheet open={isOpen} onOpenChange={(open) => setIsOpen(open)}>
			<SheetTrigger
				asChild
				className="rounded-lg p-2 hover:bg-secondary md:hidden"
			>
				<MenuIcon size={40} className="text-secondary-foreground" />
			</SheetTrigger>
			<SheetContent side="left">
				<SheetHeader>
					<Link
						onClick={() => setIsOpen(false)}
						to={PATHS.HOME}
						className="flex items-center justify-start gap-4"
					>
						<Icons.Logo />
						<h2 className="text-center text-2xl font-bold capitalize text-primary">
							DN Football
						</h2>
					</Link>
				</SheetHeader>
				<div className="flex flex-col gap-5 space-y-2 px-4 pt-6 capitalize">
					<div>
						<h4 className="mb-2 text-2xl font-semibold capitalize">
							introduction
						</h4>
						<ul
							className="flex flex-col gap-4 text-base font-medium capitalize text-gray-600"
							onClick={() => setIsOpen(false)}
						>
							<li className="hover:text-primary">
								<Link to={PATHS.HOME}>introduction</Link>
							</li>
							<li className="hover:text-primary">
								<Link to={PATHS.ABOUT_US}>About us</Link>
							</li>
							<li className="hover:text-primary">
								<Link to={PATHS.REGISTER_FIELD}>collaboration</Link>
							</li>
						</ul>
					</div>
					<div>
						<h4 className="mb-2 text-2xl font-semibold capitalize">platform</h4>
						<ul
							className="flex flex-col gap-4 text-base font-medium capitalize text-gray-600"
							onClick={() => setIsOpen(false)}
						>
							<li className="hover:text-primary">
								<Link to={PATHS.AVAILABLE_BOOKING.BASE}>
									available bookings
								</Link>
							</li>
							<li className="hover:text-primary">
								<Link to={PATHS.FIELD.BASE}>fields details</Link>
							</li>
							<li className="hover:text-primary">
								<Link to={PATHS.BOOKING.BASE}>
									<p className="text-base font-medium capitalize">
										booking history
									</p>
								</Link>
							</li>
							<li className="hover:text-primary">
								<Link to={PATHS.REGISTER_FIELD}>
									<p className="text-base font-medium capitalize">
										become our partner
									</p>
								</Link>
							</li>
						</ul>
					</div>
					<Link to={PATHS.SUPPORT}>
						<p className="text-2xl font-semibold capitalize hover:text-primary">
							contact us
						</p>
					</Link>
					<Separator />
					{!user && (
						<div className="mx-auto space-x-4 font-bold capitalize">
							<Link
								to={PATHS.LOGIN}
								onClick={() => setIsOpen(false)}
								className={cn(
									buttonVariants({
										variant: 'secondary',
										size: 'lg',
									}),
									'font-bold',
								)}
							>
								login
							</Link>
							<Link
								to={PATHS.SIGNUP}
								onClick={() => setIsOpen(false)}
								className={cn(
									buttonVariants({
										size: 'lg',
									}),
									'font-bold',
								)}
							>
								sign up
							</Link>
						</div>
					)}
				</div>
			</SheetContent>
		</Sheet>
	)
}

export default SideBar
