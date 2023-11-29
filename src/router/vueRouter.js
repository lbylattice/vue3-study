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
				path: '',
				name: 'VueRouterDynamic',
				children: [
					{
						path: '/vueRouter/dynamic/home',
						name: 'home',
						component: () => import('@/views/VueRouter/Dynamic'),
					},
					{
						path: '/vueRouter/dynamic/:case',
						name: 'case one',
						component: () => import('@/views/VueRouter/Dynamic/CaseOne')
					},
					// {
					// 	path: '/vueRouter/dynamic/CaseTwo',
					// 	name: 'case two',
					// 	component: () => import('@/views/VueRouter/Dynamic/CaseTwo'),
					// }
				]
			},
			{
				path: '/vueRouter/Mustache',
				name: 'Mustache',
				component: () => import('@/views/VueRouter/Mustache'),
				children: [
					{
						path: '/vueRouter/xxx',
						name: '12345',
						component: () => import('@/views/VueRouter')
					},
					{
						path: '/vueRouter/yyy',
						name: '6789',
						component: () => import('@/views/VueRouter'),
					}
				]
			},
		],
	},
]


export default Router