import FeatureItem from '@/pages/AboutUs/components/FeatureItem'
import featureImage1 from '/featureImage1.png'
import featureImage2 from '/featureImage2.png'
import featureImage3 from '/featureImage3.png'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const Advantages = () => {
    return (
        <section className="flex flex-col xl:flex-row gap-8 justify-between items-center px-16 xl:px-48">
            <div className='max-w-[600px] '>
                <div className="space-y-6">
                    <p className={cn(buttonVariants({ size: 'lg' }), 'flex mx-auto xl:mx-0 max-w-max')}> Who We Are </p>
                    <h2 className='text-5xl font-bold capitalize text-center xl:text-start'>great opportunity for
                        adventure & travels</h2>
                </div>
                <ul className='space-y-16 mt-16'>
                    <FeatureItem />
                    <FeatureItem />
                    <FeatureItem />
                </ul>
            </div>
            <ul className='grid grid-cols-2 gap-5 max-w-[762px] '>
                <li className='self-end rounded-xl overflow-hidden'>
                    <img width={500} src={featureImage2} alt='feature image 2' />
                </li>
                <li >
                    <img className='rounded-xl' src={featureImage3} alt='feature image 3' />
                </li>
                <li className='col-span-2'>
                    <img className='rounded-xl' src={featureImage1} alt='feature image 1' />
                </li>

            </ul>
        </section>)
}

export default Advantages