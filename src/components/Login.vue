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
        <el-dialog top="150px"  title="注册账号" :close-on-click-modal="false" :close-on-press-escape="false" :visible.sync="RegistrationInterfaceVisible"  width="20%" center>
            <el-form class="from1" size="mini" :model="regForm" :rules="regRules" ref="regForm" >
                   <el-form-item >
                        <el-input  size="mini" placeholder="请输入账号" v-model="regForm.account">
                        <template slot="prepend"><i class="el-icon-user-solid"></i></template>
                        </el-input>
                    </el-form-item>
                    
                     <el-form-item >
                        <el-input   size="mini" placeholder="请输入密码" v-model="regForm.password" show-password>
                            <template slot="prepend"><i class="el-icon-lock"></i></template>
                       </el-input>
                    </el-form-item>

                    <el-form-item >
                        <el-input  size="mini" placeholder="确认密码" v-model="regForm.confrimPassword" show-password>
                            <template slot="prepend"><i class="el-icon-lock"></i></template>
                       </el-input>
                    </el-form-item>

                    <el-form-item >
                       <el-input  size="mini" placeholder="电子邮箱" v-model="regForm.email">
                        <template slot="prepend"><i class="el-icon-message"></i></template>
                        </el-input>
                    </el-form-item>

                    <el-form-item label="性别" >
                       <el-radio-group style="margin-left: 15px;" v-model="regForm.sex">
                        <el-radio-button label="0">男</el-radio-button>
                        <el-radio-button label="1">女</el-radio-button>
                        </el-radio-group>
                    </el-form-item>

            </el-form>
            <span slot="footer" class="dialog-footer">
                <el-button size="mini" @click="RegistrationInterfaceVisible = false">取 消</el-button>
                <el-button size="mini" type="primary" @click="RegistrationInterfaceVisible = false">确 定</el-button>
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
                s_account:"",
                password:"",
                confrimPassword:"",
                email:"",
                sex:"0"
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
/deep/ .el-dialog__footer {
    padding: 10px 20px 20px;
    /* text-align: right;
    -webkit-box-sizing: border-box;
    box-sizing: border-box; */
    margin-top: -40px;
    margin-left:130px !important;
}
.from1{
        line-height: 20px;
    margin-top: -20px;
}   
.el-form-item {
    margin-bottom: 15px !important;
}
.el-input-group__prepend{
    height: 27.8px !important;
}

/deep/ .el-input--mini .el-input__inner {
    height: 27.6px;
}
</style>