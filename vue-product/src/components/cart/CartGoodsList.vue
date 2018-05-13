<template>
	<div style="padding:10px 0;">
		<div class="xm-category0" v-for="item in cartdata">
			<div class="fl imgwrap"><img src="../../assets/img/p_01.png"/></div>
			<div class="xm-category0-text fl clear">
				<p class="p0">{{item.title}}</p>
				<p class="p1" id="rest">总需 {{item.total}}
					<span class="fr">剩余 <em style="color: #ED4F12;">{{item.surplus}}</em></span>
				</p>
				<div style="position:relative;">
					<counter :num="item.num"></counter>
					<span class="whole">包尾</span>
				</div>
			</div>
	    </div>
	</div>
</template>
<script>
	import counter from '../common/Counter.vue'
	export default{
		name:'CartGoodsList',
		props:['cartdata'],
		components:{
			counter
		}
	}
</script>
<style scoped>
.xm-category0{width: 320px; height: 90px; margin-bottom: 10px; background:#fff; position: relative;}
.xm-category0 .imgwrap{width: 90px; height: 90px;text-align:center;}
.xm-category0 .gray{-webkit-filter: grayscale(100%);-moz-filter: grayscale(100%);-ms-filter: grayscale(100%);-o-filter: grayscale(100%);filter: grayscale(100%);filter: gray;}
.xm-category0 img{width: 60px; height: 60px;}
.xm-category0 .xm-category0-text{width:210px; margin:10px 0px 0px 10px; position: relative;}
.xm-category0 .xm-category0-text .p0{text-overflow: ellipsis; overflow: hidden;font-size:10px; color: #161616; white-space: nowrap;}
.xm-category0 .xm-category0-text .p1{font-size:8px; color: #9B9B9B; margin-top: 5px;}
.xm-category0 .xm-category0-text .p1 i{color: #000;font-size: 10px;}
.xm-category0 .xm-category0-text .p1 em{color: #000;font-size: 10px;}
.xm-category0 span{color: #9B9B9B;}

.whole{width:62px; height: 24px; border:0.5px solid #F06060; color: #F06060!important; border-radius: 2px; display: block; font-size: 10px; line-height: 24px; text-align: center; position: absolute; right: 0px; bottom:0px;}
</style>