import { Star } from 'lucide-react'
import userAvatar from '/userAvatar.svg'

const UserReviewItem = () => {
	return (
		<div className="flex gap-3 lg:gap-7">
			<div className="h-[100px] w-[100px] overflow-hidden ">
				<img src={userAvatar} className="rounded-full" alt="comment user" />
			</div>
			<div className="flex flex-col border-b-2 border-solid border-popover pb-9">
				<span className="mb-[2px] text-xl font-medium">Glenn M. Whitaker</span>
				<p className="text-base font-light">CEO & Founder</p>
				<ul className="mt-4 flex flex-col gap-7 md:flex-row lg:gap-7">
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
				<p className=" mt-4 max-w-[176px] md:max-w-[575px] lg:max-w-[650px]">
					At vero eos et accusamus et iusto odio dignissimos ducimus qui
					blanditiis praesentium voluptatum deleniti atque corrupti quos dolores
					et quas molestias excepture
				</p>
			</div>
		</div>
	)
}
export default UserReviewItem
