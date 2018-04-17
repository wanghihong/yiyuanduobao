<template>
	<div>
		<div class="xm-goods fl" v-for="(item, index) in items">
			<div class="xm-goods-img" >
				<router-link :to="{path: '/detail', query: {id: item.id}}">
				
					<img class="goodsimg" src="../../assets/img/p_02.png"/>
			    </router-link>
			</div>
			<p class="p0">{{item.title}}</p></a>
			<div class="announced-progress">
				<p class="p1">揭晓进度<em>{{Math.round(item.buynum/item.total*100)}}%</em></p>
				<div class="w_line x_new_line" id="bar" style="margin-top: 0px;">
				 	<span :style="{width: Math.round(item.buynum/item.total*100) +'%'}" id="toral"></span>
				</div>	
				<div class="heart-wrap" @click="addtocart(index)">
		           <img src="../../assets/img/cart.png" class="heart1"/>
	        	</div>
	        </div>
		</div>
	</div>
</template>
<script>
	import  para from '../../assets/js/parabola.js'
	import {mapGetters,mapActions} from 'vuex'
	export default {
		name:'GoodsList',
		props:['items'],
		computed:mapGetters([
	    'cartnum'
	  ]),
		methods:{
			addtocart(i){
				this.$store.dispatch("addtocart");
				var oImgs = document.getElementsByClassName('xm-goods')[i];
				var oimg = oImgs.getElementsByTagName('img')[0];
				var imgcopy = oimg.cloneNode();
				oImgs.appendChild(imgcopy);
				imgcopy.style.zIndex = 999;
				imgcopy.style.width = 50+'px';
				imgcopy.style.height = 50+'px';
				var element = imgcopy,
	             target = document.getElementById("shopcart");
				// 抛物线元素的的位置标记
				var parabola = para.funParabola(element, target,{
					speed: 300,
    				curvature: 0.002,
    				progress: function() {
    					element.style.width = 50 +'px';
    				},
					 complete: function() {
				        element.style.visibility = "hidden";
				    }
					}).mark();
					 element.style.marginLeft = "0px";
					 element.style.marginTop = "0px";
					 parabola.init();
				},
				addcart(){
					
				}
			}	
	}

</script>
<style scoped>
.xm-goods{width: 159px; height: 182px;position: relative; border-right: 0.5px solid #F2F2F2; border-bottom:0.5px solid #f2f2f2;}
.xm-goods-img{width: 100px; height: 100px;  padding:10px 30px;position: relative; }
.goodsimg{width: 100px;height: 100px; vertical-align:middle;  background-size: cover;position: absolute;left:30px;top:10px;}
.xm-goods .p0{color: #161616;font-size: 9px; text-overflow: ellipsis; overflow: hidden; width: 140px; height:28px; line-height: 14px;padding-left:10px;}
.xm-goods .p1{color: #9b9b9b; font-size: 8px;padding-left:10px;margin-top:5px;}
.xm-goods em{color: #F06060; margin-left:3px; font-weight: bold; font-size:10px;}
.xm-goods .announced-progress{ position: relative;}
/*进度条*/
.w_line {width: 108px;background:#E9E9E9;height:4px;margin-left:10px; }
.w_line span {background:#F06060;height:4px;display:block;width:108px;margin-top:3px;}
.x_new_line {border-radius:100px;}
.x_new_line span {background: #F06060 none repeat scroll 0 0;border-radius:100px;}
/*爱心*/
 .heart-wrap{width:20px; height:18px;position: absolute; right:10px; bottom:0px; background-size:cover; z-index: 1;cursor: pointer;}
 .heart-wrap .img{width:30px; height:30px;}
 .heart-wrap .heart1{width:20px; height: 18px;}
</style>