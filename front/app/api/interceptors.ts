import { removeTokensStorage } from '@/services/auth/auth.helper'
import { AuthService } from '@/services/auth/auth.service'
import axios, { AxiosError, InternalAxiosRequestConfig } from 'axios'
import { API_SERVER_URL, API_URL } from 'config/api.config'
import { IS_PRODUCTION } from 'config/constants'
import Cookies from 'js-cookie'
import { errorCatch, getContentType } from './api.helpers'

/**
 * Кастомный интерфейс для `InternalAxiosRequestConfig`
 * Добавляем `_isRetry` и корректируем тип `T`.
 */
interface CustomAxiosRequestConfig<T = unknown>
	extends InternalAxiosRequestConfig<T> {
	_isRetry?: boolean
}

/**
 * Базовый axios без авторизации
 */
export const axiosClassic = axios.create({
	baseURL: IS_PRODUCTION ? API_SERVER_URL : API_URL,
	headers: getContentType(),
})

/**
 * Основной axios-инстанс с авторизацией
 */
const instance = axios.create({
	baseURL: API_URL,
	headers: getContentType(),
})

/**
 * Перехватчик запросов: добавляет `Authorization`
 */
instance.interceptors.request.use((config: CustomAxiosRequestConfig) => {
	const accessToken = Cookies.get('accessToken')

	if (config.headers && accessToken) {
		config.headers.Authorization = `Bearer ${accessToken}`
	}

	return config
})

/**
 * Перехватчик ответов: обработка ошибок
 */
instance.interceptors.response.use(
	(response) => response,
	async (error: AxiosError<{ message?: string | string[] }>) => {
		const originalRequest = error.config as CustomAxiosRequestConfig

		if (
			error.response &&
			(error.response.status === 401 ||
				errorCatch(error) === 'jwt expired' ||
				errorCatch(error) === 'jwt must be provided') &&
			originalRequest &&
			!originalRequest._isRetry
		) {
			originalRequest._isRetry = true
			try {
				await AuthService.getNewTokens()
				return instance.request(originalRequest)
			} catch (e: unknown) {
				if (
					e instanceof AxiosError &&
					errorCatch(e as AxiosError<{ message?: string | string[] }>) ===
						'jwt expired'
				) {
					removeTokensStorage()
				}
			}
		}

		throw error
	}
)

export default instance
