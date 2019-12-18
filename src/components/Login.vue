<template>
    <div>
        <!-- 登录框 -->
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
                   <el-link class="textBtn" size="mini" @click="RegistrationInterface"  type="primary">立即注册</el-link>
                   </span>
                <el-button class="loginBtn" size="mini"  type="primary">登录</el-button>   
            </div>   

            </div>
            </div>
       </div>

        <!-- 注册弹出框 -->
        <el-dialog   title="注册账号" :close-on-click-modal="false" :close-on-press-escape="false" :visible.sync="RegistrationInterfaceVisible"  width="30%" center>
            <el-form :model="regForm" :rules="regRules" ref="regForm" label-width="100px">
                    <el-form-item label="账号" prop="s_account">
                        <el-input v-model="regForm.s_account"></el-input>
                    </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
                <el-button @click="RegistrationInterfaceVisible = false">取 消</el-button>
                <el-button type="primary" @click="RegistrationInterfaceVisible = false">确 定</el-button>
            </span>
        </el-dialog>

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
            // 注册框可见状态
            RegistrationInterfaceVisible:false,
            // 注册表单对象
            regForm:{
                s_account:""
            },
            // 注册表单验证规则对象
            regRules:{

            }
        }
    },methods: {
        // 显示注册界面
        RegistrationInterface(){
            this.RegistrationInterfaceVisible=true;
        }
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
.dialog-footer{
margin-left: 260px;
}
    
</style>