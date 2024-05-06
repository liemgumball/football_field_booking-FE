import HeroDark from '/hero-image-dark.jpg'
import HeroLight from '/hero-image-light.jpg'

export const Images = {
	HeroDark: ({ hidden }: { hidden?: boolean }) => (
		<img
			className={hidden ? 'hidden' : ''}
			src={HeroDark}
			alt="hero image dark"
			loading="eager"
		/>
	),

	HeroLight: ({ hidden }: { hidden?: boolean }) => (
		<img
			className={hidden ? 'hidden' : ''}
			src={HeroLight}
			alt="hero image light"
			loading="eager"
		/>
	),
}
