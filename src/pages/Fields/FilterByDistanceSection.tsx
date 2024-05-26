import { TMarker } from '@/types'
import MapBox from './components/MapBox'
import { useEffect, useState } from 'react'
import useLocationStore from '@/stores/location'
import { ENV_VARS } from '@/constants/envVars'
import AccessLocation from './components/AccessLocation'
import useDebounce from '@/hooks/useDebounce'

const FilterByDistanceSection = () => {
	const coordinates = useLocationStore((set) => set.coordinates)

	const [viewPort, setViewPort] = useState(coordinates)

	const [markers, setMarkers] = useState<TMarker[]>([])

	const [distance, setDistance] = useState(1000)

	const distanceDebounce = useDebounce(distance)

	const [zoom, setZoom] = useState(13)

	const changeZoomByDistance = (zoom: number) => {
		const zoomScale = 20000
		const maxDistance = 2000

		const distanceFactor = Math.min(zoomScale / zoom, maxDistance)

		return distanceFactor
	}

	useEffect(() => {
		const newDistance = changeZoomByDistance(zoom)
		setDistance(newDistance)
	}, [zoom])

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch(
					`${ENV_VARS.API_URL}fields/locations?latitude=${viewPort?.latitude}&longitude=${viewPort?.longitude}&distance=${distanceDebounce}`,
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
	}, [coordinates, distanceDebounce, viewPort])

	return viewPort ? (
		<section className="container">
			<MapBox
				markers={markers}
				viewPort={viewPort}
				setViewPort={setViewPort}
				setZoom={setZoom}
			/>
		</section>
	) : (
		<AccessLocation />
	)
}

export default FilterByDistanceSection
