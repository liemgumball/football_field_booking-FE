import { Marker } from 'react-map-gl'
import { ENV_VARS } from '@/constants/envVars'
import ReactMapGl from 'react-map-gl'
import 'mapbox-gl/dist/mapbox-gl.css'
import SubFieldList from './components/SubFieldList'
import { Button } from '@/components/ui/button'
import { Send } from 'lucide-react'
import { Link } from 'react-router-dom'
import { PATHS } from '@/constants/navigation'
import { useOutletContext } from 'react-router-dom'
import Review from './components/Review'
import { TFootballField } from '@/types'
import useThemeStore from '@/stores/theme'

const ContentFieldDetails = () => {
	const field = useOutletContext<TFootballField>()
	const { theme } = useThemeStore()

	return (
		<section className="my-8 space-y-10">
			<div className="flex flex-wrap justify-between">
				<div>
					<h3 className="text-4xl font-medium capitalize">overview</h3>
					<p className="mt-4 max-w-[750px]">
						This field is proud to be the most modern artificial turf football
						field in the region, giving you the ultimate and impromptu football
						playing experience. The football field is designed according to
						international standards with standard dimensions of 100m x 64m, with
						the latest generation of artificial turf, ensuring good peace,
						comfort and safety for players.
					</p>
				</div>
				<Button className="mt-6 rounded-full py-8 pl-10 pr-1">
					<Link
						className="inline-flex items-center justify-center text-xl font-bold uppercase text-primary-foreground transition-colors "
						to={`${PATHS.FIELD.BASE}/${field._id}/available-bookings`}
					>
						book now
						<div className="ml-5 rounded-full bg-primary-foreground p-4 text-primary ">
							<Send />
						</div>
					</Link>
				</Button>
			</div>
			<div className="">
				<h3 className="text-2xl font-medium capitalize">advanced facilities</h3>
				<p className="mt-4">
					{field.name} is pleased to bring you a system of{' '}
					{field.subfields?.length} modern artificial turf soccer fields,
					meeting all the competition and training needs of soccer fans. Each
					stadium has its own outstanding features, creating a perfect whole for
					your football experience
				</p>
				<SubFieldList subfields={field.subfields} />
			</div>
			<div className="">
				<h2 className="text-2xl font-medium capitalize ">field’s address</h2>
				<p className="mt-3 text-base">
					Nestled in the heart of District, {field.name} stands as an oasis for
					football enthusiasts, offering a premier destination for both
					competitive and recreational play. Conveniently located at{' '}
					{field.location.name}, the field is easily accessible by various modes
					of transportation, ensuring that your journey to football nirvana is
					hassle-free.
				</p>
				<p className="my-5 text-base">
					Whether you're a seasoned player seeking a top-notch training ground
					or a casual group looking for a fun-filled game, {field.name} caters
					to all levels of expertise. Its prime location makes it an ideal
					choice for those residing in the vicinity, while its reputation for
					excellence attracts players from far and wide.
				</p>
			</div>

			{location && (
				<div className="h-[450px] lg:h-[500px]">
					<ReactMapGl
						mapboxAccessToken={ENV_VARS.MAP.ACCESS_TOKEN}
						mapStyle={
							theme === 'light'
								? ENV_VARS.MAP.LIGHT_STYLE_URL
								: ENV_VARS.MAP.DARK_STYLE_URL
						}
						style={{ width: '100%', height: '100%', borderRadius: '0.25rem' }}
						initialViewState={{
							longitude: field.location.geo.coordinates[0],
							latitude: field.location.geo.coordinates[1],
							zoom: 13,
						}}
					>
						<Marker
							longitude={field.location.geo.coordinates[0]}
							latitude={field.location.geo.coordinates[1]}
							color="red"
							anchor="bottom"
						/>
					</ReactMapGl>
				</div>
			)}
			<Review />
		</section>
	)
}

export default ContentFieldDetails
