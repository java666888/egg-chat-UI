<template>
    <div>
            <div class="container">
                <div class="meun">
                    <el-avatar fit="scale-down" class="logo"  :src="AvatarUrl"></el-avatar>
                    <ul class="enumList"  v-for="item in sidebarImgArray" :key="item.activeUrl"  >
                        <!-- <li><img class="li1" title="聊天" @click="sessionClick" :src="sessionImgUrl" alt="会话"></li>
                        <li><img  title="加好友" @click="sessionClick" :src="sessionImgUrl" alt="会话"></li>
                        <li><img  title="设置" :src="settingImgUrl" @click="settingClick"  alt="设置"></li> -->
                        <li><img  :title="item.title" @click="sidebarImgClick(item)"  :src="item.activeStatus?item.activeUrl:item.noActiveUrl" ></li>
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
            //定义侧边栏图标数组
            sidebarImgArray:[
                {"activeStatus":true,"title":"聊天","activeUrl":require("../assets/images/session-active.svg"),"noActiveUrl":require("../assets/images/session.svg")},
                {"activeStatus":false,"title":"加好友","activeUrl":require("../assets/images/addUser-active.svg"),"noActiveUrl":require("../assets/images/addUser.svg")},
                {"activeStatus":false,"title":"设置","activeUrl":require("../assets/images/setting-active.svg"),"noActiveUrl":require("../assets/images/setting.svg")},
            ],
        }
    },methods: {
        sidebarImgClick(item){
            //将数组所有元素改为未选中 
            this.sidebarImgArray.forEach(item1=>{
                item1.activeStatus=false;
            });
            //将点击按钮改为选中
            item.activeStatus=true;
            //得到当前点击图标的值
            let clickValue=item.title;
            
        }
    },mounted() {
    //    this.sessionClick();
       this.$axios.get("/api/user/test");
       console.log(this.str);
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