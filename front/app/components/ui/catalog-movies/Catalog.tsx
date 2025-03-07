import { FC } from 'react'

import { Meta } from '@/utils/meta/Meta'
import { getMovieUrl } from 'config/url.config'
import GalleryItem from '../gallery/GalleryItem'
import Description from '../heading/Description'
import Heading from '../heading/Heading'
import styles from './Catalog.module.scss'
import { ICatalog } from './catalog.interface'

const Catalog: FC<ICatalog> = ({ movies, description, title }) => {
	return (
		<Meta title={title} description={description}>
			<Heading title={title} className={styles.heading} />

			{description && (
				<Description text={description} className={styles.description} />
			)}

			<section className={styles.movies}>
				{movies.map((movie) => (
					<GalleryItem
						key={movie._id}
						variant="horizontal"
						item={{
							name: movie.title,
							posterPath: movie.bigPoster,
							link: getMovieUrl(movie.slug),
							content: {
								title: movie.title,
							},
						}}
					/>
				))}
			</section>

			{/* <div className="text-center">
				<button className={styles.button}>Load more</button>
			</div> */}
		</Meta>
	)
}

export default Catalog
