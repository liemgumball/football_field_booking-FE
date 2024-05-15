import { useDocumentTitle } from '@/hooks/useDocumentTitle'
import FilterByDistanceSection from './components/Sections/FilterByDistanceSection'
import FilterByNameSection from './components/Sections/FilterNameRatingSection'
import HeroSection from './components/Sections/HeroSection'

const Fields = () => {
	useDocumentTitle('Fields')

	return (
		<main className="mb-12 w-full">
			<HeroSection />
			<FilterByDistanceSection />
			<FilterByNameSection />
		</main>
	)
}

export default Fields
