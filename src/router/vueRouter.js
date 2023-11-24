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
				path: '/vueRouter/Mustache',
				name: 'Mustache',
				component: () => import('@/views/VueRouter/Mustache'),
				children: [
					{
						path: '/vueRouter/Home',
						name: '12345',
						component: () => import('@/views/VueRouter')
					},
					{
						path: '/vueRouter/Home',
						name: '6789',
						component: () => import('@/views/VueRouter'),
					}
				]
			},
		],
	},
]


export default Router