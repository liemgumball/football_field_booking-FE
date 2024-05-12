import FilterByDistanceSection from './FilterByDistanceSection'
// import FilterByNameSection from "./FilterNameRatingSection"
import HeroSection from './HeroSection'

const Fields = () => {
	return (
		<main className="mb-12 w-full">
			<HeroSection />
			<FilterByDistanceSection />
			{/* <FilterByNameSection /> */}
		</main>
	)
}

export default Fields
