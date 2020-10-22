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
            <van-uploader preview-size="100px" :after-read="afterReada" :before-delete="deletea" v-model="fileData.fileLista" multiple :max-count="1" deletable />
            <span>{{addfile}}</span>
            <p>上传身份证正面</p>
          </div>
          <div>
            <van-uploader preview-size="100px" :after-read="afterReadb" :before-delete="deleteb" v-model="fileData.fileListb" multiple :max-count="1" />
            <span>+</span>
            <p>上传身份证反面</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <van-cell title="户籍地址" v-model="carmodel1" cancel-button-text :style="{ height: '50px' }" value is-link @click="showPopup"></van-cell>
  <van-popup v-model="show" position="bottom" :style="{ height: '50%' }">
    <van-cell-group>
      <van-area ref="area" value="110000" :area-list="areaList" @change="onChange" @confirm="show = false" @cancel="show = false" :columns-placeholder="['请选择', '请选择', '请选择']" />
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
    <van-button type="primary" color="#67CDC9" size="large" @click="
          next(
            username,
            usernumber,
            userurgent,
            urgentnumber,
            carmodel1,
            action,
            fileData
          )
        ">下一步</van-button>
  </div>

  <!-- 证件拍摄需知 显示隐藏遮罩层 -->
  <div class="xu">
    <!-- <van-button type="primary" text="显示遮罩层" @click="show2 = true" /> -->
    <van-overlay :show="show2">
      <div class="wrapper" @click.stop>
        <div class="info">
          <div class="top">
            <img src="../../assets/images/zy2.png" alt />
          </div>
          <div class="button">
            <van-button type="default" @click="showcertificates">知道了</van-button>
          </div>
        </div>
      </div>
    </van-overlay>
  </div>
</div>
</template>

<script>
import {
  API_USERID
} from "../../api/api";
import areaList from "../../assets/js/area";
import {
  Notify,
  Toast
} from "vant";
export default {
  data() {
    return {
      show: false, // 户籍地址
      show1: false, // 紧急联系人
      show2: false, // 遮盖层
      username: "", // 姓名
      usernumber: "", // 身份证号
      userurgent: "", // 紧急联系人
      urgentnumber: "", // 紧急联系人号码
      areaList, // 户籍地址列表
      carmodel1: "请选择",
      action: "请选择",
      addfile: "+", // 身份证正面是否上传 
      addside: "+", // 身份证反面是否上传
      actions: [{
          name: "家人",
        },
        {
          name: "朋友",
        },
        {
          name: "其他",
        },
      ],
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
      this.carmodel1 = areaName;
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
        console.log(result.length / 1024);
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
      return new File([ia], fileName, {
        type: mime,
      });
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
      API_USERID(url, data).then((res) => {
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
    showcertificates() {
      this.show2 = false;
      Notify({
        type: "primary",
        message: "再次点击即可上传",
      });

    },
    next: function (
      username,
      usernumber,
      userurgent,
      urgentnumber,
      carmodel1,
      action,
      fileData
    ) {
      if (username === "") {
        Notify("请正确输入名字");
      } else if (usernumber === "") {
        Notify("身份证号识别错误，请重新输入");
      } else if (fileData.fileLista == "") {
        Notify("身份证照片正面识别错误,请重新上传");
      } else if (fileData.fileListb == "") {
        Notify("身份证照片反面识别错误,请重新上传");
      } else if (carmodel1 === "请选择") {
        Notify("请选择户籍地址");
      } else if (userurgent === "") {
        Notify("紧急联系人信息不能为空");
      } else if (urgentnumber === "") {
        Notify("紧急联系人号码不能为空");
      } else if (action === "请选择") {
        Notify("请选择紧急联系人关系");
      } else {
        this.$router.replace("/examine/third");
        let storage = window.sessionStorage;
        let aa = JSON.parse(storage.Info);
        aa.username = username;
        aa.usernumber = usernumber;
        aa.userurgent = userurgent;
        aa.urgentnumber = urgentnumber;
        aa.carmodel1 = carmodel1;
        aa.action = action;
        aa.fileData = fileData;
        console.log(aa);
        console.log(storage.Info);
        console.log(storage);
        sessionStorage.setItem("Info", JSON.stringify(aa));
      }
    },
    async searchsome(options) {
      let {
        username,
        usernumber,
        userurgent,
        urgentnumber
      } = options;
      let data = await API_AREA_ALL();
      // console.log(data);
      this.area = data.data;
      // console.log(this.area);
    },
  },
  watch: {}
};
</script>

<style lang="less" scoped>
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

    >span {
      text-align: left;
      font-size: 15px;
      float: left;
    }

    >input {
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

        >div {
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

            .van-uploader__input {
              background-color: rgba(0, 0, 0, 0) !important;
            }

            .van-image {
              width: 143px;
              height: 81px;

              .van-image__img {
                width: 143px !important;
                height: 81px !important;
              }
            }
          }

          >span {
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

    >span {
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

      >img {
        width: 315px;
      }
    }

    .button {
      width: 100%;
      overflow: hidden;

      >.van-button {
        width: 100%;
        border: #fff;
        color: #68ceca;
      }
    }
  }
}
</style>
