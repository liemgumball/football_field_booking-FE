import ContactItem from '../ContactItem'
import { Separator } from '../ui/separator'
import { MapPin, Mail, Phone } from 'lucide-react'
import SocialContactItem from '../SocialContactItem'
import ServicesItem from './ServicesItem'
import {
	FOOTER_NAV_LIST_LEFT,
	FOOTER_NAV_LIST_RIGHT,
} from '@/constants/navigation'

const Footer = () => {
	return (
		<footer className="container mt-auto w-full self-end justify-self-end pt-6">
			<Separator />
			<div className="my-8 flex items-center justify-between ">
				<ul className="grid w-full grid-cols-1 gap-y-12 md:grid-cols-2 xl:grid-cols-4">
					<ContactItem
						title="Location"
						content="387 Truong Son, Danang"
						icon={<MapPin className="size-4 md:size-6" />}
					/>
					<ContactItem
						title="Email"
						content="supporter@gmail.com"
						to="mailto:supporter@gmail.com"
						icon={<Mail className="size-4 md:size-6" />}
					/>
					<ContactItem
						title="Hotline"
						content="+84 931 069 005"
						to="tel:+84931069005"
						icon={<Phone className="size-4 md:size-6" />}
					/>
					<li className="flex space-x-2 xl:justify-center">
						<SocialContactItem className="fab fa-facebook-f" />
						<SocialContactItem className="fab fa-instagram" />
						<SocialContactItem className="fab fa-twitter" />
						<SocialContactItem className="fab fa-linkedin-in" />
					</li>
				</ul>
			</div>
			<Separator />
			<div className="my-9 grid w-full grid-cols-1 gap-5 md:grid-cols-2 xl:flex xl:flex-row xl:justify-between">
				<div>
					<h4 className="text-base font-bold md:text-xl">About</h4>
					<p className="mt-3 max-w-56 text-sm font-normal md:mt-6">
						To take trivial example which us ever undertakes laborious physica
						exercise except obsome
					</p>
				</div>

				<div>
					<h4 className="text-base font-bold md:text-xl">Services</h4>
					<div className="grid max-w-80 grid-cols-2 gap-5 font-normal md:gap-7">
						<ServicesItem list={FOOTER_NAV_LIST_LEFT} />
						<ServicesItem list={FOOTER_NAV_LIST_RIGHT} />
					</div>
				</div>
				<div>
					<h4 className="text-base font-bold md:text-xl">Newsletter</h4>
					<p className="mt-3 max-w-56 text-sm font-normal md:mt-6">
						Which of us ever undertake laborious physical exercise except obtain
					</p>
				</div>
			</div>
		</footer>
	)
}

export default Footer
