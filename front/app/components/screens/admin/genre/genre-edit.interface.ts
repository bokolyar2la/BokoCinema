import { IGenre } from '@/shared/types/movie.types'

export type IGenreEditInput = Omit<IGenre, '_id'>
