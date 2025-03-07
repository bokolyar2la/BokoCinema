import { errorCatch } from 'api/api.helpers'
import { AxiosError } from 'axios'
import { toastr } from 'react-redux-toastr'

export const toastError = (error: unknown, title?: string) => {
	let message = 'An unknown error occurred'

	if (error instanceof AxiosError) {
		message = errorCatch(error)
	} else if (error instanceof Error) {
		message = error.message
	}

	toastr.error(title || 'Error request', message)
	throw message
}
