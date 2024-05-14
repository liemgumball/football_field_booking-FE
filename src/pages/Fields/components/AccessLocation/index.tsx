import { Button } from '@/components/ui/button'

const AccessLocation = () => {
	return (
		<div className="mt-5 text-center">
			<p className="text-2xl capitalize">
				please allow access your location before continue!
			</p>
			<Button className="mt-5 text-lg font-bold capitalize">access</Button>
		</div>
	)
}

export default AccessLocation
