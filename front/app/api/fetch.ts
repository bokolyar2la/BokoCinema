import axios from './interceptors'

type TypeInput<T = unknown> = {
	url: string
	method?: 'GET' | 'POST' | 'PUT' | 'DELETE'
	body?: T
}

export const api = async <T = unknown>({ url, method, body }: TypeInput<T>) => {
	return axios<T>({
		method,
		url,
		data: body,
	})
}
