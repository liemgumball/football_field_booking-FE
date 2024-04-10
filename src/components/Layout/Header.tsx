import { Link } from 'react-router-dom'
import ModeToggle from '../ThemeToggle'
import { buttonVariants } from '@/components/ui/button'
import { Icons } from '../Icons'
import NavBar from '../NavBar'
import { Separator } from '../ui/separator'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import useAuthStore from '@/stores/auth'

const Header = () => {

	const user = useAuthStore((state) => (state.user))


	console.log('user', user)

	return (
		<>
			<header className="mb-4 flex w-full items-center justify-between px-8">
				<Link to="/">
					<Icons.Logo />
				</Link>
				<NavBar />
				<div className="flex items-center space-x-4 capitalize">
					{user ? <AvatarFallback />
						:
						<>
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
						</>
					}


					<ModeToggle />
				</div>
			</header>
			<Separator />
		</>
	)
}

export default Header
