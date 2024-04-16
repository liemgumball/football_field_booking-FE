import { create } from 'zustand'

type TLocation = {
	type: 'Point'
	coordinates: {
		longitude: string
		latitude: string
	} | null
}

const useLocationStore = create<TLocation>((set) => {
	navigator.geolocation.getCurrentPosition((position) => {
		const { longitude, latitude } = position.coords
		set({
			type: 'Point',
			coordinates: {
				longitude: longitude.toString(),
				latitude: latitude.toString(),
			},
		})
	})

	return {
		type: 'Point',
		coordinates: null,
	}
})

export default useLocationStore
