import BookingDetailsForm from '@/components/BookingDetailsForm'
import BookingDetailsHeader from '@/components/BookingDetailsHeader'
import { Skeleton } from '@/components/ui/skeleton'
import { getDayOfServiceById } from '@/services/day-of-services'
import { calculatePrice, getInitialFrom, getInitialTo } from '@/utils/booking'
import { useQuery } from '@tanstack/react-query'
import { useParams, useSearchParams } from 'react-router-dom'

const AvailableBookingDetails = () => {
	const { id } = useParams()
	const [searchParams] = useSearchParams()

	const from = searchParams.get('from') || getInitialFrom()
	const to = searchParams.get('to') || getInitialTo(from)

	if (!id) throw new Error('Failed to find available booking Id')

	const { data, isLoading, isError, error } = useQuery({
		queryKey: [id, from, to],
		queryFn: () => getDayOfServiceById(id, from, to),
	})

	if (isLoading)
		return (
			<main className="container">
				<header className="my-12 flex flex-col justify-between gap-8 px-12 xl:flex-row">
					<div className="space-y-3">
						<Skeleton className="h-[35px] w-[500px] rounded-md" />
						<Skeleton className="h-[20px] w-[200px] rounded-md" />
						<Skeleton className="mt-2 h-[15px] w-[250px] rounded-md" />
					</div>
					<div className="my-auto flex justify-between gap-6">
						<Skeleton className="h-[50px] w-[120px] rounded-md" />
						<Skeleton className="h-[50px] w-[80px] rounded-md" />
						<Skeleton className="h-[50px] w-[80px] rounded-md" />
					</div>
				</header>
				<section className="mx-auto min-w-max max-w-[700px] rounded-xl bg-secondary/80 px-12 py-8 xl:px-16">
					<div className="space-y-5">
						<div className="space-y-3">
							<Skeleton className="h-[20px] w-[120px] rounded-md" />
							<Skeleton className="h-[50px] w-[550px] rounded-md" />
						</div>
						<div className="space-y-3">
							<Skeleton className="h-[20px] w-[120px] rounded-md" />
							<Skeleton className="h-[50px] w-[550px] rounded-md" />
						</div>
						<div className="space-y-3">
							<Skeleton className="h-[20px] w-[120px] rounded-md" />
							<Skeleton className="h-[50px] w-[550px] rounded-md" />
						</div>
						<Skeleton className="mx-auto h-[50px] w-[150px] rounded-xl" />
					</div>
				</section>
			</main>
		)

	if (isError)
		return (
			<>
				<p>An error occurred while getting booking information</p>
				<p className="text-destructive">{error.message}</p>
			</>
		)

	if (!data)
		return <p className="text-destructive">Fail to get booking information</p>

	return (
		<main className="container">
			<BookingDetailsHeader
				date={data.date}
				rating={data.field.rating || undefined}
				fieldName={data.field.name + ' - ' + data?.subfield.name}
				fieldLocation={data?.field.location}
				price={calculatePrice(data.turnOfServices)}
				duration={1}
				size={data?.subfield.size}
			/>
			<section className="mx-auto min-w-max max-w-[700px] rounded-xl bg-secondary/80 px-12 py-8 xl:px-16">
				<BookingDetailsForm
					id={id}
					from={from}
					to={to}
					date={data?.date}
					subfieldId={data.subfield._id}
					price={calculatePrice(data.turnOfServices)}
				/>
			</section>
		</main>
	)
}

export default AvailableBookingDetails
