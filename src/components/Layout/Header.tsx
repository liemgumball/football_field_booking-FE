import { Link } from 'react-router-dom'
import ModeToggle from '../ThemeToggle'
import { buttonVariants } from '@/components/ui/button'

const Header = () => {
	return (
		<header className="flex justify-between px-4">
			<ModeToggle />
			<nav className="space-x-4 capitalize">
				<Link
					to="/login"
					className={buttonVariants({
						variant: 'secondary',
						size: 'lg',
					})}
				>
					login
				</Link>
				<Link
					to="/signup"
					className={buttonVariants({
						variant: 'default',
						size: 'lg',
					})}
				>
					signup
				</Link>
			</nav>
		</header>
	)
}

export default Header
