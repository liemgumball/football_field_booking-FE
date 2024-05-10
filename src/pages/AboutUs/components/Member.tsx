import { Separator } from '../../../components/ui/separator'
import SocialContactItem from '../../../components/SocialContactItem'
import {
	Card,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card'

type MemberProps = {
	name: string
	position: string
	image: string
}

const Member = (member: MemberProps) => {
	return (
		<li className="max-w-max">
			<Card className="flex items-center gap-3 p-4 md:gap-5 md:p-8 lg:gap-7">
				<div className="max-w-[50px] md:max-w-[90px] lg:max-w-[110px]">
					<img className="rounded-lg" src={member.image} alt="avatar member" />
				</div>
				<div className="flex max-w-max flex-col gap-1 capitalize ">
					<CardHeader className="p-1">
						<CardTitle className="text-base font-semibold md:text-lg lg:text-xl">
							{member.name}{' '}
						</CardTitle>
						<CardDescription className="text-sm md:text-base lg:text-lg">
							{member.position}
						</CardDescription>
					</CardHeader>
					<Separator />

					<CardFooter className="flex space-x-1 p-2">
						<SocialContactItem className="fab fa-facebook-f" />
						<SocialContactItem className="fab fa-instagram" />
						<SocialContactItem className="fab fa-twitter" />
						<SocialContactItem className="fab fa-linkedin-in" />
					</CardFooter>
				</div>
			</Card>
		</li>
	)
}

export default Member
