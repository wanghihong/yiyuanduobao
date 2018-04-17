<template>
	<div class="img-slide">
		<mt-swipe :auto="4000">
		  <mt-swipe-item><img src="../../assets/img/turn_01.jpg" /></mt-swipe-item>
		  <mt-swipe-item><img src="../../assets/img/turn_02.jpg" /></mt-swipe-item>
		  <mt-swipe-item><img src="../../assets/img/turn_03.jpg" /></mt-swipe-item>
		</mt-swipe>
	</div>
	
</template>
<script>
	import { Swipe, SwipeItem } from 'mint-ui';

	
	export default{
		name:'swiper',
		components:{
			
			[SwipeItem.name]:SwipeItem, [Swipe.name]:Swipe
		}
	}
</script>
<style>
	.img-slide{height: 150px;}
	.img-slide img{
		width: 320px;
		height: 150px;
	}
</style>