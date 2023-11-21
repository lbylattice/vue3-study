

import { createRouter, createWebHistory } from 'vue-router'
import layout from '@/layout'

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
		component: layout
		// children: {}
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
	{ path: '/Mustache', component: () => import('@/views/Mustache') }
	// { path: '/about', component: About },
]
const systemRoutes = []

// 路由配置
const router = createRouter({
	history: createWebHistory('/demo/'),
	routes: staticRoutes.concat(systemRoutes),
	scrollBehavior: () => ({
		y: 0
	}),// 当跳到新的页面的时候 自动跳到该页面的顶部
})


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