import ContactItem from '../../ContactItem'
import { Separator } from '../../ui/separator'
import { MapPin, Mail, Phone } from 'lucide-react'
import SocialContactItem from '../../SocialContactItem'
import ServicesItem from './components/ServicesItem'
import { FOOTER_NAVLIST_LEFT, FOOTER_NAVLIST_RIGHT } from '@/constants/navigation'

const Footer = () => {
	return (
		<footer className="mt-auto w-full self-end justify-self-end px-8 py-4 xl:px-24">
			<Separator />
			<div className="my-8 flex items-center justify-between ">
				<ul className="grid w-full grid-cols-1 gap-y-12 md:grid-cols-2 xl:grid-cols-4">
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
					<li className="flex space-x-2 xl:justify-center">
						<SocialContactItem className="fab fa-facebook-f" />
						<SocialContactItem className="fab fa-instagram" />
						<SocialContactItem className="fab fa-twitter" />
						<SocialContactItem className="fab fa-linkedin-in" />
					</li>
				</ul>
			</div>
			<Separator />
			<div className="my-16 w-full grid grid-cols-1 gap-5 md:grid-cols-2 xl:flex xl:flex-row xl:justify-between">
				<div>
					<h4 className='text-xl font-bold'>About</h4>
					<p className='mt-6 text-lg font-normal'>To take trivial example which us <br /> ever undertakes laborious <br /> physica exercise except obsome</p>
				</div>

				<div>
					<h4 className='text-xl font-bold'>Services</h4>
					<div className='grid grid-cols-2 font-normal gap-5 md:gap-7'>
						<ServicesItem list={FOOTER_NAVLIST_LEFT} />
						<ServicesItem list={FOOTER_NAVLIST_RIGHT} />
					</div>
				</div>
				<div>
					<h4 className='text-xl font-bold'>Newsletter</h4>
					<p className='mt-6 text-lg font-normal'>Which of us ever undertake <br /> laborious physical exercise <br /> except obtain</p>
				</div>
			</div>
			<Separator />
			<div className='mt-7 flex flex-col text-xl items-center md:flex-row md:text-lg justify-between '>
				<p>Copy@ 2023 <span className='text-orange-500'>GoWilds</span> , All Right Reserved</p>
				<ul className='flex gap-12'>
					<li className='cursor-pointer hover:text-green-500'>Setting & privacy</li>
					<li className='cursor-pointer hover:text-green-500'> Faqs</li>
					<li className='cursor-pointer hover:text-green-500'> Support</li>
				</ul>
			</div>
		</footer>
	)
}

export default Footer