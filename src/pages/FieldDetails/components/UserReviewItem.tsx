import { Star } from 'lucide-react'
import { Separator } from '@/components/ui/separator'

const UserReviewItem = () => {
	return (
		<div className="flex gap-7">
			<div>
				<img src="" alt="comment user" />
			</div>
			<div className="flex flex-col gap-3">
				<h4 className="text-lg font-bold">Glenn M. Whitaker</h4>
				<p className="text-base">CEO & Founder</p>
				<ul className="flex gap-7">
					<li>
						<p>Quality</p>
						<Star />
					</li>
					<li>
						<p>Location</p>
						<Star />
					</li>
					<li>
						<p>Services</p>
						<Star />
					</li>
					<li>
						<p>Team</p>
						<Star />
					</li>
					<li>
						<p>Price</p>
						<Star />
					</li>
				</ul>
				<p className="max-w-[760px]">
					At vero eos et accusamus et iusto odio dignissimos ducimus qui
					blanditiis praesentium voluptatum deleniti atque corrupti quos dolores
					et quas molestias excepture
				</p>
				<Separator />
			</div>
		</div>
	)
}

export default UserReviewItem
