import HeroSection from './HeroSection'
import AboutSection from './AboutSection'
import AvailabilitySection from './AvailabilitySection'
import ReviewSection from './ReviewSection'

const Home = () => {
	return (
		<main className="my-16 font-prompt">
			<HeroSection />
			<AboutSection />
			<AvailabilitySection />
			<ReviewSection />
		</main>
	)
}

export default Home
