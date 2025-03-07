import { IMovie } from '@/shared/types/movie.types'
import { getMovieUrl } from 'config/url.config'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'
import styles from './SearchList.module.scss'

const SearchList: FC<{ movies: IMovie[] }> = ({ movies }) => {
	return (
		<div className={styles.list}>
			{movies.length ? (
				movies.map((movie) => (
					<Link
						key={movie._id}
						href={getMovieUrl(movie.slug)}
						className={styles.movieItem}
					>
						<Image
							src={movie.poster}
							width={50}
							height={50}
							alt={movie.title}
							draggable={false}
							className="object-cover object-top"
						/>
						<span className="ml-3 text-gray-300">{movie.title}</span>
					</Link>
				))
			) : (
				<div className="text-white text-center my-4">Movies not found!</div>
			)}
		</div>
	)
}

export default SearchList
