<template>
  <footer>
    <div class="xm-footer">
      <router-link to="/home" tag="li"><i class="xm-icon icon_1"></i><span>夺宝大厅</span></router-link>
      <router-link to="/cat" tag="li"><i class="xm-icon icon_2"></i><span>分类</span></router-link>
     <router-link to="/cart" tag="li" id="shopcart"><em v-if="this.cartnum!=0">{{cartnum}}</em><i class="xm-icon icon_3"></i><span>购物车</span></router-link>
     <router-link to="/my" tag="li"> <i class="xm-icon icon_4"></i><span>我的</span></router-link>
    </div>
</footer>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  name: 'FooterNav',
  computed:mapGetters([
    'cartnum'
  ]),
  data () {
    return {
      msg: ''
    }
  },
}

</script>

<style scoped>
footer{position: fixed; bottom:0px; background: #fff; z-index: 99; }
.xm-footer{width: 320px; height: 36px; border-top:0.5px solid #F2F2F2; background: #fff;}
.xm-footer>li{float: left; width:25%;height:100%; text-align: center; font-size: 8px; color: #9b9b9b;line-height:16px;}
.xm-footer .xm-icon{ margin-left:32px; margin-top:6px; margin-bottom:1px; display: block;}
.xm-footer .icon_1{width: 15px; height: 13px; background:url(../assets/img/bar_dating_01.png) no-repeat;background-size:contain;}
.xm-footer .icon_2{width: 17px; height: 14px; background:url(../assets/img/bar_fenlei_01.png) no-repeat;background-size:contain;position:relative;}
.xm-footer .icon_3{width: 17px; height: 14px; background:url(../assets/img/bar_qingdan_01.png) no-repeat;background-size:contain;position:relative; margin-left: 30px;margin-top:6px;}
.xm-footer .icon_4{width: 13px; height: 14px; background:url(../assets/img/bar_wode_01.png) no-repeat;background-size:contain;position:relative;margin-left: 34px; margin-top:6px;}
.xm-footer .router-link-active .icon_1{background:url(../assets/img/bar_dating_02.png) no-repeat;background-size:contain;}

.xm-footer .router-link-active .icon_2{background:url(../assets/img/bar_fenlei_02.png) no-repeat;background-size:contain;}
.xm-footer .router-link-active .icon_3{background:url(../assets/img/bar_qingdan_02.png) no-repeat;background-size:contain;margin-left: 30px;}
.xm-footer .router-link-active .icon_4{background:url(../assets/img/bar_wode_02.png) no-repeat;background-size:contain;}

.xm-footer .icon_3 strong{position:absolute;width:11px;height:11px;background:#F06060;border-radius:50%;color:#fff;font-size:7px;right:-8px;top:-3px;line-height:11px;text-align:center;}
.xm-footer .icon_4 strong{position:absolute;width:6px;height:6px;background:#F06060;border-radius:50%;right:0px;top:0px;}
.xm-footer .router-link-active{color: #F06060;}
.di{width:100%; height: 70px; background:#FFFFFF; }
#shopcart em{position: absolute;top:0px;width: 14px;height: 14px;background: #F06060;font-size: 6px;border-radius: 50%;color: #fff;line-height: 12px;font-style:normal;}
</style>
