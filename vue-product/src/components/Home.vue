<template>
	<div>
		<swiper></swiper>
		<mainnav></mainnav>
		<notice></notice>
		<div class="index-order">
			<ordernav @change="tabnav"></ordernav>
			<div class="clear" style="padding-bottom:50px;">
				<goodslist :items="orderData"></goodslist>
			</div>
		</div>
	</div>
</template>
<script>
	import swiper from './common/swiper.vue'
	import mainnav from './index/MainNav.vue'
	import notice from './index/Notice.vue'
	import ordernav from './common/OrderNav.vue'
	import goodslist from './index/GoodsList.vue'
	export default {
		name:'Home',
		components:{
			swiper,mainnav,notice,ordernav,goodslist
		},
		data(){
			return {
				orderData:{},
				text:"",
			}
		},
		mounted(){
			this.getData("最快");
		},
		methods:{
			tabnav(w){
				this.text = w.way;
				this.getData(this.text)
			},
			getData(con){
				var _this = this;
				this.$http.get('http://localhost:8080/../static/data/goodsorders.data').then(function(res){
					if(con == "最快"){
						_this.orderData = res.data.fastest;
					}else if(con == "最热") {
						_this.orderData = res.data.hottest;
					}
				}).catch(function(err){
					console.log(err);
				});
			},
		},
	}
</script>