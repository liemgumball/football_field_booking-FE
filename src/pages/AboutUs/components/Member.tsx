import { Separator } from '../../../components/ui/separator'
import SocialContactItem from '../../../components/SocialContactItem'
import {
    Card,
    CardDescription,
    CardFooter,
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
            <Card className="flex p-8 items-center gap-4">
                <div>
                    <img className='rounded-lg' src={member.image} width={90} height={90} alt='avatar member' />
                </div>
                <div className='capitalize flex flex-col gap-4 max-w-max '>
                    <CardHeader className='pb-0'>
                        <CardTitle className='font-semibold'>{member.name} </CardTitle>
                        <CardDescription>{member.position}</CardDescription>
                    </CardHeader>
                    <Separator />

                    <CardFooter className='flex space-x-1'>
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
                    </CardFooter>


                </div>
            </Card>

        </li>

    )
}

export default Member