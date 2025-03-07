import { AxiosError } from 'axios'

export const errorCatch = (
	error: AxiosError<{ message?: string | string[] }>
): string =>
	error.response && error.response.data
		? typeof error.response.data.message === 'object'
			? error.response.data.message[0]
			: error.response.data.message || 'Unknown error'
		: error.message || 'Unknown error'

export const getContentType = () => ({
	'Content-Type': 'application/json',
})
