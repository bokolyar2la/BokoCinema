import { errorCatch } from 'api/api.helpers'
import { AxiosError } from 'axios'
import type { GetStaticProps, NextPage } from 'next'

import { IHome } from '@/components/screens/home/home.interface'
import { IGalleryItem } from '@/components/ui/gallery/gallery.interface'
import { ISlide } from '@/components/ui/slider/slider.interface'
import Home from '@/screens/home/Home'
import { ActorService } from '@/services/actor.service'
import { MovieService } from '@/services/movie.service'
import { getGenresList } from '@/utils/movie/getGenresList'
import { getActorUrl, getMovieUrl } from 'config/url.config'

const HomePage: NextPage<IHome> = ({ slides, actors, trendingMovies }) => {
	return (
		<Home slides={slides} actors={actors} trendingMovies={trendingMovies} />
	)
}

export const getStaticProps: GetStaticProps = async () => {
	try {
		const { data: movies } = await MovieService.getAll()
		const { data: dataActors } = await ActorService.getAll()
		const dataTrendingMovies = await MovieService.getMostPopularMovies()

		const slides: ISlide[] = movies.slice(0, 3).map((m) => ({
			_id: m._id,
			link: getMovieUrl(m.slug),
			subTitle: getGenresList(m.genres),
			title: m.title,
			bigPoster: m.bigPoster,
		}))

		const actors: IGalleryItem[] = dataActors.slice(0, 7).map((a) => ({
			name: a.name,
			posterPath: a.photo,
			link: getActorUrl(a.slug),
			content: {
				title: a.name,
				subTitle: `+${a.countMovies} movies`,
			},
		}))

		const trendingMovies: IGalleryItem[] = dataTrendingMovies
			.slice(0, 7)
			.map((m) => ({
				name: m.title,
				posterPath: m.poster,
				link: getMovieUrl(m.slug),
			}))

		return {
			props: {
				actors,
				slides,
				trendingMovies,
			} as IHome,
			revalidate: 60,
		}
	} catch (error: unknown) {
		const axiosError = error as AxiosError<{ message?: string | string[] }>
		console.log(errorCatch(axiosError))

		return {
			props: {
				actors: [],
				slides: [],
				trendingMovies: [],
			} as IHome,
		}
	}
}

export default HomePage
