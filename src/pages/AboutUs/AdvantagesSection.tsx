import FeatureItem from '@/pages/AboutUs/components/FeatureItem'
import featureImage1 from '/featureImage1.png'
import featureImage2 from '/featureImage2.png'
import featureImage3 from '/featureImage3.png'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const Advantages = () => {
    return (
        <section className="flex flex-col xl:flex-row gap-8 md:gap-12 justify-between items-center px-10 xl:px-48">
            <div className='max-w-[350px] md:max-w-[650px]'>
                <div className="space-y-6">
                    <p className={cn(buttonVariants({ size: 'sm' }), 'flex mx-auto xl:mx-0 max-w-max')}> Who We Are </p>
                    <h2 className='text-xl md:text-4xl lg:text-5xl font-bold capitalize text-center xl:text-start'>great opportunity for
                        adventure & travels</h2>
                </div>
                <ul className='space-y-8 mt-8'>
                    <FeatureItem />
                    <FeatureItem />
                    <FeatureItem />
                </ul>
            </div>
            <ul className='grid grid-cols-2 gap-5 max-w-[762px] '>
                <li className='self-end rounded-xl max-w-[100px] md:max-w-[300px] overflow-hidden'>
                    <img src={featureImage2} alt='feature image 2' />
                </li>
                <li className='self-center max-w-[68px] md:max-w-[190px]' >
                    <img className=' rounded-xl' src={featureImage3} alt='feature image 3' />
                </li>
                <li className='col-span-2'>
                    <img className='rounded-xl' src={featureImage1} alt='feature image 1' />
                </li>

            </ul>
        </section>)
}

export default Advantages