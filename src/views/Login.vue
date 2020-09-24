<template>
  <div class="login">
    <div class="top">
      <h3>登录</h3>
    </div>
    <div class="main">
      <div class="title">登录</div>
      <p>安全驾驶&nbsp;&nbsp;平安出行</p>
    </div>
    <div class="input">
      <div>
        <van-form @submit="loginSubmit">
          <van-field
            v-model="loginName"
            name
            label
            placeholder="请输入手机号"
            :rules="[{ required: true, message: '请规范输入手机号' ,trigger: 'blur'}]"
          />
          <van-field
            v-model="loginPassword"
            type="loginPassword"
            name
            placeholder="请输入验证码"
            :rules="[{ required: true, message: '请输入正确的验证码' ,trigger: 'blur'}]"
          />
          <div style="margin: 16px;">
            <van-button color="#51A041" round block type="info" native-type="submit">登录</van-button>
          </div>
        </van-form>
        <div class="btn">获取验证码</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      loginName: "12345678921",
      loginPassword: "123456",
    };
  },
  components: {},
  methods: {
    loginSubmit(values) {
      console.log("submit", values);
      this.$router.push("/examine");
    }
  },
};
</script>

<style scoped lang="less">
.login {
  padding: 10%;
  box-sizing: border-box;
  position: relative;
  background-color: #fff;
  .top {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    font-size: 18px;
    color: #333;
    border-bottom: 1px solid #eee;
  }
  .main {
    margin-top: 140px;
    text-align: left;
    .title {
      width: 62.5px;
      height: 28px;
      font-size: 28px;
      border-bottom: 8px solid #51a041;
      border-radius: 4px;
      text-align: center;
    }
    > p {
      width: 133px;
      height: 16px;
      font-size: 16px;
      color: #999999;
    }
  }
  .input {
    position: relative;
    width: 100%;
    margin-top: 40px;
    input {
      box-sizing: border-box;
      padding: 15px;
      width: 300px;
      height: 30px;
      border: none;
      font-size: 16px;
      border-bottom: 1px solid #c6c6c6;
      margin-top: 10px;
    }
    .btn {
      position: absolute;
      right: 0;
      top: 15px;
      color: #51a041;
      font-size: 14px;
      font-family: SourceHanSansCN-Regular;
    }
  }
}
</style>