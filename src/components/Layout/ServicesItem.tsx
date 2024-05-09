type ServiceProps = { list: { to: string; content: string }[] }

const ServicesItem = ({ list }: ServiceProps) => {
	const serviceList = list.map((item, index) => (
		<li className="mt-2" key={item.to + index}>
			<a href={item.to} className="text-xs hover:text-primary md:text-sm">
				{item.content}
			</a>
		</li>
	))

	return <ul className="mt-3 w-full text-lg md:mt-4">{serviceList}</ul>
}

export default ServicesItem
