<template>
    <div>
        <!-- 登录框 -->
       <div class="loginDiv">
           <div class="div1" ></div>
            <el-avatar  class="logo" :size="60" :src="AvatarUrl"></el-avatar>
            <div class="div2">
              <div class="div3">
             <el-input class="account"  @blur="getHeadPortrait()"  clearable size="mini" placeholder="请输入账号" v-model="loginForm.s_account">
                  <template slot="prepend"><i class="el-icon-user-solid"></i></template>
             </el-input>
             
             <el-input  class="password" clearable size="mini" placeholder="请输入密码" v-model="loginForm.s_password" show-password>
                  <template slot="prepend"><i class="el-icon-lock"></i></template>
             </el-input>

             <div>
                 <span class="span1">
                  <el-link class="textBtn" size="mini" type="primary">忘记密码</el-link>
                  &nbsp;
                   <el-link class="textBtn" size="mini" @click="showRegistrationBox"  type="primary">立即注册</el-link>
                   </span>
                <el-button class="loginBtn" size="mini" @click="login()"  type="primary">登录</el-button>   
            </div>   

            </div>
            </div>
       </div>

        <!-- 注册弹出框  -->
        <el-dialog  top="150px" @close="registrationBoxClose"   title="注册账号" :close-on-click-modal="false" :close-on-press-escape="false" :visible.sync="RegistrationInterfaceVisible"  width="20%" center>
            <el-form  class="from1" status-icon size="mini" :model="regForm" :rules="regRules" ref="regForm" >
                 <el-form-item prop="s_nike_name" >
                        <el-input  size="mini" placeholder="请输入昵称" v-model="regForm.s_nike_name">
                        <template slot="prepend"><i class="el-icon-user"></i></template>
                        </el-input>
                    </el-form-item>

                   <el-form-item prop="s_account" >
                        <el-input  size="mini" placeholder="请输入账号" v-model="regForm.s_account">
                        <template slot="prepend"><i class="el-icon-user-solid"></i></template>
                        </el-input>
                    </el-form-item>
                    
                     <el-form-item prop="s_password" >
                        <el-input   size="mini" placeholder="请输入密码" v-model="regForm.s_password" show-password>
                            <template slot="prepend"><i class="el-icon-lock"></i></template>
                       </el-input>
                    </el-form-item>

                    <el-form-item prop="confrimPassword" >
                        <el-input  size="mini" placeholder="确认密码" v-model="regForm.confrimPassword" show-password>
                            <template slot="prepend"><i class="el-icon-lock"></i></template>
                       </el-input>
                    </el-form-item>

                    <el-form-item prop="s_email" >
                       <el-input  size="mini" placeholder="电子邮箱" v-model="regForm.s_email">
                        <template slot="prepend"><i class="el-icon-message"></i></template>
                        </el-input>
                    </el-form-item>

                    <el-row>
                        <el-col :span="12">
                    <el-form-item label="性别" >
                        <el-radio-group style="margin-left: 15px;" v-model="regForm.s_sex">
                        <el-radio-button label="0">男</el-radio-button>
                        <el-radio-button label="1">女</el-radio-button>
                        </el-radio-group>
                    </el-form-item>
                        </el-col>

                         <el-col :span="12">
                  <el-form-item   el-form-item label="上传头像" >
                    <el-button native-type="file" @click="clickUploadImg()" type="primary">上传<i class="el-icon-upload el-icon--right"></i></el-button>
                    <input type="file" ref="uploadImg"  accept="image/*"  id="uploadImg" v-show="false" @change="imgToBase64()" />
                    </el-form-item>
                         </el-col>
                    </el-row>
                    
            </el-form>
            <span slot="footer" class="dialog-footer">
                <el-button size="mini" @click="registrationBoxClose">取 消</el-button>
                <el-button size="mini" type="primary" @click="registration">确 定</el-button>
            </span>
        </el-dialog>

    </div>
