import { TFootballField } from '@/types'
import FootballFieldCard from '@/components/FootballFieldCard'

const FieldList = ({ fields }: { fields: TFootballField[] }) => {
	return fields.length ? (
		<ul className="grid grid-cols-1 justify-items-center gap-x-4 gap-y-5 md:grid-cols-2 lg:grid-cols-3">
			{fields.map((field) => (
				<FootballFieldCard
					key={field._id}
					_id={field._id}
					name={field.name}
					images={field.images}
					rating={field.rating}
					className="max-h-[300px] min-w-[272px] xl:w-[300px]"
					sizeIcon={16}
				/>
			))}
		</ul>
	) : (
		<div className="mx-4 w-full py-4 text-center text-muted-foreground">
			<p>Fields not found.</p>
		</div>
	)
}

export default FieldList
