<template>
	<li>
		<slot></slot>
		<span>{{title}}</span>
		<i class="xm-go"></i>
	</li>
</template>
<script>

	export default{
		name:'Cell',
		props:['title']

	}
</script>
<style scoped>

li{color: #000; font-size:10px;width:100%; height:35px; line-height: 35px; border-bottom: 0.5px solid #F2F2F2; text-indent:35px; position: relative; display: inline-block;background: #fff;}
li .em{float: right; margin-right: 25px; color: #9B9B9B;}
.xm-go{width: 8px; height: 8px; background: url(../../assets/img/go_next.png) no-repeat;background-size:contain; position: absolute; right:10px; top:13px;}
</style>