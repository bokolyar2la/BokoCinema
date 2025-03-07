import { AuthService } from '@/services/auth/auth.service'
import { toastError } from '@/utils/toast-error'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { errorCatch } from 'api/api.helpers'
import { AxiosError } from 'axios'
import { toastr } from 'react-redux-toastr'
import { IAuthResponse, iEmailPassword } from './user.interface'

export const register = createAsyncThunk<IAuthResponse, iEmailPassword>(
	'auth/register',
	async ({ email, password }, thunkAPI) => {
		try {
			const response = await AuthService.register(email, password)
			toastr.success('Registration', 'Completed successfully')
			return response.data
		} catch (error) {
			toastError(error)
			return thunkAPI.rejectWithValue(error)
		}
	}
)

export const login = createAsyncThunk<IAuthResponse, iEmailPassword>(
	'auth/login',
	async ({ email, password }, thunkAPI) => {
		try {
			const response = await AuthService.login(email, password)
			toastr.success('Login', 'Completed successfully')
			return response.data
		} catch (error) {
			toastError(error)
			return thunkAPI.rejectWithValue(error)
		}
	}
)

export const logout = createAsyncThunk('auth/logout', async () => {
	await AuthService.logout()
})

export const checkAuth = createAsyncThunk<IAuthResponse>(
	'auth/check-auth',
	async (_, thunkAPI) => {
		try {
			const response = await AuthService.getNewTokens()
			return response.data
		} catch (error: unknown) {
			const axiosError = error as AxiosError<{ message?: string | string[] }>
			const errorMessage = errorCatch(axiosError)

			if (errorMessage === 'jwt expired') {
				toastr.error(
					'Logout',
					'Your authorization has expired, please sign in again'
				)
				thunkAPI.dispatch(logout())
			}
			return thunkAPI.rejectWithValue(error)
		}
	}
)
