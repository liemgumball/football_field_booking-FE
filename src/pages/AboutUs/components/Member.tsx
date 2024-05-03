import { Separator } from '../../../components/ui/separator'
import avaMember from '/avaMember.png'
import SocialContactItem from '../../../components/SocialContactItem'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card'

const Member = () => {
    return (
        <li>
            <Card className="flex border-solid shadow-xl gap-5 py-6 px-4 w-fit">
                <CardHeader>
                    <img src={avaMember} width={90} height={90} alt='avatar member' />
                </CardHeader>
                <div className='capitalize flex flex-col gap-4 max-w-max '>
                    <CardTitle className='font-semibold'>donald d.schafer </CardTitle>
                    <CardDescription>CEO & founder</CardDescription>
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