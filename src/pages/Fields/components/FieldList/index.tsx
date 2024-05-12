import { TFootballField } from '@/types'
import FieldCard from '../Field'

const FieldList = ({ fields }: { fields: TFootballField[] }) => {
	return (
		<div className="grid grid-cols-1 gap-x-4 gap-y-5  md:grid-cols-2 lg:grid-cols-3">
			{fields.length
				? fields.map((field) => {
						return (
							<FieldCard
								name={field.name}
								images={field.images}
								rating={field.rating}
							/>
						)
					})
				: 'Not Fields Founded'}
		</div>
	)
}

export default FieldList
