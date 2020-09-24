<template>
  <!-- 报名第一步 -->
  <div class="first">
    <van-cell
      title="报名城市"
      v-model="carmodel"
      cancel-button-text
      :style="{ height: '50px' }"
      is-link
      @click="showPopup"
    ></van-cell>
    <van-popup v-model="show" position="bottom" :style="{ height: '50%' }">
      <van-area
        ref="area"
        value="110000"
        title="请选择地区"
        :area-list="areaList"
        @change="onChange"
        @confirm="onAreaConfirm()"
        @cancel="onCancel()"
        :columns-num="2"
        :columns-placeholder="['请选择', '请选择']"
      />
    </van-popup>
    <div class="minput">
      <span>报名地点</span>
      <input v-model="Registration" type="text" placeholder="请输入报名地点" />
    </div>
    <van-cell
      title="居住地"
      v-model="areamodel"
      is-link
      @click="showPopup1"
      :style="{ height: '50px' }"
    ></van-cell>
    <van-popup v-model="show1" position="bottom" :style="{ height: '50%' }">
      <van-area
        ref="area"
        value="110000"
        title="请选择居住地点"
        :columns-num="2"
        :area-list="areaList"
        @change="onChange1"
        @confirm="show1 = false"
        @cancel="show1 = false"
        :columns-placeholder="['请选择','请选择','请选择']"
      />
    </van-popup>
    <div class="minput">
      <span>居住地点</span>
      <input v-model="live" type="text" placeholder="请输入居住地点" />
    </div>
    <!-- 下一步须知 -->
    <div class="next">
      <van-checkbox v-model="checked" shape="square">
        <span>阅读并同意四维代驾司机加盟须知</span>
      </van-checkbox>
      <van-button v-if="checked" type="primary" color="#67CDC9" size="large" @click="next()">下一步</van-button>
      <van-button v-else type="primary" color="#67CDC9" size="large" disabled>下一步</van-button>
    </div>
  </div>
</template>
<script>
import { Form } from "vant";
import areaList from "../../assets/js/area";
import { API_AREA_ALL, API_PROTOCOL_ID } from "../../api/api";
import { delay } from "../../assets/js/utils";
import area from "../../assets/js/area";
export default {
  data() {
    return {
      show: false, // 报名城市显示隐藏
      show1: false, // 报名地区显示隐藏
      Registration: "", // 报名地点填写
      live: "", // 居住地区填写
      areaList, // 报名城市列表
      areaList1: [], // 居住城市列表
      checked: false, // 多选框勾选
      carmodel: "请选择", // 具体报名城市
      areamodel: "请选择", // 具体居住城市
      activeIndex: "",
      loading: false,
      code: 0,
      data: [],
    };
  },
  components: {},
  methods: {
    async showPopup() {
      this.show = true;
      let data = await API_AREA_ALL();
      // console.log(data);
      let //  areaList = {},
        province_list = {}, // 省数据对象
        city_list = {}, // 市数据对象
        province, // 省名称
        provinceId, // 省序列号
        list = [],
        city, // 城市名称
        cityId; // 城市序列号
      this.data = data.data;
      for (var i = 0; i < this.data.length; i++) {
        province = this.data[i].province;
        provinceId = this.data[i].provinceId;
        list = this.data[i].list;
        // 给省数据对象设置新的属性名属性值
        province_list[provinceId] = province;
        // console.log(list);
        list = list ? list : [];
        // console.log(list[0]);
        for (var j = 0; j < list.length; j++) {
          cityId = list[j].cityId;
          city = list[j].city;
          city_list[cityId] = city;
        }
      }
      // console.log(province_list); // 省数据对象
      // console.log(city_list); // 市数据对象
      areaList.province_list = province_list;
      areaList.city_list = city_list;
      // console.log(areaList);
      console.log(areaList);
      this.searchsome({
        area: areaList,
      });
      console.log(area);
    },
    showPopup1() {
      this.show1 = true;
    },
    onChange(picker, index, value) {
      console.log("当前值：" + value + "当前索引：" + index);
      let areaName = "";
      for (var i = 0; i < index.length; i++) {
        areaName = areaName + index[i].name + "";
      }
      this.carmodel = areaName;
      console.log(areaName);
    },
    onChange1(picker, value, index) {
      console.log("当前值：" + value + "当前索引：" + index);

      let areaName = "";
      for (var i = 0; i < value.length; i++) {
        areaName = areaName + value[i].name + "";
      }
      this.areamodel = areaName;
    },
    next: function () {
      this.$router.replace("/examine/second");
    },
    onCancel() {
      this.show = false;
      // this.$refs.area.reset()
    },

    //点击确定
    onAreaConfirm() {
      this.show = false;
      console.log(areaList);
      console.log(area);
    },
    // 请求方法
    async searchsome(options) {
      let { Registration, live } = options;
      let data = await API_AREA_ALL();
      // console.log(data);
      this.area = data.data;
      // console.log(this.area);
    },
  },
  /* watch:{
    activeIndex(newVal,oldVal) {
      this.iactiveIndex = newVal;
    },
    iactiveIndex(newVal, oldVal) {
        this.$emit('update', newVal);
    }
  } */
};
</script>

<style scoped lang="less">
.content {
  padding: 16px 16px 160px;
}
.first {
  padding: 0 10px;
  line-height: 30px;
  font-size: 15px;
  .van-cell__title {
    overflow: hidden;
    line-height: 30px;
    > span {
      float: left;
    }
  }
  .van-cell__value {
    line-height: 30px;
  }
  .van-icon {
    line-height: 30px;
  }
  .minput {
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
  .next {
    margin-top: 158px;
    .van-checkbox {
      font-size: 13px;
      margin-left: 7px;
    }
    .van-button {
      margin-top: 12px;
      width: 345px;
      height: 45px;
    }
  }
}
</style>