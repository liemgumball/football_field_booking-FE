import { Avatar, AvatarFallback } from '@/components/ui/avatar'

const AuthorItem = ({ name, email }: { name: string; email: string }) => {
	return (
		<div className="flex gap-6">
			<Avatar className="min-h-[60px] min-w-[60px]">
				<AvatarFallback>LH</AvatarFallback>
			</Avatar>
			<div>
				<h3 className="mb-1 text-2xl font-semibold">{name} </h3>
				<p className="text-sm"> {email}</p>
			</div>
		</div>
	)
}

export default AuthorItem
