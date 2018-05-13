<template>
	<div class="nav-list clear">		
		<a href="bingo.html" class="nav-list-0 fl">
			<i id="lm"><img src="../../assets/img/icon_last.png"/></i>
			<p>最新揭晓</p>
		</a>
		<a href="share.html" class="nav-list-0 fl">
			<i id="rp"><img src="../../assets/img/icon_share.png"/></i>
			<p>晒宝分享</p>
		</a>
		<a href="find.html" class="nav-list-0 fl">
			<i id="pp"><img src="../../assets/img/icon_find.png"/></i>
			<p>发现夺宝</p>
		</a>
		<a href="find2.html" class="nav-list-0 fl">
			<i id="pp"><img src="../../assets/img/icon_help.png"/></i>
			<p>常见问题</p>
		</a>
	</div>
</template>
<script>
	export default {
		name:'MainNav',

	}
</script>
<style scoped>
.nav-list {width: 320px; height:55px; background: white; padding-bottom:10px;}
.nav-list .nav-list-0:active{background:#f9f9f9;}
.nav-list .nav-list-0{width:25%; height: 100%; line-height: 100%; display: block; text-align: center; padding-bottom:10px;}
.nav-list .nav-list-0:last-child{border-right:none ;}
.nav-list .nav-list-0 i{ display:block;border-radius:50%;
margin:3px auto 0px;line-height:38px;}
.nav-list-0 #lm img{width:30px;height:30px;vertical-align:middle;}
.nav-list-0 #rp img{width:30px;height:30px;vertical-align:middle;}
.nav-list-0 #pp img{width:30px;height:30px;vertical-align:middle;}
.nav-list .nav-list-0 p{ font-size: 8px;  color:#4a4a4a; }
</style>