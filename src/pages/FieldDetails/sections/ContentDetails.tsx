import { Marker } from 'react-map-gl'
import { ENV_VARS } from '@/constants/envVars'
import ReactMapGl from 'react-map-gl'
import 'mapbox-gl/dist/mapbox-gl.css'
import { TLocation } from '@/types'

const ContentDetails = ({ location }: { location: TLocation | undefined }) => {
	return (
		<section className="my-8 flex flex-col gap-4">
			<div>
				<h2 className="text-2xl font-bold capitalize ">overview</h2>
				<p className="mt-3 max-w-[750px] text-base">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa illum
					nihil aut sequi numquam minus reprehenderit maiores commodi eligendi,
					perferendis fuga id harum similique libero itaque soluta veritatis
					voluptatibus minima dolores, atque earum? Velit libero distinctio
					tenetur, accusantium, optio nemo et aspernatur qui commodi itaque
					temporibus eos a amet voluptatum facilis, eligendi modi alias possimus
					non quidem illo quibusdam esse. Voluptas accusamus ipsa, aut aliquid
					doloremque perspiciatis odio. Ipsum tempore nam fuga illo sint vel non
					voluptas nihil dignissimos suscipit.
				</p>
			</div>
			<div>
				<h2 className="text-2xl font-bold capitalize ">advanced facilities</h2>
				<p className="mt-3 max-w-[750px] text-base">
					Neque porro quisquam est dolorem ipsum quia dolor si amet consectetur
					adipisci velit sed quian numquam eius tempora incidunt labore dolore
					magnam aliquam quaerat voluptatem.
				</p>
				<div className="mt-4">
					<img src="" alt="content details image" />
				</div>
			</div>
			<div>
				<h2 className="text-2xl font-bold capitalize ">field’s address</h2>
				<p className="mt-3 max-w-[750px] text-base">
					Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse
					quam nihil molestiae consequatur vel eillum qui dolorem eum fugiat quo
					voluptas nulla pariatur
				</p>
				<p className="my-5 max-w-[750px] text-base">
					Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
					fugit sed quia consequuntur magne doloreseos qui ratione voluptatem
					sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor
					si amet consectetur adipisci velit sed quian numquam eius modi tempora
					incidunt
				</p>
			</div>

			{location && (
				<ReactMapGl
					mapboxAccessToken={ENV_VARS.MAP.ACCESS_TOKEN}
					mapStyle={ENV_VARS.MAP.STYLE_URL}
					style={{ width: 800, height: 500 }}
					initialViewState={{
						longitude: location?.geo.coordinates[0],
						latitude: location?.geo.coordinates[1],
						zoom: 13,
					}}
				>
					<Marker
						longitude={location.geo.coordinates[0]}
						latitude={location.geo.coordinates[1]}
						color="red"
						anchor="bottom"
					/>
				</ReactMapGl>
			)}
		</section>
	)
}

export default ContentDetails
