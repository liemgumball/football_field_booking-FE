import { TFootballField } from '@/types'
import FootballFieldCard from '@/pages/Home/components/FootballFieldCard'

const FieldList = ({ fields }: { fields: TFootballField[] }) => {
	return (
		<ul className="grid grid-cols-1 justify-items-center gap-x-4 gap-y-5 md:grid-cols-2 lg:grid-cols-3">
			{fields.length
				? fields.map((field) => (
						<FootballFieldCard
							key={field._id}
							_id={field._id}
							name={field.name}
							images={field.images}
							rating={field.rating}
							className="h-[300px] w-[300px] lg:w-[225px] xl:w-[300px]"
							sizeIcon={16}
						/>
					))
				: 'Not Fields Founded'}
		</ul>
	)
}

export default FieldList
