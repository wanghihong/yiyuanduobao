<template>
	<div class="xm-header">
		<i class="goback" v-if="show"  @click="goback"></i>
	    <span>{{title}}</span>
	    <div class="right-text">
	    	<slot></slot>
	    </div>
	</div>	
</template>
<script>
	export default{
		name:'TopBar',
		props:['title','show'],
		methods:{
			goback(){
				window.history.back();
			}
		}
	}
</script>
<style scoped>
	.xm-header{width: 320px; height:40px; line-height: 44px; background: #fff; text-align: center; position: relative; border-bottom:0.5px solid #e9e9e9;
		font-size: 14px;}
	.right-text{
		position: absolute;
		right: 20px;
		top:0px;
		font-size: 10px;
	}
	.goback{ border: solid; border-width: 0 0 1px 1px; width:6px;height:6px; transform: rotate(45deg); position: absolute;left: 18px;top:18px;}
</style>