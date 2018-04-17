<template>
	<div>
		<topbar title="商品分类">
			<span></span>
		</topbar>
		<ordernav></ordernav>
		<verticalnav></verticalnav>
		<div class="fr" style="background: #F5F5F5;">
			<catgoodslist></catgoodslist>
		</div>
		
	</div>
</template>

<script>
	import topbar from "./common/TopBar.vue"
	import ordernav from "./common/OrderNav.vue"
	import verticalnav from "./cat/VerticalNav.vue"
	import catgoodslist from "./cat/CatGoodsList.vue"
	
	export default {
		name:'Cat',
		components:{
			topbar,ordernav,verticalnav,catgoodslist
		},
		data(){
			return {

			}
		}
	}
</script>
<style scoped>
	
</style>