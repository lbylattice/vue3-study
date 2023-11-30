import layout from '@/layout'

const Router = [
	{
		name: 'layout',
		path: '/element',
		component: layout,
		children: [
			{
				path: '/element/autocomplete',
				name: 'autocomplete',
				component: () => import('@/views/Element/Autocomplete'),
			},

			// {
			// 	path: '/element/dynamic',
			// 	name: 'elementDynamic',
			// 	children: [
			// 		{
			// 			path: '/element/dynamic/home',
			// 			name: 'DynamicHome',
			// 			component: () => import('@/views/element/Dynamic'),
			// 		},
			// 		{
			// 			path: '/element/dynamic/:case',
			// 			name: 'case one',
			// 			component: () => import('@/views/element/Dynamic/CaseOne')
			// 		},
			// 	]
			// },
			// {
			// 	path: '/element/setup',
			// 	name: 'setup',
			// 	children: [
			// 		{
			// 			path: '/element/setup/home',
			// 			name: 'setuphome',
			// 			component: () => import('@/views/element/Setup'),
			// 		},
			// 	]
			// },
			// {
			// 	path: '/element/Scorll',
			// 	name: 'Scorll',
			// 	component: () => import('@/views/element/Scorll'),
			// 	children: [
			// 		{
			// 			path: '/element/Scorll/home',
			// 			name: 'home',
			// 			component: () => import('@/views/element/Scorll')
			// 		},
			// 		{
			// 			path: '/element/Scorll',
			// 			name: '6789',
			// 			component: () => import('@/views/element/Scorll'),
			// 		}
			// 	]
			// },
		],
	},
]


export default Router