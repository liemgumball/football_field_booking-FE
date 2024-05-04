import { Link, useNavigate } from 'react-router-dom'
import { Button, buttonVariants } from '@/components/ui/button'
import useAuthStore from '@/stores/auth'
import useMedia from '@/hooks/useMedia'


// Components
import ModeToggle from '../ThemeToggle'
import { Separator } from '../ui/separator'
import { Icons } from '../Icons'
import NavBar from './NavBar'
import {
	Sheet,
	SheetContent,
	SheetDescription,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from '../ui/sheet'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import EditProfileForm from '../EditProfileForm'
import SlideBar from '../SideBar'

const AvatarSheet = () => {
	const user = useAuthStore((set) => set.user)
	const logout = useAuthStore((set) => set.remove)
	if (!user) throw new Error('User not found')

	const { IsXl } = useMedia()
	const side = IsXl ? 'right' : 'top'

	const navigate = useNavigate()

	return (
		<Sheet>
			<SheetTrigger>
				<Avatar>
					<AvatarImage src="https://github.com/shadcn.pg" />
					<AvatarFallback className="font-extrabold uppercase tracking-widest">
						{user.avatarFallback || user.name}
					</AvatarFallback>
				</Avatar>
			</SheetTrigger>
			<SheetContent side={side}>
				<SheetHeader>
					<SheetTitle>Edit Profile</SheetTitle>
					<SheetDescription>
						Make changes to your profile here. Click save when you're done.
					</SheetDescription>
				</SheetHeader>
				<EditProfileForm />
				<Separator />
				<Button
					className="mt-4 w-full"
					size="lg"
					onClick={() => {
						logout()
						navigate('#')
					}}
				>
					Log Out
				</Button>
			</SheetContent>
		</Sheet>
	)
}

const Header = () => {
	const user = useAuthStore((set) => set.user)

	return (
		<>
			<header className="mb-4 flex w-full items-center justify-between px-8">
				<Link className='hidden md:block' to="/">
					<Icons.Logo />
				</Link>
				<SlideBar />
				<NavBar />
				<div className="flex items-center space-x-4 capitalize">
					{user ? (
						<AvatarSheet />
					) : (
						<>
							<Link
								to="/login"
								className={`${buttonVariants({
									variant: 'secondary',
									size: 'lg',
								})} hidden md:inline-flex`}
							>
								login
							</Link>
							<Link
								to="/signup"
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
			</header >
			<Separator />
		</>
	)
}

export default Header
