import { TSubField } from '@/types'
import { pickRandomFormArray } from '@/utils/common'
import defaultImg from '/booking_img.png'

const SubField = ({
	name,
	defaultPrice,
	images,
}: Partial<TSubField> & { images: string[] | undefined }) => {
	const imageSubField = images?.length
		? pickRandomFormArray<string>(images)
		: defaultImg

	return (
		<figure className="relative h-[250px] w-[250px] overflow-hidden rounded-xl hover:shadow-primary-foreground  md:h-[300px] md:w-[300px]">
			<img
				className="h-full w-full transition hover:scale-105"
				src={imageSubField}
				alt="sub field image"
			/>
			<figcaption className="absolute bottom-4 left-6 ">
				<div className="text-white">
					<h3 className="mb-1 text-2xl font-semibold">{name}</h3>
					<p className="text-lg font-semibold">${defaultPrice}</p>
				</div>
			</figcaption>
		</figure>
	)
}

export default SubField
