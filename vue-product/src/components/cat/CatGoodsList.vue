<template>
 	<div class="xm-goodsqh">
		<div class="xm-div0 clear" v-for="i in 4">
			<a href="info.html">
			<div class="xm-record0-ximg fl">
				<router-link to="/detail"><img src="../../assets/img/1.png"/></router-link>
			</div></a>
			<div class="xm-div0text fl">
				<p class="p0">中国联通 电话充值卡面值30元中国联通 电话充值卡面值30元中国联通 电话充值卡面值30元</p>
				
				<div style="margin-top: 0px; font-size: 9px;">
 				
 				<div class="w_line x_new_line" id="bar">
				 	<span style="width:80%" id="toral"></span>
				</div>		
				<em class="p1">总需 233</em>
				<em class="fr" style="margin-right: 30px;">剩余<i>87</i></em>
			
				<div class="heart-wrap0">
            		<img src="../../assets/img/cart.png" class="heart1"/>
            	</div>
          </div>
      </div>
	</div>
</div>
</template>

<script>
	export default{
		name:'CatGoodsList',
	}
</script>
<style scoped>
.xm-goodsqh{width: 240px; margin:10px;}
.xm-goodsqh .xm-div0{width:240px; height:80px; margin-bottom: 10px; background: #fff; position:relative;}
.xm-record0-ximg img{width: 80px;padding-top: 10px;}
.xm-div0text{width:141px; margin-left: 10px;color:#9B9B9B; font-size: 9px; position: relative; margin-top:10px;}
.xm-div0text .p0{font-size: 10px; color:#161616; text-overflow: ellipsis; overflow: hidden; height: 25px;  line-height:13px; margin-bottom:5px;}
.xm-div0text .p1{font-size: 9px; color: #9B9B9B;}
.xm-div0text i{color: #F06060; margin-left: 3px; font-style: normal; font-weight: bold; font-size:9px; font-family: "微软雅黑";}
.w_line {width:110px;background:#eee;height:4px;margin-top:19px; }
.w_line span {background:#F5CD57;height:4px;display:block;width:100px;margin-top:3px;}
.x_new_line {border-radius:100px;}
.x_new_line span {background: #F06060 none repeat scroll 0 0;border-radius:100px;}
.heart-wrap0{width:20px; height:18px;position: absolute; right:0px; bottom:5px; background-size:cover; z-index: 1;cursor: pointer;}
 .heart-wrap0 .img{width:20px; height:18px;}
 .heart-wrap0 .heart1{width:20px; height:18px;}
</style>