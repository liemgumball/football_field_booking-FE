
import burgerMenu from '/burger-menu-svgrepo-com.svg'
import footballIcon from '/football-icon.svg'
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from './ui/sheet'
import { DropdownMenu, DropdownMenuContent, DropdownMenuLabel, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from './ui/dropdown-menu'
import { Link } from 'react-router-dom'


const SlideBar = () => {
    return (
        <Sheet >
            <SheetTrigger asChild className='w-8 md:hidden'>
                <img src={burgerMenu} alt='burger menu' />
            </SheetTrigger>
            <SheetContent side='left'>
                <SheetHeader >
                    <img className='w-28' src={footballIcon} alt='footbal icon' />
                    <h1 className='capitalize text-primary text-center text-2xl font-bold'>welcome to l88</h1>
                </SheetHeader>
                <div className='flex flex-col space-y-2 pt-6 capitalize'>
                    <DropdownMenu>
                        <DropdownMenuTrigger className='capitalize text-2xl font-semibold' >introduction</DropdownMenuTrigger>
                        <DropdownMenuContent className='w-80'>
                            <DropdownMenuItem className='flex flex-col items-start gap-1'>
                                <Link to='/'>
                                    <p className='capitalize text-base font-medium'>introduction</p>
                                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque, pariatur.</p>
                                </Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem className='flex flex-col items-start gap-1'>
                                <Link to='/'>
                                    <p className='capitalize text-base font-medium'>booking</p>
                                    <p>Lorem ipsum dolor sit amet.</p>
                                </Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem className='flex flex-col items-start gap-1'>
                                <Link to='/'>
                                    <p className='capitalize text-base font-medium'>collaboration</p>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                </Link>
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                    <DropdownMenuSeparator />
                    <DropdownMenu >
                        <DropdownMenuTrigger className='capitalize text-2xl font-semibold' >platform</DropdownMenuTrigger>
                        <DropdownMenuContent className='w-80' >
                            <DropdownMenuItem className='flex flex-col items-start gap-1'>
                                <Link to='/services'>
                                    <p className='capitalize text-base font-medium'>find football field</p>
                                    <p>Explore available football fields in your area and book them for your matches or events.</p>
                                </Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem className='flex flex-col items-start gap-1'>
                                <Link to='/fields'>
                                    <p className='capitalize text-base font-medium'>fields details</p>
                                    <p>View detailed information about each football field, including amenities, availability, and pricing.</p>
                                </Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem className='flex flex-col items-start gap-1'>
                                <Link to='/booking'>
                                    <p className='capitalize text-base font-medium'>booking</p>
                                    <p>Track the progress of your football field booking, from selection to confirmation.</p>
                                </Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem className='flex flex-col items-start gap-1'>
                                <Link to='/register-field'>
                                    <p className='capitalize text-base font-medium'>become our partner</p>
                                    <p>Partner with us to manage your own football field and reach a wider audience of enthusiasts.</p>
                                </Link>
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                    <DropdownMenuSeparator />
                    <DropdownMenu>
                        <DropdownMenuTrigger className='capitalize text-2xl font-semibold' >contact us</DropdownMenuTrigger>
                    </DropdownMenu>
                    <DropdownMenuSeparator />
                </div>
            </SheetContent>
        </Sheet>
    )
}

export default SlideBar