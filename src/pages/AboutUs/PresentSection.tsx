import { buttonVariants } from '@/components/ui/button'
import { AspectRatio } from '@/components/ui/aspect-ratio'
import presentationImg from '/presentationImg.png'
import { cn } from '@/lib/utils'
import { Separator } from '@/components/ui/separator'

const PresentSection = () => {

    return (
        <section className="flex flex-col-reverse gap-5 mt-6 xl:flex-row container items-center">
            <div className="hero-img rounded-xl text-center ">
                <img src={presentationImg} width="100%" alt='review image' />
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
                <div className='flex flex-wrap gap-5 justify-center mt-6 border-solid py-16 px-6 shadow-xl '>
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