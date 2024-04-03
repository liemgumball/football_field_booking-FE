import { Link } from 'react-router-dom'
import ModeToggle from '../ThemeToggle'
import { buttonVariants } from '@/components/ui/button'
import { Icons } from '../Icons'
import NavBar from '../NavBar'

const Header = () => {
	return (
		<header className="flex items-center justify-between px-8">
			<Link to="/">
				<Icons.Logo />
			</Link>
			<NavBar />
			<div className="flex items-center space-x-4 capitalize">
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
				<ModeToggle />
			</div>
		</header>
	)
}

export default Header
