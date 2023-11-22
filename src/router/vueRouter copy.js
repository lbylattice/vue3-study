import layout from '@/layout'

const Router = [
	{
		name: 'layout',
		path: '/vueRouter',
		component: layout,
		children: [{
			path: '/Mustache',
			name: 'Mustache',
			component: () => import('@/views/Mustache'),
		}]
	},
]


export default Router