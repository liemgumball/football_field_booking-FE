import { Star } from 'lucide-react'
import userAvatar from '/userAvatar.svg'

const UserReviewItem = () => {
	return (
		<div className="flex max-w-[600px] gap-3 lg:gap-7">
			<div className="h-full min-h-[80px] min-w-[80px] max-w-fit overflow-hidden ">
				<img src={userAvatar} className="rounded-full" alt="comment user" />
			</div>
			<div className="pb-9">
				<span className="mb-[2px] text-xl font-medium">Glenn M. Whitaker</span>
				<p className="text-base font-light">CEO & Founder</p>
				<ul className="mt-4 flex flex-wrap gap-5 lg:gap-7">
					<li>
						<p className="text-sm font-normal">Quality</p>
						<span className="mt-2 flex text-orange-500">
							<Star size="14px" />
							<Star size="14px" />
							<Star size="14px" />
							<Star size="14px" />
							<Star size="14px" />
						</span>
					</li>
					<li>
						<p className="text-sm font-normal">Location</p>
						<span className="mt-2 flex text-orange-500">
							<Star size="14px" />
							<Star size="14px" />
							<Star size="14px" />
							<Star size="14px" />
							<Star size="14px" />
						</span>
					</li>
					<li>
						<p className="text-sm font-normal">Services</p>
						<span className="mt-2 flex text-orange-500">
							<Star size="14px" />
							<Star size="14px" />
							<Star size="14px" />
							<Star size="14px" />
							<Star size="14px" />
						</span>
					</li>
					<li>
						<p className="text-sm font-normal">Team</p>
						<span className="mt-2 flex text-orange-500">
							<Star size="14px" />
							<Star size="14px" />
							<Star size="14px" />
							<Star size="14px" />
							<Star size="14px" />
						</span>
					</li>
					<li>
						<p className="text-sm font-normal">Price</p>
						<span className="mt-2 flex text-orange-500">
							<Star size="14px" />
							<Star size="14px" />
							<Star size="14px" />
							<Star size="14px" />
							<Star size="14px" />
						</span>
					</li>
				</ul>
				<p className=" mt-4 ">
					At vero eos et accusamus et iusto odio dignissimos ducimus qui
					blanditiis praesentium voluptatum deleniti atque corrupti quos dolores
					et quas molestias excepture
				</p>
			</div>
		</div>
	)
}
export default UserReviewItem
