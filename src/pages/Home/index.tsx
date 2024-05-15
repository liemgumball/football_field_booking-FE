import HeroSection from './HeroSection'
import AboutSection from './AboutSection'
import AvailabilitySection from './AvailabilitySection'
import ReviewSection from './ReviewSection'
import { useDocumentTitle } from '@/hooks/useDocumentTitle'

const Home = () => {
	useDocumentTitle()

	return (
		<main className="font-prompt">
			<HeroSection />
			<AboutSection />
			<AvailabilitySection />
			<ReviewSection />
		</main>
	)
}

export default Home
