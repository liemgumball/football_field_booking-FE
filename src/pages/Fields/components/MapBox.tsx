import { Marker } from 'react-map-gl'
import { ENV_VARS } from '@/constants/envVars'
import ReactMapGl from 'react-map-gl'
import 'mapbox-gl/dist/mapbox-gl.css'
import { TMarker } from '@/types'
import { MapPinIcon } from 'lucide-react'
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from '@/components/ui/popover'
// import useSupercluster from "use-supercluster";
import { SetStateAction, Dispatch, useEffect } from 'react'
import { Link } from 'react-router-dom'
import useThemeStore from '@/stores/theme'

export type TViewPort = {
	longitude: number
	latitude: number
	zoom?: number
}

const MapBox = ({
	markers,
	setViewPort,
	viewPort,
	setZoom,
}: {
	markers: TMarker[]
	viewPort: TViewPort
	setViewPort: Dispatch<SetStateAction<TViewPort | null>>
	setZoom: Dispatch<SetStateAction<number>>
}) => {
	const { theme } = useThemeStore()

	useEffect(() => {
		if (viewPort.zoom) {
			const newZoom = viewPort.zoom
			setZoom(newZoom)
		}
	}, [viewPort.zoom, setZoom])

	return (
		<div className="mt-6 overflow-hidden rounded-lg">
			<ReactMapGl
				mapboxAccessToken={ENV_VARS.MAP.ACCESS_TOKEN}
				mapStyle={
					theme === 'light'
						? ENV_VARS.MAP.LIGHT_STYLE_URL
						: ENV_VARS.MAP.DARK_STYLE_URL
				}
				style={{ width: '100%', height: 500 }}
				{...viewPort}
				zoom={viewPort.zoom || 13}
				onMove={(event) => setViewPort(event.viewState)}
			>
				{markers.map((marker) => {
					return (
						<Marker
							key={marker._id}
							longitude={marker.geo.coordinates[0]}
							latitude={marker.geo.coordinates[1]}
							color="red"
							anchor="bottom"
						>
							<Popover>
								<PopoverTrigger className="cursor-pointer">
									{theme === 'light' ? (
										<MapPinIcon className="size-8 text-green-900" />
									) : (
										<MapPinIcon className="size-8 text-red-900" />
									)}
								</PopoverTrigger>
								<PopoverContent>
									<Link className="cursor-pointer" to={`/fields/${marker._id}`}>
										<p className="text-sm">
											{marker.field.name}

											<span className="text-muted-foreground">
												{' - '}
												{marker.field.rating || 'No'} rating
											</span>
										</p>
									</Link>
								</PopoverContent>
							</Popover>
						</Marker>
					)
				})}
			</ReactMapGl>
		</div>
	)
}

export default MapBox
