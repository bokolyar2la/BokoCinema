import dynamic from 'next/dynamic'
import { FC } from 'react'
import PopularMovies from './PopularMovies'

const FavoriteMovies = dynamic(
	() => import('./FavoriteMovies/FavoriteMovies'),
	{
		ssr: false,
	}
)

const MoviesContainer: FC = () => {
	return (
		<div>
			<PopularMovies />
			<FavoriteMovies />
		</div>
	)
}

export default MoviesContainer
