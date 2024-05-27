import Advantages from './AdvantagesSection'
import HeroSection from './HeroSection'
import PresentSection from './PresentSection'
import TeamMember from './TeamMemberSection'

const AboutUs = () => {
	return (
		<main className="mb-12 w-full space-y-16  md:space-y-40">
			<HeroSection />
			<PresentSection />
			<TeamMember />
			<Advantages />
		</main>
	)
}

export default AboutUs
