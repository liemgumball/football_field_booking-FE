import { TFootballField } from '@/types'
import Field from '../Field'

const FieldList = ({ fields }: { fields: TFootballField[] }) => {
	return (
		<ul className="grid grid-cols-1 justify-items-center gap-x-4 gap-y-5 md:grid-cols-2 lg:grid-cols-3">
			{fields.length
				? fields.map((field) => (
						<Field
							key={field._id}
							_id={field._id}
							name={field.name}
							images={field.images}
							rating={field.rating}
						/>
					))
				: 'Not Fields Founded'}
		</ul>
	)
}

export default FieldList
