<template>
  <div class="owncenter">
    <div class="name">
      <div class="headphoto">
        <van-image
          round
          width="62px"
          height="62px"
          src="https://img.yzcdn.cn/vant/cat.jpeg"
        />
      </div>
      <div class="headname">
        <h3>这是一个微信名称</h3>
        <p>18911110000</p>
      </div>
    </div>
    <div class="conlist">
      <ul class="optionlist">
        <li class="optionitem" @click="showAgreement">
          <span class="left-icon icon-doc"></span>
          <van-icon name="arrow" class="right-icon"></van-icon>
          <span class="button-text">用户协议</span>
        </li>
        <!-- <li class="optionitem">
          <span class="left-icon icon-chat"></span>
          <van-icon name="arrow" class="right-icon"></van-icon>
          <span class="button-text">在线客服</span>
        </li>-->
        <li class="optionitem">
          <span class="icon-qrcode"></span>
          <van-icon name="arrow" class="right-icon"></van-icon>
          <span class="button-text">二维码推荐</span>
        </li>
      </ul>
    </div>
    <div class="btn">
      <van-button type="primary" color="#67CDC9" @click="next()"
        >申请成为代驾司机</van-button
      >
    </div>
  </div>
</template>

<script>
import { API_PROTOCOL_ID } from "../../../api/api";
export default {
  data() {
    return {
      id: 1,
      agreement:"",
    };
  },
  components: {},
  methods: {
    next: function () {
      this.$router.replace("/examine/first");
    },
    showAgreement() {
      console.log(1);
    },
    async searchsome(options) {
      let { id } = options;
      let data = await API_PROTOCOL_ID();
      // console.log(data);
      this.agreement = data.data.context;
      console.log(this.agreement);
    },
  },
};
</script>

<style scoped lang="less">
.owncenter {
  background-color: #fff;
  padding: 15px;
  .name {
    box-sizing: border-box;
    width: 345px;
    height: 92px;
    border-radius: 5px;
    box-shadow: 1px 1px 3px #989898;
    overflow: hidden;
    padding: 15px;
    margin-top: 50px;
    .headphoto {
      width: 62px;
      height: 62px;
      float: left;
    }
    .headname {
      float: left;
      margin-left: 22px;
      text-align: left;
      h3 {
        color: #333;
        font-size: 16px;
        margin: 12px 0;
      }
      p {
        font-size: 12px;
        color: #999;
      }
    }
  }
  .conlist {
    font-size: 16px;
    position: relative;
    width: 100%;
    // height:142px;
    line-height: 100px;
    color: #333333;
    padding: 10px;
    box-sizing: border-box;
    margin: 20px auto;
    background-color: white;
    box-shadow: 0px 2px 10px 0px rgba(152, 152, 152, 0.2);
    border-radius: 10px;
    .optionlist {
      li {
        text-align: left;
      }
      .optionitem {
        position: relative;
        height: 40px;
        line-height: 40px;
        color: #333333;
        padding: 0 10px;
        border-bottom: 1px #eeeeee solid;
        &:last-child {
          border: 0;
        }
        .icon-qrcode {
          background-image: url("../../../assets/images/qrcode.jpg");
          background-repeat: no-repeat;
          background-size: 100% 100%;
          width: 25px;
          height: 25px;
          margin-right: 10px;
          display: inline-block;
          vertical-align: middle;
        }
        .right-icon {
          position: absolute;
          right: 15px;
          top: 50%;
          transform: translateY(-50%);
        }
        .left-icon {
          display: inline-block;
          vertical-align: middle;
          background-image: url("../../../assets/images/img.png");
          background-repeat: none;
          height: 25px;
          width: 25px;
          margin-right: 10px;
          background-size: 80px auto;
          overflow: hidden;
          background-repeat: no-repeat;
          &.icon-doc {
            background-position: -23px 0;
          }
          &.icon-chat {
            background-position: -50px 0;
          }
        }
        a {
          display: block;
          text-decoration: none;
          color: #333;
        }
      }
    }
  }
  .van-button {
    width: 100%;
    margin-top: 50px;
  }
}
</style>