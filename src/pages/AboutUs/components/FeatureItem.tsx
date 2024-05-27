type FeatureProps = {
	name: string
	description: string
	image: string
}

const FeatureItem = (feature: FeatureProps) => {
	return (
		<li className="flex items-center gap-3 md:gap-6">
			<div className="rounded-full border-2 border-solid p-2 shadow-xl ">
				<img
					className="max-w-[30px] md:max-w-[80px]"
					src={feature.image}
					alt="feature icon"
				/>
			</div>
			<div>
				<h3 className="text-base font-bold capitalize lg:text-xl">
					{feature.name}
				</h3>
				<p className="text-xs text-muted-foreground md:text-base">
					{feature.description}
				</p>
			</div>
		</li>
	)
}

export default FeatureItem
