import { FC } from 'react'
import StarRating from 'react-star-rating-component'

import { useAuth } from '@/hooks/useAuth'

import AuthButton from '@/components/ui/video-player/AuthPlaceHolder/AuthButton'
import styles from './RateMovie.module.scss'
import { useRateMovie } from './useRateMovie'
interface IRateMovie {
	_id: string
	slug: string
}

const RateMovie: FC<IRateMovie> = ({ _id, slug }) => {
	const { user } = useAuth()

	const { handleClick, isSended, rating } = useRateMovie(_id)

	return (
		<div className={styles.wrapper}>
			<h3>How do you like the movie?</h3>
			<p>Ratings improve recommendations</p>
			{user ? (
				<>
					{isSended ? (
						<div className={styles.thanks}>Thanks for rating!</div>
					) : (
						<StarRating
							name="star-rating"
							value={rating}
							onStarClick={handleClick}
							emptyStarColor="#4f4f4f"
						/>
					)}
				</>
			) : (
				<AuthButton slug={slug} />
			)}
		</div>
	)
}

export default RateMovie
