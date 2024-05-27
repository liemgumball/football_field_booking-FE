import useDocumentTitle from '@/hooks/useDocumentTitle'
import FilterByDistanceSection from './FilterByDistanceSection'
import FilterByNameSection from './FilterNameRatingSection'
import HeroSection from './HeroSection'

const Fields = () => {
	useDocumentTitle('Fields')

	return (
		<main className="mb-12 mt-[60px] w-full md:mt-[90px]">
			<HeroSection />
			<FilterByDistanceSection />
			<FilterByNameSection />
		</main>
	)
}

export default Fields
