// ES6
import { ENV_VARS } from '@/constants/envVars'
import useLocationStore from '@/stores/location'
import ReactMapboxGl from 'react-map-gl'

const Fields = () => {
	const coordinates = useLocationStore((set) => set.coordinates)

	return (
		coordinates && (
			<ReactMapboxGl
				mapboxAccessToken={ENV_VARS.MAP.ACCESS_TOKEN}
				mapStyle={ENV_VARS.MAP.STYLE_URL}
				viewState={{
					zoom: 16,
					height: 0,
					width: 0,
					bearing: 0,
					pitch: 0,
					padding: { top: 0, right: 0, bottom: 0, left: 0 },
					...coordinates,
				}}
			></ReactMapboxGl>
		)
	)
}

export default Fields
