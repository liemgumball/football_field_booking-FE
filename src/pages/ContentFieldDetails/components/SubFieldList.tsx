import { TSubField } from '@/types'
import SubField from './SubField'

const SubFieldList = ({
	subfields,
}: {
	subfields: TSubField[] | undefined
}) => {
	return (
		<ul className="mt-11 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
			{subfields?.map((subfield) => (
				<li className="w-full" key={subfield._id}>
					<SubField
						name={subfield.name}
						defaultPrice={subfield.defaultPrice}
						image={subfield.image}
						size={subfield.size}
					/>
				</li>
			))}
		</ul>
	)
}

export default SubFieldList
