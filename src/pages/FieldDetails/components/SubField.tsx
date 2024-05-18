import { TSubField } from '@/types'
import { pickRandomFormArray } from '@/utils/common'

const SubField = ({
	name,
	defaultPrice,
	images,
}: Partial<TSubField> & { images: string[] | undefined }) => {
	const imageSubField = images?.length
		? pickRandomFormArray<string>(images)
		: 'https://demo.webtend.net/html/gowilds/assets/images/place/place-10.jpg'

	return (
		<figure className="relative h-[250px] w-[250px] hover:scale-110 hover:shadow-primary-foreground  md:h-[300px] md:w-[300px]">
			<img
				className="h-full w-full rounded-xl "
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
