import Catalog from '@/components/ui/catalog-movies/Catalog'
import { MovieService } from '@/services/movie.service'
import { IMovie } from '@/shared/types/movie.types'
import { GetStaticProps, NextPage } from 'next'

const FreshPage: NextPage<{ movies: IMovie[] }> = ({ movies }) => {
	return (
		<Catalog
			movies={movies || []}
			title="Fresh movies"
			description="New movies and series in excellent quality: legal, safe, without ads"
		/>
	)
}

export const getStaticProps: GetStaticProps = async () => {
	try {
		const { data: movies } = await MovieService.getAll()

		return {
			props: { movies },
			revalidate: 60,
		}
	} catch (error) {
		console.error('Error fetching movies:', error)

		return {
			notFound: true,
		}
	}
}

export default FreshPage
