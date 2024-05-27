import { useEffect, useState } from 'react'
import { toDataURL } from 'qrcode'

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
import { Button } from '@/components/ui/button'
import { DownloadIcon, QrCodeIcon } from 'lucide-react'

type TProps = {
	_id: string
	label?: string
	size?: 'sm' | 'default'
}

const BookingQRCode = ({ _id, size, label }: TProps) => {
	const [code, setCode] = useState('')
	const [isOpen, setIsOpen] = useState(false)

	// Generate the QR code
	useEffect(() => {
		const generate = async () => {
			try {
				const dataUrl = await toDataURL(`/bookings/${_id}`)

				setCode(dataUrl)
			} catch (err) {
				// TODO
			}
		}
		generate()
	}, [_id])

	const handleDownload = () => {
		if (code) {
			const link = document.createElement('a')
			link.href = code
			link.download = `booking-${_id}.png`
			document.body.appendChild(link)
			link.click()
			document.body.removeChild(link)
		}
	}

	return (
		<AlertDialog open={isOpen} onOpenChange={setIsOpen}>
			<Button asChild variant="ghost" size={size || 'icon'}>
				<AlertDialogTrigger>
					{label}
					<QrCodeIcon />
				</AlertDialogTrigger>
			</Button>
			<AlertDialogContent>
				<AlertDialogHeader>
					<AlertDialogTitle>Booking QR Code.</AlertDialogTitle>
					<AlertDialogDescription>
						Show this QR code for the Football Field to owner.
					</AlertDialogDescription>
				</AlertDialogHeader>
				{code.length && (
					<div className="mx-auto rounded-md border p-2">
						<img src={code} alt="QR Code" />
					</div>
				)}
				<AlertDialogFooter>
					<AlertDialogCancel>Close</AlertDialogCancel>
					<AlertDialogAction onClick={handleDownload}>
						<DownloadIcon className="mr-1 size-4" />
						Download
					</AlertDialogAction>
				</AlertDialogFooter>
			</AlertDialogContent>
		</AlertDialog>
	)
}

export default BookingQRCode
