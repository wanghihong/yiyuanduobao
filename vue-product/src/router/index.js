
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import home from '../components/Home.vue'
import cat from '../components/Cat.vue'
import cart from '../components/Cart.vue'
import my from '../components/My.vue'
import redbag from '../components/my/RedBag.vue'
import detail from '../components/Detail.vue'

export default new Router({
	mode: 'history',
	routes:[
		{ path: '/',
		  redirect: '/home'
		},{
			path:'/home',
			component:home
		},{
			path:'/cat',
			component:cat
		},{
			path:'/cart',
			component:cart
		},{
			path:'/my',
			component:my,
			
		},{
			path:'/detail',
			component:detail
		},
		 { path: '/my/redbag',
		  component: redbag 
		}
	]

})

