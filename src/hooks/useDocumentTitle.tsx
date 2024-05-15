import { useDocumentTitle as _useDocumentTitle } from 'usehooks-ts'

export const useDocumentTitle = (title?: string) =>
	_useDocumentTitle(title ? `${title} - DN Football` : 'DN Football')
