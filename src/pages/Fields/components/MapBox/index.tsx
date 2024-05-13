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
import { SetStateAction, useState, Dispatch, useEffect } from 'react'

type TViewPort = {
	longitude: number
	latitude: number
	zoom?: number
}

const MapBox = ({
	markers,
	initialViewPort,
	setZoom,
}: {
	markers: TMarker[]
	initialViewPort: TViewPort
	setZoom: Dispatch<SetStateAction<number>>
}) => {
	const [viewPort, setViewPort] = useState(initialViewPort)

	useEffect(() => {
		if (viewPort.zoom) {
			const newZoom = viewPort.zoom
			setZoom(newZoom)
		}
	}, [viewPort.zoom])

	return (
		<div className="mt-6 overflow-hidden rounded-lg">
			<ReactMapGl
				mapboxAccessToken={ENV_VARS.MAP.ACCESS_TOKEN}
				mapStyle={ENV_VARS.MAP.STYLE_URL}
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
									<MapPinIcon className="size-16 text-green-900" />
									{/* <i className="fa fa-solid fa-location-dot"></i> */}
								</PopoverTrigger>
								<PopoverContent>
									<p className="text-sm">
										{marker.field.name}

										<span className="text-muted-foreground">
											{' - '}
											{marker.field.rating || 'No'} rating
										</span>
									</p>
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
