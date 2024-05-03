import Member from '@/pages/AboutUs/components/Member'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const TeamMember = () => {
    return (
        <section className='mt-16 space-y-16 pt-16 container'>
            <div className='container text-center max-w-[800px]'>
                <p className={cn(buttonVariants({ size: 'lg' }), 'max-w-max')}> Team Member </p>
                <h2 className='text-5xl font-bold capitalize tracking-normal mt-5'>we’ve expert team members meet
                    with team</h2>
            </div>
            <ul className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-x-4 mt-3 gap-y-5 justify-around place-items-center'>
                <Member />
                <Member />
                <Member />
                <Member />
                <Member />
                <Member />
            </ul>

        </section>
    )
}

export default TeamMember