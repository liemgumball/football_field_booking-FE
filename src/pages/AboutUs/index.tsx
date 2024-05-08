import Advantages from './AdvantagesSection'
import HeroSection from './HeroSection'
import PresentSection from './PresentSection'
import TeamMember from './TeamMemberSection'

const AboutUs = () => (
	<main className="mb-12 space-y-16 md:space-y-40">
		<HeroSection />
		<PresentSection />
		<TeamMember />
		<Advantages />
	</main>
)

export default AboutUs
