import { IActor } from '@/shared/types/movie.types'

export type IActorEditInput = Omit<IActor, '_id' | 'countMovies'>
