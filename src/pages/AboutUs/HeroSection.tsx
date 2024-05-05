import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'


const HeroSection = () => {

    return (
        <div className='h-[500px] bg-hero-about-us  bg-cover bg-center relative'>
            <div className="absolute left-0 top-0 h-full py-56 w-full bg-black bg-opacity-40">
                <div className='container'>
                    <div className="flex flex-col gap-3 h-full items-center  text-white capitalize">
                        <h1 className='font-bold text-xl md:text-3xl lg:text-5xl'>about us</h1>
                        <Breadcrumb className="rounded-xl bg-background/70 px-8 py-2">
                            <BreadcrumbList className="text-base md:text-lg">
                                <BreadcrumbItem>
                                    <BreadcrumbLink href="/">Home</BreadcrumbLink>
                                </BreadcrumbItem>
                                <BreadcrumbSeparator />
                                <BreadcrumbItem>
                                    <BreadcrumbPage>About Us</BreadcrumbPage>
                                </BreadcrumbItem>
                            </BreadcrumbList>
                        </Breadcrumb>
                    </div>

                </div>
            </div>
        </div>
    )

}

export default HeroSection