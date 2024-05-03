import Member from '@/components/Member'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const TeamMember = () => {
    return (
        <section>
            <div className='flex justify-center'>
                <div className="max-w-[800px] space-y-8 text-center">
                    <p className={cn(buttonVariants({ size: 'lg' }), 'max-w-max')}> Team Member </p>
                    <h2 className='text-5xl font-bold capitalize'>we’ve expert team members meet
                        with team</h2>
                </div>
            </div>
            <div className='grid grid-cols-3 gap-x-4 mt-3 gap-y-5'>
                <Member />
                <Member />
                <Member />
                <Member />
                <Member />
                <Member />
            </div>

        </section>
    )
}

export default TeamMember