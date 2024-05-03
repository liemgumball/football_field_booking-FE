import featureIcon from '/feature-icon.svg'

const FeatureItem = () => {
    return (
        <div className="flex items-center gap-9">
            <div className='rounded-full shadow-xl border-solid border-2 p-4'>
                <img src={featureIcon} alt='feature icon' />
            </div>
            <div>
                <h3 className="text-3xl font-bold capitalize">safety first always</h3>
                <p className='text-lg'>Set perspiciatis unde omnis estenatus voluptatem
                    accusantium laudantium totarem aperiae</p>
            </div>
        </div>
    )
}

export default FeatureItem