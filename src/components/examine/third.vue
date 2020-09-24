<template>
  <div class="license">
    <!-- 驾驶证照片 -->
    <p>驾驶证照片</p>
    <div class="image">
      <div class="uploadInfo">
        <div class="cell">
          <!-- <van-uploader :after-read="afterRead" accept="image/*" multiple/>
          <img class="head-img" src="" ref="goodsImg"/>-->
          <div class="idCardbox" @click.once.prevent="show2 = true">
            <div>
              <van-uploader
                preview-size="100px"
                :after-read="afterReada"
                :before-delete="deletea"
                v-model="fileData.fileLista"
                multiple
                :max-count="1"
              />
              <span>+</span>
              <p>上传驾驶证正面</p>
            </div>
            <div>
              <van-uploader
                preview-size="100px"
                :after-read="afterReadb"
                :before-delete="deleteb"
                v-model="fileData.fileListb"
                multiple
                :max-count="1"
              />
              <span>+</span>
              <p>上传驾驶证反面</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 驾驶证档案编号 -->
    <div class="minput">
      <span>驾驶证档案编号</span>
      <input v-model="Registration" type="text" placeholder="请输入编号" />
    </div>
    <!-- 准驾车型 -->
    <div class="minput">
      <span>准驾车型</span>
      <input v-model="allow" type="text" placeholder="请输入车型" />
    </div>
    <!-- 初领驾驶证日期 -->
    <van-cell title="初领驾驶证日期" :value="date" is-link @click="show = true" v-model="datetimer"></van-cell>
    <van-calendar
      v-model="show"
      :show-confirm="false"
      color="#67CDC9"
      first-day-of-week="1"
      @confirm="onConfirm"
      :max-date="maxDate"
      :min-date="minDate"
    />
    <div class="next">
      <van-button type="primary" color="#67CDC9" size="large" @click="next">下一步</van-button>
    </div>

    <!-- 证件拍摄需知 显示隐藏遮罩层 -->
    <div class="xu">
      <!-- <van-button type="primary" text="显示遮罩层" @click="show2 = true" /> -->
      <van-overlay :show="show2" @click="show2 = false">
        <div class="wrapper" @click.stop>
          <div class="info">
            <div class="top">
              <img src="../../assets/images/zy1.png" alt />
            </div>
            <div class="button">
              <van-button type="default" @click="show2=false">知道了</van-button>
            </div>
          </div>
        </div>
      </van-overlay>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fileData: {
        fileLista: [],
        fileListb: [],
      },
      isloading: false,
      isfileLista: false,
      isfileListb: false,
      Registration: "", // 驾驶证编号
      allow: "", // 准驾车型
      datetimer: "请选择",
      date: "",
      show: false,
      maxDate: new Date(2020, 9, 14),
      minDate: new Date(1990, 0, 1),
      show2: false, // 遮盖层
    };
  },
  components: {},
  methods: {
    deletea() {
      this.isfileLista = false;
      return true;
    },
    deleteb() {
      this.isfileListb = false;
      return true;
    },
    afterReada(file) {
      this.isloading = true;
      // 此时可以自行将文件上传至服务器
      // let _this=this;
      // let params = {
      //   file:file.file,
      //   side:'face'
      // }
      this.tophoto("/applyvehicle/checkIdCard", file.file, "face");
      // let filelis = this.tophoto(file.file)
      // this.recognition('/applyvehicle/checkIdCard',file.file,'face')
      // let data = new FormData()
      // data.append('file', file.file)
      // data.append('side', 'face')
      // this.$post('/applyvehicle/checkIdCard',data).then(res=>{
      //   console.log(res)
      //   if(res.code=='200'){
      //     this.$toast(res.msg);
      //   }else{
      //     this.$toast(res.msg);
      //   }
      // }).catch(error=>{
      //   console.log(error)
      // })
    },
    afterReadb(file) {
      this.isloading = true;
      this.tophoto("/applyvehicle/checkIdCard", file.file, "back");
      // this.recognition('/applyvehicle/checkIdCard',file.file,'back')
      console.log(file);
    },
    formatDate(date) {
      return `${date.getYear() + 1900}年${date.getMonth() + 1}月${date.getDate()}日`;
    },
    onConfirm(date) {
      this.show = false;
      this.date = this.formatDate(date);
      this.datetimer = this.formatDate(date);
    },
    next: function () {
      this.$router.replace("/examine/fourth");
      // activeIndex++;
    },
  },
};
</script>

<style scoped lang="less">
.image {
  width: 90%;
  height: 128px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  .uploadInfo {
    width: 100%;
    font-size: 16px;
    color: #333;
    background: #f0f0f0;
    .cell-title {
      border-bottom: 1px #f0f0f0 solid;
      line-height: 40px;
      padding: 0 20px;
      background: #fff;
    }
    .idCardbox {
      display: flex;
      justify-content: space-around;
      background: #fff;
      padding: 15px;
      > div {
        position: relative;
        width: 165px;
        height: 81px;
        background-color: #868686;
        overflow: hidden;
        border-radius: 10px;
        margin: 0 5px;
        color: #fff;
        .van-uploader {
          position: absolute;
          z-index: 1;
          top: 0;
          left: 20px;
          width: 165px;
          height: 81px;
          opacity: 0;
        }
        > span {
          position: absolute;
          top: 15px;
          left: 65px;
          font-size: 30px;
        }
        p {
          position: absolute;
          top: 45px;
          left: 30px;
          text-align: center;
          line-height: 20px;
          font-size: 12px;
          margin: 0;
        }
      }
    }
  }
}
.license {
  padding: 10px;
  p {
    font-size: 15px;
    text-align: left;
    margin: 0 20px;
  }
  .minput {
    position: relative;
    z-index: 1;
    width: 90%;
    height: 50px;
    margin: 0 auto;
    line-height: 50px;
    border-bottom: 1px solid #eee;
    overflow: hidden;
    > span {
      text-align: left;
      font-size: 15px;
      float: left;
    }
    > input {
      height: 47px;
      border: none;
      text-align: right;
      float: right;
    }
  }
  .van-cell__title {
    text-align: left;
  }
  .next {
    margin-top: 38px;
    .van-button {
      margin-top: 12px;
      width: 345px;
      height: 45px;
    }
  }
  // 遮罩层
  .xu {
    position: absolute;
    top: 0;
    // z-index: -1;
    width: 345px;
    height: 425px;
    .info {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      margin: auto;
      box-sizing: border-box;
      width: 345px;
      height: 425px;
      background-color: #fff;
      border-radius: 5px;
      padding: 20px 10px 0;
      overflow: hidden;
      .top {
        width: 315px;
        background-color: #fff;
        > img {
          width: 315px;
        }
      }
      .button {
        width: 100%;
        overflow: hidden;
        > .van-button {
          width: 100%;
          border: #fff;
          color: #68ceca;
        }
      }
    }
  }
}
</style>