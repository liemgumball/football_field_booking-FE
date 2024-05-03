import FeatureItem from '@/components/FeatureItem'
import featureImage1 from '/featureImage1.png'
import featureImage2 from '/featureImage2.png'
import featureImage3 from '/featureImage3.png'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const Advantages = () => {
    return (
        <section className="flex flex-row justify-between  mt-12">
            <div>
                <div className="max-w-[800px] space-y-8">
                    <p className={cn(buttonVariants({ size: 'lg' }), 'max-w-max')}> Who We Are </p>
                    <h2 className='text-5xl font-bold capitalize'>great opportunity for
                        adventure & travels</h2>
                </div>
                <ul className='flex flex-col gap-11 mt-10'>
                    <li>
                        <FeatureItem />
                    </li>
                    <li>
                        <FeatureItem />
                    </li>
                    <li>
                        <FeatureItem />
                    </li>
                </ul>
            </div>
            <ul className='flex flex-row flex-wrap gap-y-5 justify-center max-w-max '>
                <li className='self-end'>
                    <img className='rounded-xl' src={featureImage2} alt='feature image 2' />
                </li>
                <li >
                    <img className='rounded-xl' src={featureImage3} alt='feature image 3' />
                </li>
                <li>
                    <img className='rounded-xl' src={featureImage1} alt='feature image 1' />
                </li>

            </ul>
        </section>)
}

export default Advantages