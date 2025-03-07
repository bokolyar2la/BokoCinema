import { IUser } from '@/shared/types/user.types'

export type IUserEditInput = Omit<IUser, '_id' | 'createdAt'>
