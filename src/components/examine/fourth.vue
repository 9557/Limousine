<template>
<div class="experience">
  <div class="repla">
    <p>有无代驾经历</p>
    <van-radio-group v-model="radio" direction="horizontal">
      <van-radio name="1" label-disabled icon-size="15px" checked-color="#67CDC9">是</van-radio>
      <van-radio name="2" label-disabled icon-size="15px" checked-color="#67CDC9">否</van-radio>
    </van-radio-group>
  </div>
  <van-cell is-link title="每天可接单时长" v-model="dura" @click="show1 = true"></van-cell>
  <van-action-sheet v-model="show1" close-on-click-action :actions="duration" @select="onSelect" />
  <div class="minput">
    <span>期待订单报酬</span>
    <input v-model="allow1" type="number" placeholder="请输入报酬(元)" />
  </div>
  <div class="next">
    <van-button type="primary" color="#67CDC9" size="large" @click="inspectInfo(radio,dura, allow1)">提交</van-button>
  </div>
  <!-- 提交成功后的遮罩层 -->
  <van-overlay :show="show">
    <div class="wrapper" @click.stop>
      <div class="info">
        <div>
          <van-icon name="checked" color="#68CDC9" />
        </div>
        <p>提交成功，等待客服联系。。。</p>
        <p>也可以直接致电我们的客服热线：</p>
        <p>400-88888888</p>
        <van-button type="primary" color="#68CDC9" @click="showsucc">我知道了</van-button>
      </div>
    </div>
  </van-overlay>
</div>
</template>

<script>
import {
  Notify,
  Toast
} from "vant";
export default {
  data() {
    return {
      radio: "1",
      show: false,
      show1: false, // 接单时长
      duration: [{
          name: "1~3小时"
        },
        {
          name: "3~5小时"
        },
        {
          name: "5~8小时"
        },
        {
          name: "8~10小时"
        },
        {
          name: "10~12小时"
        },
        {
          name: "12小时以上"
        },
      ],
      dura: "请选择",
      allow1: "",
    };
  },
  components: {},
  methods: {
    onSelect: function (item) {
      // 默认情况下点击选项时不会自动收起
      // 可以通过 close-on-click-action 属性开启自动收起
      this.show = false;
      Toast(item.name);
      console.log(item.name);
      this.dura = item.name;
    },
    // 审查信息是否为空
    inspectInfo(radio, dura, allow1) {
      const info = {
        radio: "1",
        dura: "请选择",
        allow1: allow1,
      };
      if (dura === "请选择") {
        Notify("请选择可接单时长");
      } else if (allow1 === "") {
        Notify("请填写期望报酬");
      } else {
        this.show = true;
        let storage = window.sessionStorage;
        let aa = JSON.parse(storage.Info);
        aa.radio = radio;
        aa.allow1 = allow1;
        aa.dura = dura;
        sessionStorage.setItem("Info", JSON.stringify(aa));
      }
    },
    next: function () {
      // this.$router.replace("/examine/fourth");
      // activeIndex++;
    },
    async showsucc() {
      this.show = false;
      this.$router.replace("/index/owninfo");
    },
    // hide: function (show) {
    //   show = false;
    // },
  },
};
</script>

<style lang="less" scoped>
.experience {
  box-sizing: border-box;
  height: 100px;
  padding: 10px 20px;

  .repla {
    box-sizing: border-box;
    width: 100%;
    height: 80px;
    border-bottom: 1px solid #eee;

    p {
      width: 90px;
      height: 15px;
      margin: 10px 0;
      font-size: 15px;
      text-align: left;
      font-family: SourceHanSansCN-Regular;
    }

    .van-radio-group {
      margin: 20px 0 0 20px;
    }

    .passed {
      width: 15px;
      height: 15px;
    }
  }

  .van-cell__title {
    text-align: left;
    margin-left: -15px;
  }

  .minput {
    width: 100%;
    height: 50px;
    margin: 0;
    line-height: 50px;
    border-bottom: 1px solid #eee;
    overflow: hidden;

    >span {
      text-align: left;
      font-size: 15px;
      float: left;
    }

    >input {
      box-sizing: border-box;
      height: 47px;
      border: none;
      text-align: right;
      float: right;
      padding-right: 20px;
    }
  }

  .next {
    position: absolute;
    bottom: 40px;
    margin-top: 38px;

    .van-button {
      margin-top: 12px;
      width: 345px;
      height: 45px;
    }
  }

  .wrapper {
    .info {
      box-sizing: border-box;
      padding-top: 20px;
      width: 290px;
      height: 207px;
      background-color: #fff;
      border-radius: 5px;
      text-align: center;

      >div {
        font-size: 34px;
      }

      >p {
        margin: 0;
        font-size: 14px;
        line-height: 16px;
        margin-top: 9px;
      }

      >button {
        width: 120px;
        height: 30px;
        margin-top: 15px;
      }
    }
  }

  .wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
  }

  .block {
    width: 120px;
    height: 120px;
    background-color: #fff;
  }

  .img-icon {
    height: 20px;
  }
}

.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

.block {
  width: 120px;
  height: 120px;
  background-color: #fff;
}

.img-icon {
  height: 20px;
}

// 最后的办法 改用vant中的单选框，可以改变颜色，使用自定义图标，一个圆形，设置圆形的大小就可以
</style>
