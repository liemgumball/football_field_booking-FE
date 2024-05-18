import { TFootballField } from '@/types'
import SubField from './SubField'

const SubFieldList = ({ subfields, images }: Partial<TFootballField>) => {
	return (
		<ul className="mt-11 flex flex-wrap gap-7">
			{subfields?.map((subfield) => (
				<li className="max-w-max" key={subfield._id}>
					<SubField
						name={subfield.name}
						defaultPrice={subfield.defaultPrice}
						images={images}
					/>
				</li>
			))}
		</ul>
	)
}

export default SubFieldList
