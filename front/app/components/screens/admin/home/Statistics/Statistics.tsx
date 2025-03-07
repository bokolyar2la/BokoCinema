import PopularMovies from '@/components/layout/Sidebar/MoviesContainer/PopularMovies'
import { FC } from 'react'
import styles from '../Admin.module.scss'
import CountUsers from './CountUsers'

const Statistics: FC = () => {
	return (
		<div className={styles.statistics}>
			<CountUsers />
			<PopularMovies />
		</div>
	)
}

export default Statistics
