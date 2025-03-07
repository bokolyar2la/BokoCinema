import Image from 'next/image'
import { FC } from 'react'
import { ICollection } from './collections.interface'
import styles from './Collections.module.scss'

const CollectionImage: FC<{ collection: ICollection }> = ({ collection }) => {
	if (
		!collection.image ||
		(!collection.image.startsWith('http') && !collection.image.startsWith('/'))
	) {
		return null
	}

	return (
		<div className={styles.imageContainer}>
			<Image
				alt={collection.title}
				src={collection.image}
				fill
				className={styles.image}
				draggable={false}
				priority
			/>
		</div>
	)
}

export default CollectionImage
