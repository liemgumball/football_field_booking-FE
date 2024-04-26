
type ServiceProps = { list: { to: string, content: string }[] }

const ServicesItem = ({ list }: ServiceProps) => {
    const serviceList = list.map((item) => (
        <li className="mt-2">
            <a href={item.to} className='hover:text-primary'>
                {item.content}
            </a>
        </li>
    ))

    return (
        <ul className='mt-4 text-lg w-full'>
            {serviceList}
        </ul>
    );

}

export default ServicesItem