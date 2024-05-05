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
        <div className='w-screen h-[500px] bg-hero-about-us bg-cover rounded-lg relative'>
            <div className='absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed'>
                <div className="flex flex-col gap-3 h-full items-center justify-center text-white capitalize">
                    <h1 className='font-bold  text-5xl'>about us</h1>
                    <Breadcrumb className="rounded-xl bg-background/70 px-8 py-2">
                        <BreadcrumbList className="text-lg">
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
    )

}

export default HeroSection