import { Link } from 'react-router-dom'
import { buttonVariants } from '@/components/ui/button'
import useAuthStore from '@/stores/auth'

// Components
import ModeToggle from '../ThemeToggle'
import { Icons } from '../Icons'
import NavBar from './NavBar'
import SideBar from './SideBar'
import { PATHS } from '@/constants/navigation'
import UserSheet from './UserSheet'

const Header = () => {
	const user = useAuthStore((set) => set.user)

	return (
		// TODO fix sticky header
		<header className="z-50 flex w-full items-center justify-between border-b-2 bg-background px-8 py-2">
			<Link className="hidden md:block" to={PATHS.HOME}>
				<Icons.Logo />
			</Link>
			<SideBar />
			<NavBar />

			<div className="flex items-center space-x-4 capitalize">
				{user ? (
					<UserSheet />
				) : (
					<>
						<Link
							to={PATHS.LOGIN}
							className={`${buttonVariants({
								variant: 'secondary',
								size: 'lg',
							})} hidden md:inline-flex`}
						>
							login
						</Link>
						<Link
							to={PATHS.SIGNUP}
							className={`${buttonVariants({
								variant: 'default',
								size: 'lg',
							})} hidden md:inline-flex`}
						>
							signup
						</Link>
					</>
				)}
				<ModeToggle />
			</div>
		</header>
	)
}

export default Header
