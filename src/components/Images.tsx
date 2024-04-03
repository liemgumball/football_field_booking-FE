import HeroDark from '/hero-image-dark.jpg'
import HeroLight from '/hero-image-light.jpg'

export const Images = {
	HeroDark: () => (
		<img width="100%" src={HeroDark} alt="hero image dark" loading="eager" />
	),
	HeroLight: () => (
		<img width="100%" src={HeroLight} alt="hero image light" loading="eager" />
	),
}
