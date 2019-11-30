<template>
    <div>
       <div class="loginDiv">
           <div class="div1" ></div>
            <img :src="AvatarUrl" class="logo">
            <div class="div2">
              <div class="div3">
             <el-input class="account" size="mini" placeholder="请输入账号" v-model="loginForm.account">
                  <template slot="prepend"><i class="el-icon-user-solid"></i></template>
             </el-input>
             
             <el-input  class="password" size="mini" placeholder="请输入密码" v-model="loginForm.password" show-password>
                  <template slot="prepend"><i class="el-icon-lock"></i></template>
             </el-input>

             <div>
                 <span class="span1">
                  <el-link class="textBtn" size="mini" type="primary">忘记密码</el-link>
                  &nbsp;
                   <el-link class="textBtn" size="mini"  type="primary">立即注册</el-link>
                   </span>
                <el-button class="loginBtn" size="mini"  type="primary">登录</el-button>   
            </div>   

            </div>
            </div>
       </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            //头像url
            AvatarUrl:require("../assets/logo.png"),
            //登录表单对象
            loginForm:{
                account:"",
                password:""
            },
        }
    },methods: {
        
    },mounted() {
          
    },
}
</script>

<style scoped>
.loginDiv{
    width: 400px;
    height: 320px;
     position: absolute;
    left:50%;
    top:50%;
    transform: translate(-50%, -50%);
}
.div1{
    height: 160px;
    border-radius: 4px 4px 0 0;
    background: url("../assets/bkImg-1.jpg") no-repeat center;
    background-size: cover;
    background-size: 100% auto; 
}
.logo{
    position: absolute;
    top: 120px;
    left: 166px;
    border-radius:50%;
    height: 64px;
    width: 64px;
    z-index: 999;
}
.div2{
    background: white;
    border-radius: 0 0 4px 4px;
    height: 160px;
}
.password{
  margin-top: 10px;
  width: 250px;
  margin-left: 80px;
}
.account{
     margin-top: 30px;
  width: 250px;
  margin-left: 80px;
}
.loginBtn{
    margin-left: 133px;
    width: 196px;
    position: relative;
    top: -15px;
}
.textBtn{
    font-size: 10px;
}
.span1{
    position: relative;
    left: 8px;
    top: 15px;
}
</style>