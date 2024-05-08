import { TBooking } from '@/types'
import { createCheckoutSession, updateBooking } from '@/services/booking'

import { Button, buttonVariants } from '@/components/ui/button'
import { toast } from '@/components/ui/use-toast'
import {
	AlertDialog,
	AlertDialogAction,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle,
	AlertDialogTrigger,
} from '@/components/ui/alert-dialog'
import { useMutation, useQueryClient } from '@tanstack/react-query'

type TProps = Pick<TBooking, '_id' | 'status'>

const BookingDetailsActions = ({ status, _id }: TProps) => {
	const queryClient = useQueryClient()

	const mutation = useMutation<TBooking>({
		mutationFn: () => updateBooking(_id, { canceled: true }),
		onSettled: () =>
			queryClient.invalidateQueries({ queryKey: ['bookings', _id] }),
	})

	const onCheckout = async () => {
		try {
			const { checkoutUrl } = await createCheckoutSession(_id)

			window.location.href = checkoutUrl
		} catch (err) {
			toast({
				title: 'Error while creating checkout session',
				variant: 'destructive',
			})
		}
	}

	const onCancel = async () => {
		try {
			await mutation.mutateAsync()
			toast({
				title: 'Cancel successfully.',
			})
		} catch (err) {
			const error = err as Response
			toast({
				title: (await error.text()) + '.',
				variant: 'destructive',
			})
		}
	}

	return (
		<div className="container flex max-w-min gap-3">
			{status === 'pending' && <Button onClick={onCheckout}>Checkout</Button>}
			{status === 'pending' && (
				<AlertDialog>
					<AlertDialogTrigger
						className={buttonVariants({ variant: 'outline' })}
					>
						Cancel booking
					</AlertDialogTrigger>
					<AlertDialogContent>
						<AlertDialogHeader>
							<AlertDialogTitle>Are you sure to cancel?</AlertDialogTitle>
							<AlertDialogDescription>
								This action cannot be undone. This will cancel your booking.
							</AlertDialogDescription>
						</AlertDialogHeader>
						<AlertDialogFooter>
							<AlertDialogCancel>Cancel</AlertDialogCancel>
							<AlertDialogAction onClick={onCancel}>Continue</AlertDialogAction>
						</AlertDialogFooter>
					</AlertDialogContent>
				</AlertDialog>
			)}
		</div>
	)
}

export default BookingDetailsActions
