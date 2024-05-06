
type ServiceProps = { list: { to: string, content: string }[] }

const ServicesItem = ({ list }: ServiceProps) => {
    const serviceList = list.map((item) => (
        <li className="mt-2" key={item.to}>
            <a href={item.to} className='hover:text-primary text-xs md:text-sm'>
                {item.content}
            </a>
        </li>
    ))

    return (
        <ul className='mt-3 md:mt-4 text-lg w-full'>
            {serviceList}
        </ul>
    );

}

export default ServicesItem