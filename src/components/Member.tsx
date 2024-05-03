import { Separator } from './ui/separator'
import avaMember from '/avaMember.png'
import SocialContactItem from './SocialContactItem'

const Member = () => {
    return (
        <section className="flex flex-row border-solid shadow-xl gap-5 py-6 pl-4 items-center">
            <div>
                <img src={avaMember} alt='avatar member' />
            </div>
            <div className='capitalize flex flex-col gap-4 '>
                <p className='font-semibold'>donald d.schafer </p>
                <p>CEO & founder</p>
                <Separator />
                <ul className='flex'>
                    <li>
                        <SocialContactItem className="fab fa-facebook-f" />
                    </li>
                    <li>
                        <SocialContactItem className="fab fa-instagram" />
                    </li>
                    <li>
                        <SocialContactItem className="fab fa-twitter" />
                    </li>
                    <li>
                        <SocialContactItem className="fab fa-linkedin-in" />
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default Member