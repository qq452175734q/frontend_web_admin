import Vue from 'vue'
import VueRouter from 'vue-router'

// 解决ElementUI导航栏中的vue-router在3.0版本以上重复点菜单报错问题
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('views/login/Login')
  },
  {
    path: '/',
    name: 'Container',
    component: () => import('components/context/container/Container'),
		children:[
			{
				path: '/dashboard',
				name: 'Dashboard',
				component: () => import('views/dashboard/Dashboard'),
			}
		]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
