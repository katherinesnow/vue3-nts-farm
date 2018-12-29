<template>
  <div class="cms-login">
    <div class="blank"></div>
    <div class="login-main">
      <div class="left">
        <div class="name">
           <img src="../assets/logo.png" alt="logo" class='logo'>
        </div>
      </div>
      <div class="right">
        <el-form :model="loginForm" status-icon ref="loginForm">
          <div class="title">智慧农业服务平台</div>
          <el-form-item prop="username" :rules="[
              { required: true, message: '请输入用户名', trigger: 'blur' },
              { min: 1, max: 20, message: '长度在 1 到 20 个字符', trigger: 'blur, change' }
            ]">
            <el-input v-model="loginForm.username" placeholder="账号"></el-input>
          </el-form-item>
          <el-form-item prop="password" :rules="[
              { required: true, message: '请输入密码', trigger: 'blur' },
              { pattern: /^[0-9a-zA-Z]{6,20}$/, message: '支持6-10位数字及英文', trigger: 'blur, change' }
            ]">
            <el-input type="password"
                v-model="loginForm.password"
                auto-complete="off"
                placeholder="密码">
            </el-input>
          </el-form-item>
          <el-form-item class="btn-item">
            <el-button type="primary" @click="submitForm('loginForm')"
            class='btn-login'>登录</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
    <div class="blank"></div>
   <!--  <footer class="footer">Copyright © 2018 产业互联技术中心</footer> -->
  </div>
</template>
<script>
import '@/styles/login.scss'
import { createNamespacedHelpers } from 'vuex';
import user from '@/store/modules/user';

const {
    mapActions: mapUserActions,
} = createNamespacedHelpers(user.namespace);
export default {
    name: 'login',
    data() {
        return {
            loginForm: {
                username: '',
                password: '',
            },
        }
    },
    methods: {
        ...mapUserActions({
            doLogin: 'DO_LOGIN',
        }),
        submitForm(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    this.doLogin(this.loginForm).then((data) => {
                        if (data.resultCode === this.$Status.OK) {
                            this.$router.replace({
                                path: this.$route.query.redirect || '/',
                            });
                        } else {
                            this.$Message.error(data.resultDesc || '登录出错!');
                        }
                    }).catch(() => {
                        this.$Message.error('服务器出错,请稍后再试!');
                    });
                }
            });
        },
    },
};
</script>