</template>
<script>
export default {
    data() {
          //确认密码校验方法
          var  validatePass=(rule, value, callback)=>{
              if(value==''){
                   callback(new Error('请再次输入密码'));
              }else if(value != this.regForm.s_password){
                  callback(new Error('两次输入密码不一致!'));
              }else{
                   callback();
              }
          }
          //校验账号是否可用
          var validateAccount=(rule, value, callback)=>{
                 let that = this;
              if(value==''){
                return    callback(new Error('请输入账号'));
              }else if(value.search(/^[a-zA-Z][a-zA-Z0-9]{5,13}$/)==-1){
                return   callback(new Error('长度6-14位,必须以字母开头'));
              } 
              //满足规则之后验证该账号是否已注册
              that.checkUserAccount(value).then(f=>{
                   if(!f){
                      callback(new Error('该账号已注册'));
                  }else{
                      callback();
                  }
              });
          }

        return {
            //头像url
            AvatarUrl:require("../assets/images/logo.png"),
            //登录表单对象
            loginForm:{
                s_account:"",
                s_password:""
            },
            // 注册框可见状态
            RegistrationInterfaceVisible:false,
            // 注册表单对象
            regForm:{
                s_account:"",
                s_password:"",
                confrimPassword:"",
                s_email:"",
                s_sex:"0",
                s_nike_name:"",
                s_head_portrait:"",
            },
            // 注册表单验证规则对象
            regRules:{
             s_account: [
             { validator:validateAccount, trigger: 'blur' }
            ],
            s_nike_name:[
            { required: true, message: '请输入昵称', trigger: 'blur' },
            { min:2, max: 10, message: '昵称长度在2-10位', trigger: 'blur' }
            ],
            s_password:[
            { required: true, message: '请输入密码', trigger: 'blur' },
            { min:8, max: 16, message: '密码长度在8-16位', trigger: 'blur' }
            ],
            confrimPassword:[
                 { validator: validatePass, trigger: 'blur' }
            ],
            s_email:[
            { required: true, message: '请输入邮箱地址', trigger: 'blur' },
			{ type: 'email', message: '请输入正确的邮箱地址', trigger: 'blur' }
            ]
            },
        }
    },methods: {
        // 显示注册框
        showRegistrationBox(){
            this.RegistrationInterfaceVisible=true;
        },
        //检查用户账号是否可用
        checkUserAccount(account){
        return new Promise((resolve, reject)=>{
             this.$axios.get("/api/user/userAccount/"+account).then((resp)=>{
              resolve(resp.data.data.checkUserAccount);
            });
        });    
      },
      //注册框关闭
      registrationBoxClose(){
          this.RegistrationInterfaceVisible=false;
          this.$refs.regForm.resetFields();   
          this.regForm.s_sex="0";
      },
      //注册
      registration(){
          this.$refs.regForm.validate((valid) => {
          if (valid) {
             this.$axios.post("/api/user/userRegister",this.regForm).then((resp)=>{
               if(resp.data.code==10005){
                    this.$message({
                        message: '注册成功',
                        type: 'success'
                    });
               }else{
                  this.$message.error('注册失败');
               }
               this.RegistrationInterfaceVisible=false;
               this.$refs.regForm.resetFields();
               this.regForm.s_sex="0";
            });
          }
        });
      },
      //登录
      login(){
          if(this.loginForm.s_account!=""&&this.loginForm.s_password!=""){
              this.$axios.post("/api/user/userLogin",this.$qs.stringify(this.loginForm),
              { headers: {'Content-Type': 'application/x-www-form-urlencoded'}}).then(resp=>{
                  if(resp.data.code==10000){
                      this.$notify.error({
                        title: '提示',
                        message: '用户名或密码错误'
                        });
                  }else{
                      //存储token
                      localStorage.setItem("token", resp.data.data.token);
                        this.$notify({
                        title: '提示',
                        message: '登录成功',
                        type: 'success'
                        });
                        //存储当前登录用户账号
                        localStorage.setItem("account", this.loginForm.s_account);
                      this.$router.push("/Home");
                  }
              });
          }
      },
      //图片转base64
      imgToBase64(){
      let image= document.getElementById('uploadImg').files[0];
      //支持的图片类型
      let imageTypeArr=[".jpg",".png"]
      if(image.size>2097152){
         this.$message.error('图片大小不能超过1M');
        return 0;
      }
      let imageType=image.name.substring(image.name.indexOf(".",0));
      if(imageTypeArr.indexOf(imageType)==-1){
         this.$message.error('图片只支持jpg和png格式');
        return 0;
      }
      var _this=this;
       var reader = new FileReader(); //实例化文件读取对象
                reader.readAsDataURL(image); //将文件读取为 DataURL,也就是base64编码
                reader.onload = function(ev) { //文件读取成功完成时触发
                    var dataURL = ev.target.result; //获得文件读取成功后的DataURL,也就是base64编码
                   _this.regForm.s_head_portrait=dataURL;
                    _this.$message({
          message: '图片上传成功',
          type: 'success'
        });
                }

      },
      //获取头像
      getHeadPortrait(){
           let account=this.loginForm.s_account;
           if(account==null||account==""){
               return 0;
           }
           let _this=this;
           this.$axios.get("/api/user/headPortrait/"+account).then(resp=>{
               console.log(resp.data);
               if(resp.data.data!=null){
                    _this.AvatarUrl=resp.data.data;
                    localStorage.setItem("AvatarUrl",resp.data.data);
               }
           });
      },
      //点击原生上传组件
      clickUploadImg(){
        document.getElementById('uploadImg').click();
      },
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
    background: url("../assets/images/bkImg-1.jpg") no-repeat center;
    background-size: cover;
    background-size: 100% auto; 
}
.logo{
    position: absolute;
    top: 120px;
    left: 176px;
    z-index: 999;
     background: none;
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