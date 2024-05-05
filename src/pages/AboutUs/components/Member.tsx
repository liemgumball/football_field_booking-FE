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
            <Card className="flex p-4 md:p-8 items-center gap-3 md:gap-5 lg:gap-7">
                <div className='max-w-[50px] md:max-w-[90px] lg:max-w-[110px]'>
                    <img className='rounded-lg' src={member.image} alt='avatar member' />
                </div>
                <div className='capitalize flex flex-col gap-1 max-w-max '>
                    <CardHeader className='p-1'>
                        <CardTitle className='font-semibold text-base md:text-lg lg:text-xl'>{member.name} </CardTitle>
                        <CardDescription className='text-sm md:text-base lg:text-lg'>{member.position}</CardDescription>
                    </CardHeader>
                    <Separator />

                    <CardFooter className='flex p-2 space-x-1'>
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