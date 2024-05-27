import HeroSection from './HeroSection'
import AboutSection from './AboutSection'
import AvailabilitySection from './AvailabilitySection'
import ReviewSection from './ReviewSection'
import useDocumentTitle from '@/hooks/useDocumentTitle'

const Home = () => {
	useDocumentTitle()

	return (
		<main className="2xl:space-y my-12 w-full space-y-8 font-prompt md:space-y-16 lg:mb-16 2xl:my-16">
			<HeroSection />
			<AvailabilitySection />
			<AboutSection />
			<ReviewSection />
		</main>
	)
}

export default Home
