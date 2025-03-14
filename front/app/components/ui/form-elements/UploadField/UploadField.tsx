import cn from 'classnames'
import Image from 'next/image'
import { FC } from 'react'
import { useUpload } from './useUpload'

import SkeletonLoader from '../../SkeletonLoader'
import { IUploadField } from '../form.interface'
import styles from '../form.module.scss'

const UploadField: FC<IUploadField> = ({
	placeholder,
	error,
	style,
	value,
	folder,
	onChange,
	isNoImage = false,
}) => {
	const { uploadFile, isLoading } = useUpload(onChange, folder)

	return (
		<div className={cn(styles.field, styles.uploadField)} style={style}>
			<div className={styles.uploadFlex}>
				<label>
					<span>{placeholder}</span>
					<input type="file" onChange={uploadFile} />
					{error && <div className={styles.error}>{error.message}</div>}
				</label>
				{!isNoImage && (
					<div className={styles.uploadFileContainer}>
						{isLoading ? (
							<SkeletonLoader count={1} className="w-full h-full" />
						) : (
							value && (
								<Image
									src={value.startsWith('http') ? value : '/default-upload.jpg'}
									alt="Uploaded file"
									width={100}
									height={100}
									unoptimized
								/>
							)
						)}
					</div>
				)}
			</div>
		</div>
	)
}

export default UploadField
