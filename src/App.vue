<template>
    <div class="div1" :style="{backgroundImage: 'url(' + img + ')',height:'100'+'%',backgroundRepeat:'no-repeat',backgroundSize: 'cover'}" >
       <router-view></router-view>
    </div>
</template>


<script>
export default {
  data() {
    return {
     img:require("../src/assets/bkImg-1.jpg")
    }
  },methods: {
    //获取背景高清大图链接
    getBackgroundImage(){
      let imageUrl="http://www.bing.com";
      let _this=this;
      let x = Math.floor(Math.random() * (7 - 1 + 1)) + 1;
      this.$axios.get("/BackgroundImage/HPImageArchive.aspx?format=js&idx="+x+"&n=1").then(resp=>{
         imageUrl+=resp.data.images[0].url;
         this.img=imageUrl;
         this.$store.commit('setBackgroundImage', imageUrl);
         setTimeout(() => {
           this.getBackgroundImage();
         }, 30000);
      });
      
    },
  },mounted() {
    //五秒钟后调用接口获取最新壁纸
    setTimeout(() => {
       this.getBackgroundImage();
    },5000);
  },
}
</script>
<style>
.div1{
  transition: all 1s;
}
</style>