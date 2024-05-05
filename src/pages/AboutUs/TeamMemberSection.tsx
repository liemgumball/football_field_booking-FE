import Member from '@/pages/AboutUs/components/Member'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import avaLiem from '/avaLiem.png'
import avaLe from '/avaLe.png'

const Members = [
    {
        name: 'Liem Nguyen',
        position: 'CTO & Founder',
        image: avaLiem
    },
    {
        name: 'Le Hoang',
        position: 'CEO',
        image: avaLe

    }
]

const TeamMember = () => {
    return (
        <section className=' space-y-16  container'>
            <div className='container text-center max-w-[350px] md:max-w-[600px] lg:max-w-[800px]'>
                <p className={cn(buttonVariants({ size: 'sm' }), 'max-w-max')}> Team Member </p>
                <h2 className='text-lg md:text-4xl lg:text-5xl font-bold capitalize tracking-normal mt-5'>we’ve expert team members meet
                    with team</h2>
            </div>
            <ul className='grid grid-cols-1 lg:grid-cols-2 gap-x-4 mt-3 gap-y-5 place-items-center'>
                {Members.map((memeber) => (
                    <Member name={memeber.name} position={memeber.position} image={memeber.image} />
                ))}
            </ul>

        </section>
    )
}

export default TeamMember