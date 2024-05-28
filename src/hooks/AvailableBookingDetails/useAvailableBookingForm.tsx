import { timeSchema } from '@/constants/time'
import useAuthStore from '@/stores/auth'
import { TTimeStep } from '@/types'
import { getDuration } from '@/utils/time'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

// Form validation
export const availableFormSchema = z
	.object({
		name: z.string().min(1, 'Name cannot be empty'),
		from: timeSchema,
		to: timeSchema,
		additionalServices: z.any().optional(), // should be radio group
		description: z.string().optional(),
	})
	.refine(({ from, to }) => getDuration(from, to) >= 1, {
		message: 'To must after From as least 1 hour',
		path: ['to'],
	})

export const useAvailableBookingForm = (from: TTimeStep, to: TTimeStep) => {
	const user = useAuthStore((store) => store.user)

	return useForm<z.infer<typeof availableFormSchema>>({
		resolver: zodResolver(availableFormSchema),
		defaultValues: {
			name: user?.name || '',
			from: from,
			to: to,
		},
		mode: 'onChange',
	})
}
