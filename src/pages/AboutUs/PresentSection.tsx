import { buttonVariants } from '@/components/ui/button'
import presentationImg from '/presentationImg.png'
import { cn } from '@/lib/utils'


const PresentSection = () => {

    return (
        <section className="flex flex-col-reverse gap-5 xl:flex-row container items-center">
            <div className="hero-img rounded-xl overflow-hidden min-w-[600px] h-auto min-h-[320px]">
                <img src={presentationImg} alt='review image' />
            </div>

            <div className="max-w-[800px] space-y-8">
                <div className='text-center'>
                    <p className={cn(buttonVariants({ size: 'lg' }), 'max-w-max')}> Who We Are </p>
                    <h2 className='text-5xl font-bold capitalize mt-3'>great opportunity for
                        adventure & travels</h2>
                    <p className='text-base font-normal mt-4'>Set perspiciatis unde omnis iste natus error voluptatem accusantium doloremue
                        laudantium totam rem aperiam eaque quae abillo inventore veritatis et quasi
                        architecto beatae vitae dicta sunt explicabo.</p>
                </div>
                <div className='flex flex-wrap gap-5 justify-center mt-6 py-16 px-6 shadow-xl '>
                    <div className='px-8'>
                        <p className='font-semibold 
                         text-3xl text-center'>60%</p>
                        <p className='font-bold text-3xl capitalize text-nowrap'>saticfied clients</p>
                    </div>
                    <div className='px-8'>
                        <p className='font-semibold 
                         text-3xl text-center'>93%</p>
                        <p className='font-bold text-3xl capitalize text-nowrap'>succes rate</p>
                    </div>
                </div>
            </div>
        </section >
    )

}

export default PresentSection