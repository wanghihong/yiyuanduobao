<template>
	<topbar title ="商品详情" :show="true">
		<span>编辑</span>
	</topbar>
</template>
<script>
import topbar from "./common/TopBar.vue"
	export default{
		name:'Detail',
		components:{
			topbar,
		},
	}
</script>
<style scoped>
	
</style>