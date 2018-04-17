<template>
	<div class="amount">
		<input class="jian" type="button" value="-"  @click="decrement"/> 
		
		<p class="text_box">{{this.counte}}</p>
		<input class="jia_01" type="button" value="+" @click="increment"/>
	</div>
</template>
<script>
	
	export default{
		name:'Counter',
		props:['num'],
		data(){
			return{
				counte:0
			}
		},
		mounted(){
			this.counte = this.num;
		},
		methods:{
			increment(){
				this.counte++;
			},
			decrement(){
				if(this.counte <= 1){
					this.counte = 1;
				}else{
					this.counte--;
				}
				
			}
		}
		
	

		
	}
</script>
<style scoped>
.amount{margin-top:15px;font-size: 10px;height:24px;line-height: 30px;border:0.5px solid #dfdfdf;border-radius: 2px;display: inline-block;margin-right: 6px;}
.jian{display: inline-block;width:27px;height: 24px;text-align: center;background: #F6F6F6;font-size: 18px; border-radius: 2px; border-right:0.5px solid #E7E7E7; color: #9B9B9B;}
.jian:active{background: #EDEDED;}
.text_box{display: inline-block;width:66px;text-align: center;font-size: 14px;}
.jia_01{display: inline-block;width:27px;height:24px;text-align:center;background:#F6F6F6;font-size: 18px; border-radius: 2px;border-left: 0.5px solid #E7E7E7; color: #9B9B9B;}
.jia_01:active{background: #EDEDED;}
</style>