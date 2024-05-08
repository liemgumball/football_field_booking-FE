import Member from '@/pages/AboutUs/components/Member'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import avaLiem from '/avaLiem.png'
import avaLe from '/avaLe.png'

const Members = [
	{
		name: 'Liem Nguyen',
		position: 'CTO & Founder',
		image: avaLiem,
	},
	{
		name: 'Le Hoang',
		position: 'CEO',
		image: avaLe,
	},
]

const TeamMember = () => {
	return (
		<section className=" container space-y-12">
			<div className="container text-center md:max-w-[700px] lg:max-w-[800px]">
				<p className={cn(buttonVariants({ size: 'sm' }), 'max-w-max')}>
					{' '}
					Team Member{' '}
				</p>
				<h2 className="mt-5 text-3xl font-bold capitalize tracking-normal md:text-4xl lg:text-5xl">
					we’ve expert team members meet with team
				</h2>
			</div>
			<ul className="mt-3 flex flex-col items-center justify-center gap-12 lg:flex-row">
				{Members.map((member) => (
					<Member
						name={member.name}
						position={member.position}
						image={member.image}
					/>
				))}
			</ul>
		</section>
	)
}

export default TeamMember
