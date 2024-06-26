import { TSubField } from '@/types'
import defaultImg from '/booking_img.png'
import { formatPrice } from '@/utils/booking'

const SubField = ({
	name,
	defaultPrice,
	image,
	size,
}: Omit<TSubField, '_id'>) => {
	return (
		<figure className="relative h-[250px] w-full overflow-hidden rounded-xl hover:shadow-primary-foreground  md:h-[300px]">
			<img
				className="h-full w-full object-cover transition"
				src={image || defaultImg}
				alt="sub field image"
			/>
			<div className="absolute left-0 top-0 h-full w-full" />
			<figcaption className="absolute bottom-4 left-6 ">
				<div className="font-semibold text-secondary-foreground">
					<h3 className="mb-1 text-2xl ">{name}</h3>
					<p className="flex items-center">Size {size}</p>
					<p className="text-lg ">{formatPrice(defaultPrice)}</p>
				</div>
			</figcaption>
		</figure>
	)
}

export default SubField
