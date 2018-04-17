<template>
	<div class="xm-personal">
		<a class="fl" href="personallist.html"><img src="../../assets/img/head_01.png" /></a>
		<div class="xm-category0-text fl">
			<a href="personallist.html">
                <p class="p0">心已伤透钱已欠款</p>
                <p class="p1">ID:1872639</p>
            </a>
          </div>
          <div class="xm-category0-2 fl">
	        <p class="p2 fl">夺宝币： <em>20</em> </p>
			<a href="reload.html"><span>充值</span></a>
		  </div>
	</div>
</template>
<script>
	export default{
		name:'MyHeader',

	}
</script>
<style scoped>
.xm-personal{ height:88px; background: #F06060; position: relative;}
.xm-personal img{width:44px; height: 44px; border:2px solid #fff; margin:20px 0px 0px 20px; border-radius: 50%; background: #FAFAFA; position: relative; z-index: 2;}
.xm-personal .xm-category0-text{width:205px; margin:20px 0px 0px 20px; position: relative;}
.xm-personal .xm-category0-text .p0{text-overflow: ellipsis; overflow: hidden; white-space: nowrap;font-size: 14px; color: #fff; }
.xm-personal .xm-category0-text .p1{font-size: 10px; color: #fff; margin-top: 2px;}
.xm-category0-2{width: 100%; height:30px; background: rgba(101,0,0,0.30); position: absolute; bottom: 0px; left: 0px; z-index: 1; line-height: 30px;}
.xm-category0-2  .p2{font-size: 8px; color: #fdd3d3; margin-left:86px;}
.xm-category0-2  .p2 em{color: #fff; font-weight: bold; font-size: 14px;}
.xm-category0-2 span{width:52px; height: 18px; border: 0.5px solid #fff; background:#fff; text-align: center; font-size: 10px; color: #F06060; line-height:18px; display: block; border-radius: 2px; float: right;font-weight: bold; position: absolute; right:10px; top:5px;} 
</style>