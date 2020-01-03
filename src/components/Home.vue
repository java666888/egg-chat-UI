<template>
    <div>
            <div class="container">
                <div class="meun">
                    <el-avatar fit="scale-down" class="logo"  :src="AvatarUrl"></el-avatar>
                    <ul class="enumList">
                        <li><img class="li1" @click="sessionClick" :src="sessionImgUrl" alt="会话"></li>
                        <li><img  :src="settingImgUrl" @click="settingClick"  alt="设置"></li>
                    </ul>
                </div>
                <div class="userList">
                    <div class="searchDiv">
                        <!-- <el-input class="search" placeholder="搜索" prefix-icon="el-icon-search"></el-input> -->
                    <i class="el-icon-search searchIcon"  ></i>
                    <input type="text" placeholder="搜索" class="search">
                    </div>
                </div>
                <div class="chat">

                </div>
            </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            //头像url
            AvatarUrl:require("../assets/images/logo.png"),
            //会话未激活图片
            sessionImgUrl:require("../assets/images/session.svg"),
            //设置未激活图片
            settingImgUrl:require("../assets/images/setting.svg"),
        }
    },methods: {
        //会话图标点击
      sessionClick(){
          this.sessionImgUrl=require("../assets/images/session-active.svg");
          this.settingImgUrl=require("../assets/images/setting.svg");
      },
      //设置图标点击
      settingClick(){
           this.sessionImgUrl=require("../assets/images/session.svg");
          this.settingImgUrl=require("../assets/images/setting-active.svg");
      }
    },mounted() {
       this.sessionClick();
    },
}
</script>

<style scoped>
.logo{
     background: none;
    margin-left: 10px;
    display: inline-block;
    margin-top: 10px;
}


.container{
    width: 700px;
    height: 600px;
     position: absolute;
    left:50%;
    top:50%;
    transform: translate(-50%, -50%);
}
.meun{
    width: 60px;
    height: 100%;
    background: #26292e;
    float: left;
}
.userList{
    height: 100%;
    width: 200px;
    border-right: 1px solid #d1d1d1;
    float: left;
    position: relative;
    background: #FFFFFF;
}
.chat{
    height: 100%;
    background: #eeeeee;
}
.searchDiv{
    height: 50px;
    width: 100%;
    padding: 10px;
    box-sizing: border-box;
}
.search{
    line-height: 30px;
    width: 100%;
    font-size: 12px;
    border-radius: 4px;
    outline: none;
    box-sizing: border-box;
    border: none;
    background: #f2f2f2;
    padding-left: 25px;
    padding-right: 10px;
    color: #606266;
}
.searchIcon{
    position: absolute;
    height: 30px;
    width: 24px;
    text-align: center;
    line-height: 30px;
    font-size: 12px;
    left: 10px;
    top: 10px;
    color: #92959b;
}
.enumList{
    list-style: none;
    margin-left: -25px
}
.li1{
    margin-bottom: 10px;
}
</style>