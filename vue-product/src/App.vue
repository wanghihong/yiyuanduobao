<template>
  <div id="app">
    
     
    <transition>
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </transition>
    <footernav v-show="show"></footernav>
  </div>
</template>

<script>
import footernav from './components/FooterNav.vue'
import {mapGetters} from 'vuex'
export default {
  name: 'App',
  components:{footernav},
  computed:mapGetters([
    'show'
  ]),
  mounted(){
    var path=this.$route.path.substring(1);
       this.showToggel(path);
  },
 watch:{
    '$route'(to){
       var path = to.path.substring(1);
       this.showToggel(path);
    }
  },
  methods:{
    showToggel(path){
        if( path =='home'|| path =='cat' || path =='cart' || path =='my'){
          this.$store.dispatch('showFooter')
        }else{
          this.$store.dispatch('hideFooter')
        }
    }
  }

}

var match,scale,TARGET_WIDTH = 320;
    if (match = navigator.userAgent.match(/Android (\d+\.\d+)/)) {
      scale = window.screen.width / TARGET_WIDTH;
      if (parseFloat(match[1]) < 4.4) {
        document.querySelector('meta[name="viewport"]').setAttribute('content', 'width=' + TARGET_WIDTH + ',initial-scale = ' + scale + ', user-scalable=no');
      } else {
        document.querySelector('meta[name="viewport"]').setAttribute('content', 'width=' + TARGET_WIDTH + ',initial-scale = ' + scale + ', target-densitydpi=device-dpi,user-scalable=no');
      }
    } else {
      document.querySelector('meta[name="viewport"]').setAttribute('content', 'width=' + TARGET_WIDTH+',user-scalable=no');
    }
</script>

<style>
/* CSS public */
html,body,#app{height: 100%;}
body,ul,p,h1,h2,h3,h4,dl,dd,form,input{padding:0;margin:0;  -webkit-tap-highlight-color:rgba(0,0,0,0); }
li{list-style:none;}
img{border:none;vertical-align:top;}
a {
  text-decoration:none;
  -webkit-tap-highlight-color: transparent;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
 color: #000000;
}
i{font-style: normal;}
input,textarea,select,lable{ outline:none; border:none;}
em{font-style:normal;}
table { border-collapse: collapse; }
input { -webkit-appearance : none; }
.fl{float:left;}
.fr{float:right;}
.clear{zoom:1;}
.clear:after{content:"";display:block;clear:both;}
</style>
