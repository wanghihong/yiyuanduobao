<template>
	<div class="xm-tab">
		<ul class="clear" id="tabbar" @click="change()" >
        	<li class="current">最快</li>
			<li>最热</li>				
			<li style="position:relative;">价格<i class="down00"></i></li>
			<li style="position:relative;">价格<i class="up00"></i></li>
		</ul>
	</div>
</template>
<script>
	export default {
		name:'OrderNav',
		data(){
			return {
				
			}
		},
		methods:{
			change(ev){
				var oul = document.getElementById("tabbar");
				var ali = oul.getElementsByTagName("li");
				var e = ev || window.event;
				if(e.target.nodeName.toLowerCase() === 'li'){
					for(var i=0;i<ali.length;i++){
					  ali[i].className = "";
				    }
					e.target.className = "current";
					this.$emit("change",{way:e.target.innerText});
				}
			}
		}
	}

</script>
<style scoped>
.xm-tab ul{height:42px;border-bottom:1px solid #f2f2f2;}
.xm-tab li{float: left;font-size:11px; color: #000;  line-height: 42px;padding:0 10px;margin: 0px 15px;}
.xm-tab .current{border-bottom:2px solid #F06060; color:#F06060;margin-bottom:-1px;}
.up00{width: 6px; height: 9px; background:url(../../assets/img/up_01.png) no-repeat; background-size:contain ; position: absolute; right:2px; top:18px;}
.xm-tab .current .up00{ background:url(../../assets/img/up_02.png) no-repeat; background-size:contain ; }
.down00{width: 6px; height: 9px; background:url(../../assets/img/down_01.png) no-repeat; background-size:contain; position: absolute; right:2px; top:17px;}
.xm-tab .current .down00{ background:url(../../assets/img/down_02.png) no-repeat; background-size:contain ; }
</style>