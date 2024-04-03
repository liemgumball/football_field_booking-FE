import ContactItem from '../ContactItem'
import { Separator } from '../ui/separator'
import { MapPin, Mail, Phone } from 'lucide-react'
import SocialContactItem from '../SocialContactItem'

const Footer = () => {
	return (
		<footer className="mt-auto w-full min-w-max self-end justify-self-end px-32 py-4">
			<Separator />
			<div className="my-8 flex items-center justify-between px-8 ">
				<ul className="grid w-full auto-cols-max grid-cols-1 gap-x-16 gap-y-16  lg:grid-cols-2 xl:grid-cols-4">
					<ContactItem
						title="Location"
						content="387 Truong Son, Danang"
						icon={<MapPin size={23} />}
					/>
					<ContactItem
						title="Email"
						content="supporter@gmail.com"
						to="mailto:supporter@gmail.com"
						icon={<Mail size={23} />}
					/>
					<ContactItem
						title="Hotline"
						content="+84 931 069 005"
						to="tel:+84931069005"
						icon={<Phone size={23} />}
					/>
					<li className="flex space-x-2">
						<SocialContactItem className="fab fa-facebook-f" />
						<SocialContactItem className="fab fa-instagram" />
						<SocialContactItem className="fab fa-twitter" />
						<SocialContactItem className="fab fa-linkedin-in" />
					</li>
				</ul>
			</div>
			<Separator />
			<div className="my-16"></div>
		</footer>
	)
}

export default Footer
