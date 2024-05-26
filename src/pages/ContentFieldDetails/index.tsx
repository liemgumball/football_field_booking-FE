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

	console.log(field.subfields)

	return (
		<section className="my-8 space-y-10">
			<div className="flex flex-wrap justify-between">
				<div>
					<h3 className="text-4xl font-medium capitalize">overview</h3>
					<p className="mt-4 max-w-[750px]">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa illum
						nihil aut sequi numquam minus reprehenderit maiores commodi
						eligendi, perferendis fuga id harum similique libero itaque soluta
						veritatis voluptatibus minima dolores, atque earum? Velit libero
						distinctio tenetur, accusantium, optio nemo et aspernatur qui
						commodi itaque temporibus eos a amet voluptatum facilis, eligendi
						modi alias possimus non quidem illo quibusdam esse. Voluptas
						accusamus ipsa, aut aliquid doloremque perspiciatis odio. Ipsum
						tempore nam fuga illo sint vel non voluptas nihil dignissimos
						suscipit.
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
					Neque porro quisquam est dolorem ipsum quia dolor si amet consectetur
					adipisci velit sed quian numquam eius tempora incidunt labore dolore
					magnam aliquam quaerat voluptatem.
				</p>
				<SubFieldList subfields={field.subfields} />
			</div>
			<div className="">
				<h2 className="text-2xl font-medium capitalize ">field’s address</h2>
				<p className="mt-3 text-base">
					Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse
					quam nihil molestiae consequatur vel eillum qui dolorem eum fugiat quo
					voluptas nulla pariatur
				</p>
				<p className="my-5 text-base">
					Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
					fugit sed quia consequuntur magne doloreseos qui ratione voluptatem
					sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor
					si amet consectetur adipisci velit sed quian numquam eius modi tempora
					incidunt
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
