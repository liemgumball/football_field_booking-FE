import { create } from 'zustand'

type TLocation = {
	type: 'Point'
	coordinates: {
		longitude: number
		latitude: number
	} | null
}

const useLocationStore = create<TLocation>((set) => {
	navigator.geolocation.getCurrentPosition(
		(position) => {
			const { longitude, latitude } = position.coords
			set({
				type: 'Point',
				coordinates: {
					longitude: longitude,
					latitude: latitude,
				},
			})
		},
		() => {
			set({
				type: 'Point',
				coordinates: null,
			})
		},
	)

	// Return initial state
	return {
		type: 'Point',
		coordinates: null,
	}
})

export default useLocationStore
