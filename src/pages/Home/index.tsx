import HeroSection from './HeroSection'
import AboutSection from './AboutSection'
import AvailabilitySection from './AvailabilitySection'
import ReviewSection from './ReviewSection'

const Home = () => {
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
