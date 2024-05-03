import { Separator } from './ui/separator'
import avaMember from '/avaMember.png'
import SocialContactItem from './SocialContactItem'

const Member = () => {
    return (
        <li className="flex border-solid shadow-xl gap-5 py-6 px-4 w-fit">
            <div>
                <img src={avaMember} width={90} height={90} alt='avatar member' />
            </div>
            <div className='capitalize flex flex-col gap-4 max-w-max '>
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
        </li>

    )
}

export default Member