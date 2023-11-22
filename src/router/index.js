import { createRouter, createWebHistory } from 'vue-router'
const files = require.context('.', true, /\.js$/)
// import layout from '@/layout'


const staticRoutes = [
	{
		path: '/Login',
		name: 'Login',
		component: () => import('@/views/Login'),
		meta: {
			requiresAuth: true
		}
	},
	{
		path: '/Home',
		name: 'Home',
		component: () => import('@/views/Home'),
	},
	{
		path: '/',
		redirect: 'Home'
	},
	// {
	// 	name: 'layout',
	// 	path: '/vueRouter',
	// 	component: layout,
	// },
];

(() => {
	files.keys().forEach(key => {
		const skipModule = ['./index.js']
		if (skipModule.includes(key)) return
		const addRouters = files(key).default
		staticRoutes.push(addRouters)

		console.log('staticRoutes:', staticRoutes);
	})
})()

// 路由配置
const router = createRouter({
	history: createWebHistory('/demo/'),
	routes: staticRoutes,
	scrollBehavior: () => ({ y: 0 }),
});
console.log(router);


router.beforeEach((to, from, next) => {
	if (to.path === '/Login') {
		next()
	}
	else {
		if (sessionStorage.getItem('token')) {
			next()
		}
		else {
			next({ path: '/Login' })
		}
	}
})

export default router