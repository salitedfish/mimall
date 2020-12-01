<template>
  <div class="login">
    <div class="container">
      <a href="/#/index"><img src="/images/login-logo.png" alt="" /></a>
    </div>
    <div class="wrapper">
      <div class="container">
        <div class="login-form">
          <h3>
            <span class="checked">账号登录</span>
            <span class="sep-line">|</span>
            <span class="saoma">账号注册</span>
          </h3>
          <div class="input">
            <input type="text" placeholder="请输入账号" v-model="username" />
          </div>
          <div class="input">
            <input
              type="password"
              placeholder="请输入密码"
              v-model="password"
            />
          </div>
          <div class="btn-box">
            <a href="javascript:;" class="btn" v-on:click="login">登录</a>
          </div>
          <div class="tips">
            <div class="sms" v-on:click="register">输入账号密码点击注册</div>
            <div class="reg" v-on:click="register">立即注册<span>|</span>忘记密码？</div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer">
      <div class="footer-link">
        <a href="https://www.bilibili.com/" target="_blank"
          >bilibili <span>|</span></a
        >
        <a href="https://www.bilibili.com/" target="_blank"
          >b站 <span>|</span></a
        >
        <a href="https://www.bilibili.com/" target="_blank"
          >又是b站 <span>|</span></a
        >
        <a href="https://www.bilibili.com/" target="_blank">还是b站</a>
      </div>
      <p class="copyright">Copyright 2020 balabalabalabalabala............</p>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "login",
  data() {
    return {
      username: "",
      password: "",
      userId: "",
    };
  },
  methods: {
    //点击登录
    login() {
      let { username, password } = this;
      axios
        .post("/user/login", {
          username,
          password,
        })
        .then((res) => {
          //将userId保存在cookie中
          this.$cookie.set("userId", res.id);
          //将vuex中的saveUserName改为username
          this.$store.dispatch("saveUserName", res.username);
          //跳转到主页面
          this.$router.push("/index");
        })
        .catch(() => {
          console.log("登录失败");
        });
    },
    //点击注册
    register() {
      axios
        .post("/user/register", {
          username: "Amon",
          password: "Amon",
          email: "Amon@qq.com",
        })
        .then(() => {
          alert("注册成功");
        })
        //因为这个项目服务器并不会返回错误信息，所以main.js
        //里面根据请求返回的status模拟状态信息，如果失败则返回
        //了一个promise.reject(res)
        .catch(()=>{});
    },
  },
};
</script>

<style lang="scss">
.login {
  & > .container {
    height: 113px;
    img {
      width: auto;
      height: 100%;
    }
  }
  .wrapper {
    background: url("/images/login-bg.jpg") no-repeat center;
    .container {
      height: 576px;
      // position: relative;
      .login-form {
        box-sizing: border-box;
        padding-left: 31px;
        padding-right: 31px;
        width: 410px;
        height: 510px;
        background-color: #fff;
        position: absolute;
        bottom: 30px;
        right: 0;
        h3 {
          line-height: 23px;
          font-size: 24px;
          text-align: center;
          margin: 40px auto 49px;
          .checked {
            color: #ff6600;
          }
          .sep-line {
            margin: 0 32px;
            opacity: 0.5;
          }
        }
        .input {
          display: inline-block;
          width: 348px;
          height: 50px;
          border: 1px solid #e5e5e5;
          margin-bottom: 20px;
          input {
            box-sizing: border-box;
            width: 100%;
            height: 100%;
            border: none;
            padding: 18px;
          }
        }
        .btn {
          width: 100%;
          height: 50px;
          line-height: 50px;
          margin-top: 10px;
          font-size: 16px;
        }
        .tips {
          margin-top: 14px;
          display: flex;
          justify-content: space-between;
          font-size: 14px;
          cursor: pointer;
          .sms {
            color: #ff6600;
          }
          .reg {
            color: #999;
            span {
              margin: 0 7px;
            }
          }
        }
      }
    }
  }
  .footer {
    height: 100px;
    padding-top: 150px;
    color: #999;
    font-size: 14px;
    text-align: center;
    // margin-top: 80px;
    .footer-link {
      a {
        color: #333;
        display: inline-block;
      }
      span {
        color: #999;
        margin: 0 10px 0;
      }
    }
    .copyright {
      margin-top: 19px;
      color: #333;
    }
  }
}
</style>