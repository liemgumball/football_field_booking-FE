import useAuthStore from '@/stores/auth'

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
import { Separator } from '../ui/separator'
import { Button } from '../ui/button'
import { useState } from 'react'
import useMediaQuery from '@/hooks/useMediaQuery'
import { useNavigate } from 'react-router-dom'

const UserSheet = () => {
	const [isOpen, setIsOpen] = useState(false)
	const navigate = useNavigate()

	const { user, remove: logout } = useAuthStore()
	if (!user) throw new Error('User not found')

	const side = useMediaQuery('(min-width: 1280px)') ? 'right' : 'top'

	return (
		<Sheet open={isOpen} onOpenChange={setIsOpen}>
			<SheetTrigger>
				<Avatar>
					<AvatarImage src={user.avatar} />
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
				<EditProfileForm close={() => setIsOpen(false)} />
				<Separator />
				<Button
					className="mt-4 w-full"
					size="lg"
					variant="secondary"
					onClick={() => {
						// used to prevent bug closing window
						navigate('/login')

						close()
						logout()
					}}
				>
					Log Out
				</Button>
			</SheetContent>
		</Sheet>
	)
}
export default UserSheet
