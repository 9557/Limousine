<template>
  <div class="examine">
    <div class="top">
      <h3>报名</h3>
    </div>
    <div class="progress">
      <div class="steps-box">
        <!-- 步骤条 -->
        <div class="Article-steps" :class="stepList.length <= activeIndex ? 'step-over':''">
          <!-- 步骤条背景进度条 -->
          <div class="line">
            <span
              class="plan"
              :style="`width:${activeIndex*(100/(stepList.length - 1)) - (100/(stepList.length - 1)/2)}%`"
            ></span>
          </div>
          <!-- 每步部分 -->
          <span
            class="step"
            v-for="(i,index) in stepList"
            :key="index"
            :class="activeIndex == i.stepIndex || i.stepIndex<=activeIndex ? 'step-active':''"
          >
            <span class="step-num">
              <span class="num">{{i.stepIndex}}</span>
            </span>
            <p class="title">{{i.title}}</p>
          </span>
        </div>
      </div>
    </div>
    <!-- 步骤条对应内容 -->
    <div class="mainInfo">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: 1, // 步骤条当前位置
      stepList: [
        // 步骤条数
        {
          stepIndex: 1,
          title: "报名城市",
        },
        {
          stepIndex: 2,
          title: "个人信息",
        },
        {
          stepIndex: 3,
          title: "驾驶信息",
        },
        {
          stepIndex: 4,
          title: "平台信息",
        },
      ],
    };
  },
  components: {},
  methods: {
    /* update(str) {
        this.activeIndex = str;
    } */
  },
  mounted() {},
  watch: {
    $route: {
      handler(val, oldval) {
        console.log(val);
        console.log(oldval);
        console.log(this.activeIndex);
        console.log(val.name);
        if (val.name === "first") {
          this.activeIndex = 1;
        } else if (val.name === "second") {
          this.activeIndex = 2;
        } else if (val.name === "third") {
          this.activeIndex = 3;
        } else {
          this.activeIndex = 4;
        }
      },
    },
  },
};
</script>

<style scoped lang="less">
.examine {
  box-sizing: border-box;
  width: 100%;
  text-align: center;
  .top {
    position: relative;
    top: 0;
    left: 0;
    right: 0;
    font-size: 18px;
    font-weight: normal;
    color: #333;
    border-bottom: 1px solid #eee;
    background-color: #fff;
    box-sizing: border-box;
    width: 375px;
    height: 64px;
    line-height: 64px;
    h3 {
      margin: 0;
      font-weight: normal;
    }
  }
  .progress {
    box-sizing: border-box;
    padding: 15px 38px 15px;
    background-color: #fff;
  }
  .mainInfo {
    margin-top: 10px;
    height: 100px;
    background-color: #fff;
  }
}
.steps-box {
  user-select: none;
  width: 100%;
  height: 90px;
  position: relative;
  // <!-- 步骤条背景进度条 -->
  .line {
    display: block;
    margin: 0 auto;
    position: absolute;
    top: 14px;
    left: 5%;
    background: #e4e4e4;
    width: 90%;
    height: 2px;
    overflow: hidden;
    .plan {
      position: absolute;
      top: 0;
      left: 0;
      height: 2px;
      transition: 0.5s;
      background: #4b4f5f;
    }
  }
  .Article-steps {
    display: flex;
    justify-content: space-between;
    .step {
      .title {
        font-size: 14px;
        font-weight: normal;
        color: #e4e4e4;
        margin-top: 5px;
      }
      .step-num {
        position: relative;
        z-index: 1;
        font-size: 15px;
        width: 28px;
        height: 28px;
        display: inline-block;
        line-height: 28px;
        background: #e4e4e4;
        color: white;
        font-weight: normal;
        border-radius: 50%;
        .num {
          display: inline-block;
        }
      }
    }
  }

  //当前所在位置样式
  .step-active {
    .step-num {
      background: #4b4f5f !important;
      transform: rotate(90deg);
      .num {
        transform: rotate(-90deg);
      }
    }
    .title {
      color: #4b4f5f !important;
      font-weight: normal !important;
    }
  }

  //全部完成样式
  .step-over {
    .plan {
      background: #91f062 !important;
    }
    .step-num {
      background: #67c23a !important;
    }
    .title {
      color: #67c23a !important;
      font-weight: normal !important;
    }
  }
  //对应内容
  .Article-content {
    padding: 20px;
    .btn {
      width: 150px;
      display: block;
      margin: 0 auto;
      margin-bottom: 10px;
      background: #4b4f5f;
      color: white;
      padding: 10px;
      border-radius: 5px;
      cursor: pointer;
    }
    .content {
      padding: 20px;
    }
  }
}
</style>
