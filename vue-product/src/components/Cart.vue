<template>
	<div style="background:#F5F5F5;height:100%;">
		<topbar title ="购物车">
			<span>编辑</span>
		</topbar>
		<empty v-if="cartData.length==0"></empty>
		<cartgoodslist :cartdata="cartData"></cartgoodslist>
	</div>
</template>

<script>
	import topbar from "./common/TopBar.vue"
	import empty from "./cart/Empty.vue"
	import cartgoodslist from "./cart/CartGoodsList.vue"
	export default {
		name:'Cart',
		components:{topbar,empty,cartgoodslist},
		data(){
			return {
				cartData:[],
			}
		},
		mounted(){
			this.getData();
			
		},
		methods:{
			getData(){
				var _this = this;
				this.$http.get('http://localhost:8080/../static/data/cart.data').then(function(res){
					_this.cartData = res.data.data;

				}).catch(function(err){
					console.log(err);
				});
			},
		}
		
	}
</script>
<style scoped>
	
</style>