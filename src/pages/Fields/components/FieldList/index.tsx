import { TFootballField } from '@/types'
import FieldCard from '../Field'
import { Link } from 'react-router-dom'
import { PATHS } from '@/constants/navigation'

const FieldList = ({ fields }: { fields: TFootballField[] }) => {
	return (
		<div className="grid grid-cols-1 gap-x-4 gap-y-5  md:grid-cols-2 lg:grid-cols-3">
			{fields.length
				? fields.map((field) => {
						return (
							<Link to={`${PATHS.FIELD.BASE}/${field._id}`}>
								<FieldCard
									name={field.name}
									images={field.images}
									rating={field.rating}
								/>
							</Link>
						)
					})
				: 'Not Fields Founded'}
		</div>
	)
}

export default FieldList
