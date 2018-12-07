import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import home from '@/components/home/home'
import cat from '@/components/cat/cat'
import shopcar from '@/components/shopcar/shopcar'
import user from '@/components/user/user'
import selmain from '@/components/selmain/selmain'
Vue.use(Router)

export default new Router({
  routes: [
		{
			path: '/',
			redirect: "/home"
		},
		{
			path: '/home',
			name: 'home',
			component: home
		},
		{
			path: '/cat',
			name: 'cat',
			component: cat
		},
		{
			path: '/shopcar',
			name: 'shopcar',
			component: shopcar
		},
		{
			path: '/user',
			name: 'user',
			component: user
		},
		{
			path: '/selmain',
			name: 'selmain',
			component: selmain
		}
  ]
})
