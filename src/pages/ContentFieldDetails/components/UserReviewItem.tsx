import avaLiem from '/avaLiem.png'
import Rating from '@/components/Rating'

const UserReviewItem = () => {
	return (
		<div className="flex max-w-[600px] gap-3 lg:gap-7">
			<div className="h-full min-h-[80px] min-w-[80px] max-w-fit overflow-hidden ">
				<img src={avaLiem} className="rounded-full" alt="comment user" />
			</div>
			<div className="pb-9">
				<span className="mb-[2px] text-xl font-medium">Liem Nguyen</span>
				<p className="text-base font-light">liem1762001@gmail.com</p>
				<ul className="mt-4 flex flex-wrap gap-5 lg:gap-7">
					<li>
						<p className="text-sm font-normal">Quality</p>
						<span className="mt-2 flex">
							<Rating rating={5} size={14} />
						</span>
					</li>
					<li>
						<p className="text-sm font-normal">Location</p>
						<span className="mt-2 flex">
							<Rating rating={5} size={14} />
						</span>
					</li>
					<li>
						<p className="text-sm font-normal">Services</p>
						<span className="mt-2 flex text-orange-500">
							<Rating rating={5} size={14} />
						</span>
					</li>
					<li>
						<p className="text-sm font-normal">Team</p>
						<span className="mt-2 flex">
							<Rating rating={5} size={14} />
						</span>
					</li>
					<li>
						<p className="text-sm font-normal">Price</p>
						<span className="mt-2 flex">
							<Rating rating={5} size={14} />
						</span>
					</li>
				</ul>
				<p className=" mt-4 ">
					As a longtime soccer fan, I have had the opportunity to experience
					playing at many different soccer fields. However, This Football Field
					really left a very deep impression on me.
				</p>
			</div>
		</div>
	)
}
export default UserReviewItem
