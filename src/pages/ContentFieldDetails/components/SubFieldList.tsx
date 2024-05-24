import { TFootballField } from '@/types'
import SubField from './SubField'

const SubFieldList = ({ subfields, images }: Partial<TFootballField>) => {
	return (
		<ul className="mt-11 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
			{subfields?.map((subfield) => (
				<li className="max-w-max" key={subfield._id}>
					<SubField
						name={subfield.name}
						defaultPrice={subfield.defaultPrice}
						images={images}
						size={subfield.size}
					/>
				</li>
			))}
		</ul>
	)
}

export default SubFieldList
