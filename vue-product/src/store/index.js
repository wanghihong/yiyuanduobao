import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);

const state={
	show:true,
	cartnum:0,
}
const mutations={
	// increment(state){
	// 	state.num += 1;
	// },
	// decrement(state){
	// 	state.num -= 1;
	// 	if(state.num <= 1){
	// 		state.num = 1;
	// 	}
	// },
	showFooter(state){
		state.show = true;
	},
	hideFooter(state){
		state.show = false;
	},
	addtocart(state){
		state.cartnum += 1;
		
	}
}
const actions = {
	showFooter:({commit})=>commit('showFooter'),
	hideFooter:({commit})=>commit('hideFooter'),
	addtocart:({commit})=>commit('addtocart')
}
const getters = {
	
	show:state=>state.show,
	cartnum:state=>state.cartnum
}
export default new Vuex.Store({
	state,mutations,getters,actions
})