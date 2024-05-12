import { TMarker } from '@/types'
import MapBox from './components/MapBox'
import { useEffect, useState } from 'react'
import useLocationStore from '@/stores/location'
import { ENV_VARS } from '@/constants/envVars'
import ProgressBar from './components/FilterOptions/ProgressBar'
import AccessLocation from './components/AccessLocation'

const FilterByDistanceSection = () => {
	const coordinates = useLocationStore((set) => set.coordinates)

	const [markers, setMarkers] = useState<TMarker[]>([])

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch(
					`${ENV_VARS.API_URL}fields/locations?latitude=${coordinates?.latitude}&longitude=${coordinates?.longitude}&distance=${2000}`,
				)
				if (!response.ok) {
					throw new Error(`API request failed with status ${response.status}`)
				}
				const markers = (await response.json()) as TMarker[]
				setMarkers(markers)
			} catch (error) {
				console.error('Error fetching products:', error)
			}
		}
		fetchData()
	}, [coordinates])

	return coordinates ? (
		<section className="container">
			<ProgressBar />
			<MapBox markers={markers} initialViewPort={coordinates} />
		</section>
	) : (
		<AccessLocation />
	)
}

export default FilterByDistanceSection
