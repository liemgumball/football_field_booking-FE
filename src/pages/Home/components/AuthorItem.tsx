import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'
import useAuthStore from '@/stores/auth'

const AuthorItem = ({ name, email }: { name: string; email: string }) => {
	const user = useAuthStore((set) => set.user)

	return (
		<div className="flex gap-6">
			<Avatar className="min-h-[60px] min-w-[60px]">
				<AvatarImage src={user?.avatar} alt="author" />
				<AvatarFallback>HP</AvatarFallback>
			</Avatar>
			<div>
				<h3 className="mb-1 text-2xl font-semibold">{name} </h3>
				<p className="text-sm"> {email}</p>
			</div>
		</div>
	)
}

export default AuthorItem
