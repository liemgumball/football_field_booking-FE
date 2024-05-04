import { Separator } from '../../../components/ui/separator'
import SocialContactItem from '../../../components/SocialContactItem'
import {
    Card,
    CardDescription,
    CardHeader,
    CardTitle
} from '@/components/ui/card'


type MemberProps = {
    name: string
    position: string
    image: string
}

const Member = (member: MemberProps) => {
    return (
        <li>
            <Card className="flex border-solid shadow-xl gap-5 py-6 px-4 w-fit">
                <CardHeader >
                    <img className='rounded-lg' src={member.image} width={90} height={90} alt='avatar member' />
                </CardHeader>
                <div className='capitalize flex flex-col gap-4 max-w-max '>
                    <CardTitle className='font-semibold'>{member.name} </CardTitle>
                    <CardDescription>{member.position}</CardDescription>
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
            </Card>

        </li>

    )
}

export default Member