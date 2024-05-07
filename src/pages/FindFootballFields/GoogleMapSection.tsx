import { APIProvider, Map } from '@vis.gl/react-google-maps'

const GoogleMapSection = () => {
	const position = { lat: 53.54, lng: 10 }

	return (
		<APIProvider apiKey="AIzaSyBKWnVBL4a_hIaLnnaXT7P57y3nklRFtKk">
			<section className="h-10">
				<Map zoom={9} center={position}></Map>
			</section>
		</APIProvider>
	)
}

export default GoogleMapSection
