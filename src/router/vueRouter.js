import layout from '@/layout'

const Router = [
	{
		name: 'layout',
		path: '/vueRouter',
		component: layout,
		children: [
			{
				path: '/vueRouter/Home',
				name: 'VueRouterHome',
				component: () => import('@/views/VueRouter'),
			},
			{
				path: '/vueRouter/dynamic',
				name: 'VueRouterDynamic',
				children: [
					{
						path: '/vueRouter/dynamic/home',
						name: 'DynamicHome',
						component: () => import('@/views/VueRouter/Dynamic'),
					},
					{
						path: '/vueRouter/dynamic/:case',
						name: 'case one',
						component: () => import('@/views/VueRouter/Dynamic/CaseOne')
					},
				]
			},
			{
				path: '/vueRouter/setup',
				name: 'setup',
				children: [
					{
						path: '/vueRouter/setup/home',
						name: 'setuphome',
						component: () => import('@/views/VueRouter/Setup'),
					},
				]
			},
			{
				path: '/vueRouter/Scorll',
				name: 'Scorll',
				component: () => import('@/views/VueRouter/Scorll'),
				children: [
					{
						path: '/vueRouter/Scorll/home',
						name: 'home',
						component: () => import('@/views/VueRouter/Scorll')
					},
					{
						path: '/vueRouter/Scorll',
						name: '6789',
						component: () => import('@/views/VueRouter/Scorll'),
					}
				]
			},
		],
	},
]


export default Router