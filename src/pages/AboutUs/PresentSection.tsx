import { buttonVariants } from '@/components/ui/button'
import presentationImg from '/presentationImg.png'
import { cn } from '@/lib/utils'


const PresentSection = () => {

    return (
        <section className="flex flex-col-reverse gap-5 xl:flex-row container items-center">
            <div className="hero-img rounded-xl overflow-hidden max-w-[310px] md:max-w-[700px] h-auto ">
                <img src={presentationImg} alt='review image' />
            </div>

            <div className="max-w-[350px] md:max-w-[600px] lg:max-w-[800px] space-y-1 md:space-y-4 lg:space-y-8">
                <div className='text-center'>
                    <p className={cn(buttonVariants({ size: 'sm' }), 'max-w-max')}> Who We Are </p>
                    <h2 className='text-xl md:text-4xl lg:text-5xl font-bold capitalize mt-3'>great opportunity for
                        adventure & travels</h2>
                    <p className='text-xs md:text-lg lg:text-xl font-normal mt-4'>Set perspiciatis unde omnis iste natus error voluptatem accusantium doloremue
                        laudantium totam rem aperiam eaque quae abillo inventore veritatis et quasi
                        architecto beatae vitae dicta sunt explicabo.</p>
                </div>
                <div className='flex flex-wrap gap-3 justify-center mt-3 py-10 px-6 shadow-xl '>
                    <div className='px-8'>
                        <p className='font-semibold 
                         text-lg text-center md:text-xl lg:text-3xl'>60%</p>
                        <p className='font-bold text-lg lg:text-3xl capitalize text-nowrap'>saticfied clients</p>
                    </div>
                    <div className='px-8'>
                        <p className='font-semibold 
                         text-lg text-center md:text-xl lg:text-3xl'>93%</p>
                        <p className='font-bold text-lg lg:text-3xl capitalize text-nowrap'>succes rate</p>
                    </div>
                </div>
            </div>
        </section >
    )

}

export default PresentSection