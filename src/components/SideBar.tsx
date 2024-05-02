import { Sheet, SheetContent, SheetHeader, SheetTrigger } from './ui/sheet'
import { Link } from 'react-router-dom'
import { MenuIcon } from 'lucide-react'
import { Icons } from './Icons'


const SlideBar = () => {

    return (
        <Sheet >
            <SheetTrigger asChild className='w-8 md:hidden'>
                <MenuIcon size={20} className='text-secondary-foreground' />
            </SheetTrigger>
            <SheetContent side='left'>
                <SheetHeader >
                    <Icons.Logo />
                    <h1 className='capitalize text-primary text-center text-2xl font-bold'>welcome to l88</h1>
                </SheetHeader>
                <div className='flex flex-col space-y-2 gap-5 pt-6 px-4 capitalize'>
                    <div>
                        <h4 className='capitalize mb-2 text-2xl font-semibold' >introduction</h4>
                        <ul className='flex flex-col gap-4 text-gray-600'>
                            <li>
                                <Link to='/'>
                                    <p className='capitalize text-base font-medium'>introduction</p>
                                </Link>
                            </li>
                            <li>
                                <Link to='/'>
                                    <p className='capitalize text-base font-medium'>booking</p>

                                </Link>
                            </li>
                            <li>
                                <Link to='/'>
                                    <p className='capitalize text-base font-medium'>collaboration</p>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h4 className='capitalize mb-2 text-2xl font-semibold'>platform</h4>
                        <ul className='flex flex-col gap-4 text-gray-600' >
                            <li>
                                <Link to='/services'>
                                    <p className='capitalize text-base font-medium'>find football field</p>
                                </Link>
                            </li>
                            <li>
                                <Link to='/fields'>
                                    <p className='capitalize text-base font-medium'>fields details</p>
                                </Link>
                            </li>
                            <li>
                                <Link to='/booking'>
                                    <p className='capitalize text-base font-medium'>booking</p>
                                </Link>
                            </li>
                            <li>
                                <Link to='/register-field'>
                                    <p className='capitalize text-base font-medium'>become our partner</p>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <Link to='/contactus'>
                        <p className='capitalize text-2xl font-semibold' >contact us</p>
                    </Link>
                </div>
            </SheetContent>
        </Sheet>
    )
}

export default SlideBar