import authImg from '@/assets/author-1.jpg'

const AuthorItem = () => {
    return (
        <div className="flex gap-6">
            <div>
                <img src={authImg} alt='author' />
            </div>
            <div>
                <h3 className='text-2xl font-semibold mb-3'> Douglas D. Hall</h3>
                <p className='text-xl'> CEO & Founder</p>
            </div>
        </div>
    )

}

export default AuthorItem