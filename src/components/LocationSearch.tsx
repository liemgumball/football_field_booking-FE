import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from '@/components/ui/dialog'
import { Button } from './ui/button'

import { ENV_VARS } from '@/constants/envVars'
import useThemeStore from '@/stores/theme'
import ReactMapGl, { Marker } from 'react-map-gl'
import 'mapbox-gl/dist/mapbox-gl.css'
import { TMarker, TViewPort } from '@/types'
import { useEffect, useState } from 'react'
import { getFieldsByLocation } from '@/services/football-field'
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover'
import { MapPinIcon } from 'lucide-react'
import { Link } from 'react-router-dom'
import useDebounce from '@/hooks/useDebounce'
import { calculateDistance } from '@/utils/map'

type TProps = {
	viewPort: TViewPort
	setViewPort: React.Dispatch<React.SetStateAction<TViewPort>>
	className?: string
	disabled: boolean
	radius: number
}

const LocationSearch = (props: TProps) => {
	const { theme } = useThemeStore()
	const { viewPort, setViewPort } = props

	const debouncedViewPort = useDebounce(viewPort, 500)

	const [markers, setMakers] = useState<TMarker[]>([])

	useEffect(() => {
		const distance = calculateDistance(
			debouncedViewPort.latitude,
			debouncedViewPort.zoom,
			props.radius,
		)

		const fetchData = async () => {
			try {
				const response = await getFieldsByLocation(
					debouncedViewPort.longitude,
					debouncedViewPort.latitude,
					distance,
				)
				if (response) setMakers(response)
			} catch (err) {
				console.error(err)
			}
		}

		// run fetch
		fetchData()
	}, [debouncedViewPort, props.radius])

	return (
		<Dialog>
			<DialogTrigger asChild className={props.className}>
				<Button
					className="text-xs text-muted-foreground"
					variant="ghost"
					size="sm"
					disabled={props.disabled}
				>
					Find by your location
				</Button>
			</DialogTrigger>
			<DialogContent className="max-w-4xl sm:mx-2">
				<DialogHeader>
					<DialogTitle>Find Football Field available around you!</DialogTitle>
					<DialogDescription>
						Move around on the map to search the current football field
						available inside the circle.
					</DialogDescription>

					<div className="my-10 overflow-hidden rounded-lg border">
						<ReactMapGl
							mapboxAccessToken={ENV_VARS.MAP.ACCESS_TOKEN}
							mapStyle={
								theme === 'light'
									? ENV_VARS.MAP.LIGHT_STYLE_URL
									: ENV_VARS.MAP.DARK_STYLE_URL
							}
							style={{ width: '100%', height: 500 }}
							{...viewPort}
							onMove={(e) => setViewPort(e.viewState)}
							maxZoom={17}
							minZoom={11}
							pitch={0}
						>
							{/* circle radius to search */}
							<Marker {...viewPort}>
								<div
									className="rounded-full border-2 border-primary/40"
									style={{ width: props.radius, height: props.radius }}
								/>
							</Marker>

							{/* display football field markers */}
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
													<MapPinIcon className="size-8 text-red-500" />
												)}
											</PopoverTrigger>
											<PopoverContent>
												<Link
													className="cursor-pointer"
													to={`/fields/${marker._id}`}
												>
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
				</DialogHeader>
			</DialogContent>
		</Dialog>
	)
}

export default LocationSearch
