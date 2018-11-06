<template>
    <div class="login-bg">
        <div class="login">
          <div class="login-title">登录</div>
          <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm">
            <el-form-item prop="mobile">
              <el-input class="app-input" @keyup.enter.native="submitForm('ruleForm')" type="mobile" v-model="ruleForm.mobile" placeholder="请输入手机号码" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item prop="password">
              <el-input class="app-input" @keyup.enter.native="submitForm('ruleForm')" type="password" v-model="ruleForm.password" placeholder="请输入密码" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button class="submit-btn" type="primary" @click="submitForm('ruleForm')">提交</el-button>
            </el-form-item>
          </el-form>
          <div class="reset-text">点击<a class="reset-btn" @click="resetForm('ruleForm')">重置</a>当前表单</div>
        </div>
    </div>
</template>
<script>
export default {
  data() {
    const validateMobile = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入手机号"));
      } else {
        callback();
      }
    };
    const validatePassword = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        callback();
      }
    };
    return {
      ruleForm: {
        mobile: "",
        password: ""
      },
      rules: {
        mobile: [{ validator: validateMobile, trigger: "blur" }],
        password: [{ validator: validatePassword, trigger: "blur" }]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.loading = true;
          this.$store
            .dispatch("LoginByUsername", this.ruleForm)
            .then(() => {
              this.loading = false;
              this.$router.push({ path: this.redirect || "/" });
            })
            .catch(() => {
              this.loading = false;
            });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
};
</script>
<style rel="stylesheet/scss" lang="scss">
.login-bg {
  position: relative;
  height: 100%;
  background: url("~@/assets/login/login-bg-mini.png");
  background-size: 100% 100%;
  .login {
    box-sizing: border-box;
    padding: 50px;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-left: -225px;
    margin-top: -200px;
    background: #ffffff;
    width: 450px;
    height: 400px;
    box-shadow: 2px 2px #e0e0e0;
    &-title {
      margin: 20px auto;
      text-align: center;
      font-size: 24px;
    }
    .submit-btn {
      width: 100%;
    }
    .reset-text {
      font-size: 12px;
      color: #666666;
    }
    .reset-btn {
      cursor: pointer;
      font-size: 12px;
      color: #666666;
      &:hover {
        color: #000000;
      }
    }
  }
}
</style>
