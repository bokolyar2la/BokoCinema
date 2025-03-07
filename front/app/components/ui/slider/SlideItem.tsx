import Image from 'next/image'
import { useRouter } from 'next/router'
import { FC } from 'react'

import styles from './Slider.module.scss'
import { ISlide } from './slider.interface'

interface ISlideItem {
	slide: ISlide
	buttonTitle?: string
}

const SlideItem: FC<ISlideItem> = ({ slide, buttonTitle = 'Watch' }) => {
	const { push } = useRouter()

	if (!slide || !slide.bigPoster) {
		console.error('Invalid slide data:', slide)
		return null
	}

	return (
		<div className={styles.slide}>
			<Image
				fill
				className={styles.image}
				src={slide.bigPoster}
				alt={slide.title}
				draggable={false}
				priority
			/>

			<div className={styles.content}>
				<div className={styles.heading}>{slide.title}</div>
				<div className={styles.subHeading}>{slide.subTitle}</div>
				<button className={styles.button} onClick={() => push(slide.link)}>
					{buttonTitle}
				</button>
			</div>
		</div>
	)
}

export default SlideItem
