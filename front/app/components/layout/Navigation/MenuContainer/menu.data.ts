import { IMenu } from './menu.interface'

export const firstMenu: IMenu = {
	title: 'Menu',
	items: [
		{
			icon: 'MdHome',
			link: '/',
			title: 'Home',
		},
		{
			icon: 'MdOutlineExplore',
			link: '/genres',
			title: 'Discovery',
		},
		{
			icon: 'MdCached',
			link: '/fresh',
			title: 'Fresh movies',
		},
		{
			icon: 'MdWhatshot',
			link: '/trending',
			title: 'Trending now',
		},
	],
}

export const userMenu: IMenu = {
	title: 'General',
	items: [],
}
