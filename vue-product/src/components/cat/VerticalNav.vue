<template>
 	<div class="xm-goodslist fl">
 		<ul @click="tab" id="listwrap">
 			<li class="current0">黄金</li>
			<li>手机</li>
			<li>数码</li>
			<li>汽车</li>
 		</ul>
 	</div>
</template>
<script>
	export default{
		name:'VerticalNav',
		methods:{
			tab(ev){
				var oul = document.getElementById("listwrap");
				var ali = oul.getElementsByTagName("li");
				var e = ev || window.event;
				if(e.target.nodeName.toLowerCase() === 'li'){
					for(var i=0;i<ali.length;i++){
					  ali[i].className = "";
				    }
					e.target.className = "current0";
				}

			}
		}
	}
</script>
<style scoped>
.xm-goodslist{width:60px; height:auto; min-height: 450px; background: #fff;}
.xm-goodslist li{color: #4A4A4A; font-size: 11px;width:60px; height: 40px; line-height: 40px; text-align: center; }
.xm-goodslist .current0{background: #F5F5F5;}
</style>