import featureIcon from '/feature-icon.svg'

const FeatureItem = () => {
    return (
        <li className="flex items-center gap-3 md:gap-6">
            <div className='rounded-full shadow-xl border-solid border-2 p-2 '>
                <img className='max-w-[30px] md:max-w-[80px]' src={featureIcon} alt='feature icon' />
            </div>
            <div>
                <h3 className="text-base lg:text-xl font-bold capitalize">safety first always</h3>
                <p className='text-xs md:text-lg'>Set perspiciatis unde omnis estenatus voluptatem
                    accusantium laudantium totarem aperiae</p>
            </div>
        </li>
    )
}

export default FeatureItem