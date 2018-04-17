<template>
	<div style="background:#f5f5f5;height:100%;">
		<myheader></myheader>
		<div class="cell-wrap">
			<router-link to="/my/redbag">
				<cell title="红包">
					<img class="icon" src="../assets/img/redbags1.png" width="14">
				</cell>
			</router-link>
			<cell title="幸运记录">
				<img class="icon" src="../assets/img/personal_record.png" width="15">
			</cell>
			<cell title="购买记录">
				<img class="icon" src="../assets/img/personal_buy_record.png" width="15">
			</cell>
			<cell title="充值记录">
				<img class="icon" src="../assets/img/personal_reload_record.png" width="15">
			</cell>
		</div>
		
	</div>
</template>

<script>
	import myheader from "./my/MyHeader.vue"
	import cell from "./my/Cell.vue"
	export default {
		name:'My',
		components:{
			
			myheader,cell
		},
		data(){
			return {

			}
		}
	}
</script>
<style scoped>
.cell-wrap{
	margin-top: 20px;
}
.icon{position: absolute; left:15px; top:9px;}
</style>