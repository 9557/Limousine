<template>
  <div class="second">
    <div class="minput">
      <span>姓名</span>
      <input v-model="username" type="text" placeholder="请输入姓名" />
    </div>
    <div class="minput">
      <span>身份证号</span>
      <input v-model="usernumber" type="number" placeholder="请输入身份证号" />
    </div>
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
              <p>上传身份证正面</p>
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
              <p>上传身份证反面</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <van-cell
      title="报名城市"
      v-model="carmodel"
      cancel-button-text
      :style="{ height: '50px' }"
      value
      is-link
      @click="showPopup"
    ></van-cell>
    <van-popup v-model="show" position="bottom" :style="{ height: '50%' }">
      <van-cell-group>
        <van-area
          ref="area"
          value="110000"
          :area-list="areaList"
          @change="onChange"
          @confirm="show = false"
          @cancel="show = false"
        />
      </van-cell-group>
    </van-popup>
    <div class="minput">
      <span>紧急联系人姓名</span>
      <input v-model="userurgent" type="text" placeholder="请输入姓名" />
    </div>
    <div class="minput">
      <span>紧急联系人号码</span>
      <input v-model="urgentnumber" type="number" placeholder="请输入号码" />
    </div>
    <!-- 紧急联系人关系选择 -->
    <van-cell is-link title="联系人关系" v-model="action" @click="show1 = true"></van-cell>
    <van-action-sheet v-model="show1" :actions="actions" @select="onSelect" close-on-click-action />
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
              <img src="../../assets/images/zy2.png" alt />
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
import { API_USERINFO_INSET } from "../../api/api";
import areaList from "../../assets/js/area";
import { Toast } from "vant";
export default {
  data() {
    return {
      show: false, // 报名城市
      show1: false, // 紧急联系人
      show2: false, // 遮盖层
      username: "", // 姓名
      usernumber: "", // 身份证号
      userurgent: "", // 紧急联系人
      urgentnumber: "", // 紧急联系人号码
      areaList, // 报名城市列表
      carmodel: "请选择",
      action: "请选择",
      actions: [{ name: "家人" }, { name: "朋友" }, { name: "其他" }],
      fileData: {
        fileLista: [],
        fileListb: [],
      },
      form: {
        btnDisabled: true,
        btnLoading: false,
      },
      isfileLista: false,
      isfileListb: false,
      idcardnum: "",
      drivingnum: "",
      idcardname: "",
    };
  },
  components: {},
  methods: {
    showPopup() {
      this.show = true;
    },
    onChange: function (picker, value, index) {
      console.log("当前值：" + value + "当前索引：" + index);

      let areaName = "";
      for (var i = 0; i < value.length; i++) {
        areaName = areaName + value[i].name + "";
      }
      this.carmodel = areaName;
    },
    async onSelect(item) {
      // 默认情况下点击选项时不会自动收起
      // 可以通过 close-on-click-action 属性开启自动收起
      this.show = false;
      Toast(item.name);
      console.log(item.name);
      this.action = item.name;
      // let data = await API_USERINFO_INSET({
      //   name: this.username,
      //   unionid: this.usernumber,
      //   urgentcontacts: this.userurgent,
      //   urgentphone: this.urgentnumber,
      //   relation: this.actions[1],
      // });
    },
    deletea() {
      this.isfileLista = false;
      return true;
    },
    deleteb() {
      this.isfileListb = false;
      return true;
    },
    tophoto(url, file, type) {
      //   this.photoshow=true
      this.isloaded = false;
      var that = this;
      const inputFile = file;
      let reader = new FileReader(); //html5读文件
      reader.readAsDataURL(inputFile); //转BASE64
      console.log(reader);
      reader.onloadend = function () {
        let result = this.result;
        let img = new Image();
        img.src = result;
        // console.log('********未压缩前的图片大小********')
        // console.log(result.length / 1024)
        img.onload = function () {
          let data = that.compress(img, 0.3);
          // data=data.split(",")
          //  console.log(data[1])
          // console.log(that.convertBase64UrlToBlob(data[1]))
          var timestamp = new Date().getTime() + ".jpg";
          let filelittle = that.base64ToFile(data, timestamp);
          that.recognition(url, filelittle, type);
          // return data[1]
          // that.photoupload(data[1])
        };
      };
    },
    //将base64转换为blob
    base64ToFile(urlData, fileName) {
      let arr = urlData.split(",");
      console.log(arr);
      let mime = arr[0].match(/:(.*?);/)[1];
      let bytes = atob(arr[1]); // 解码base64
      let n = bytes.length;
      let ia = new Uint8Array(n);
      while (n--) {
        ia[n] = bytes.charCodeAt(n);
      }
      return new File([ia], fileName, { type: mime });
    },
    //调用

    // 压缩图片
    compress(img, size) {
      let canvas = document.createElement("canvas");
      let ctx = canvas.getContext("2d");
      // let initSize = img.src.length
      let width = img.width;
      let height = img.height;
      canvas.width = width;
      canvas.height = height;
      // 铺底色
      ctx.fillStyle = "#fff";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, 0, 0, width, height);
      //进行最小压缩
      let ndata = canvas.toDataURL("image/jpeg", size);
      // console.log(canvas.toDataURL())
      // console.log('*******压缩后的图片大小*******')
      // console.log(ndata)
      // console.log(ndata.length / 1024)
      return ndata;
    },
    recognition(url, file, side) {
      let _this = this;
      let data = new FormData();
      data.append("file", file);
      data.append("side", side);
      this.$post(url, data).then((res) => {
        console.log(res);
        _this.$toast(res.msg);
        if (res.code == "200") {
          if (url == "/applyvehicle/checkIdCard" && side == "face") {
            _this.idcardnum = res.data.num;
            _this.idcardname = res.data.name;
            _this.isfileLista = true;
            sessionStorage.setItem("idCardFace", res.imgUrl);
            sessionStorage.setItem("idCardFaceInfo", JSON.stringify(res.data));
          }
          if (url == "/applyvehicle/checkIdCard" && side == "back") {
            _this.isfileListb = true;
            sessionStorage.setItem("idCardBack", res.imgUrl);
            sessionStorage.setItem("idCardBackInfo", JSON.stringify(res.data));
          }
          if (url == "/applyvehicle/driverInfo" && side == "face") {
            _this.drivingnum = res.data.num;
            _this.isfileListc = true;
            sessionStorage.setItem("driverFace", res.imgUrl);
            sessionStorage.setItem("driverFaceInfo", JSON.stringify(res.data));
          }
          if (url == "/applyvehicle/driverInfo" && side == "back") {
            _this.isfileListd = true;
            sessionStorage.setItem("driverback", res.imgUrl);
            sessionStorage.setItem("driverbackInfo", JSON.stringify(res.data));
          }
        } else {
          if (url == "/applyvehicle/checkIdCard" && side == "face") {
            _this.isfileLista = false;
            sessionStorage.removeItem("idCardFace");
          }
          if (url == "/applyvehicle/checkIdCard" && side == "back") {
            _this.isfileListb = false;
            sessionStorage.removeItem("idCardBack");
          }
          if (url == "/applyvehicle/driverInfo" && side == "face") {
            _this.isfileListc = false;
            sessionStorage.removeItem("driverFace");
          }
          if (url == "/applyvehicle/driverInfo" && side == "back") {
            _this.isfileListd = false;
            sessionStorage.removeItem("driverback");
          }
        }
      });
    },
    afterReada(file) {
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
      this.tophoto("/applyvehicle/checkIdCard", file.file, "back");
      // this.recognition('/applyvehicle/checkIdCard',file.file,'back')
      console.log(file);
    },
    submitForm() {
      if (!this.isfileLista) {
        this.$toast("身份证正面有误，请重新上传");
        return false;
      }
      if (!this.isfileListb) {
        this.$toast("身份证反面有误，请重新上传");
        return false;
      }
      if (!this.isfileListc) {
        this.$toast("驾驶证正面有误，请重新上传");
        return false;
      }
      if (!this.isfileListd) {
        this.$toast("驾驶证反面有误，请重新上传");
        return false;
      }
      if (this.idcardnum != this.drivingnum) {
        this.$toast("身份证与驾驶证不一致，请重新上传");
        return false;
      }
      sessionStorage.setItem("useridname", this.idcardname);
      this.$router.go(-1);
    },
    next: function () {
      this.$router.replace("/examine/third");
      // activeIndex++;
    },
    async searchsome(options) {
      let { username, usernumber, userurgent, urgentnumber } = options;
      let data = await API_AREA_ALL();
      // console.log(data);
      this.area = data.data;
      // console.log(this.area);
    },
  },
};
</script>

<style scoped lang="less">
.van-field__body {
  // float: right;
  text-align: right;
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
.second {
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
  .image {
    width: 90%;
    height: 128px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    .loadingbox {
      position: absolute;
      top: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100%;
      width: 100%;
      .loading {
        width: 130px;
        height: 130px;
        background: rgba(0, 0, 0, 0.5);
        border-radius: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #fff;
      }
      .van-loading__text {
        color: #fff;
      }
    }
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
            .van-image_img{
              width: 143px;
              height: 81px;
              opacity: 1 !important;
            }
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
  .van-cell__title {
    overflow: hidden;
    > span {
      float: left;
      margin-left: 3px;
    }
  }

  .next {
    margin-top: 38px;
    .van-button {
      margin-top: 12px;
      width: 345px;
      height: 45px;
    }
  }
}
// 遮罩层
.xu {
  position: absolute;
  top: 0;
  // z-index: -1;
  width: 300px;
  height: 425px;
  .info {
    box-sizing: border-box;
    width: 345px;
    background-color: #fff;
    border-radius: 5px;
    padding: 20px 10px 0;
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
</style>