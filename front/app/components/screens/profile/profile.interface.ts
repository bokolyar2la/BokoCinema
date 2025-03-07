import { IUser } from '@/shared/types/user.types'

export type IProfileInput = Pick<IUser, 'email' | 'password'>
