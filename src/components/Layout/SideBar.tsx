import { Sheet, SheetContent, SheetHeader, SheetTrigger } from '../ui/sheet'
import { Link } from 'react-router-dom'
import { MenuIcon } from 'lucide-react'
import { Icons } from '../Icons'
import { buttonVariants } from '../ui/button'
import { cn } from '@/lib/utils'
import { useState } from 'react'
import useAuthStore from '@/stores/auth'
import { PATHS } from '@/constants/navigation'

const SideBar = () => {
	const [isOpen, setIsOpen] = useState(false)
	const user = useAuthStore((set) => set.user)

	return (
		<Sheet open={isOpen} onOpenChange={(open) => setIsOpen(open)}>
			<SheetTrigger asChild className="w-8 md:hidden">
				<MenuIcon size={30} className="text-secondary-foreground" />
			</SheetTrigger>
			<SheetContent side="left">
				<SheetHeader>
					<Link to={PATHS.HOME}>
						<Icons.Logo />
					</Link>
					<h1 className="text-center text-2xl font-bold capitalize text-primary">
						welcome to l88
					</h1>
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
									find football field
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
						<p className="text-2xl font-semibold capitalize">contact us</p>
					</Link>
					{!user && (
						<div className="flex justify-center space-x-4 font-bold capitalize">
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
								signup
							</Link>
						</div>
					)}
				</div>
			</SheetContent>
		</Sheet>
	)
}

export default SideBar
