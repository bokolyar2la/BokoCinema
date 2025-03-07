import MaterialIcon from '@/components/ui/MaterialIcon'
import cn from 'classnames'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { FC } from 'react'
import { IMenuItem } from './menu.interface'
import styles from './Menu.module.scss'

const MenuItem: FC<{ item: IMenuItem }> = ({ item }) => {
	const { asPath } = useRouter()
	const isActive = asPath === item.link

	return (
		<li className={cn(styles.menuItem, { [styles.active]: isActive })}>
			<Link href={item.link}>
				<div className={styles.link}>
					<MaterialIcon
						name={item.icon}
						className={cn(styles.icon, { [styles.activeIcon]: isActive })}
					/>
					<span
						className={cn(styles.title, { [styles.activeTitle]: isActive })}
					>
						{item.title}
					</span>
				</div>
			</Link>
		</li>
	)
}

export default MenuItem
