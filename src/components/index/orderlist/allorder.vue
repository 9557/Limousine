<template>
<div class="allorder">
  <van-tabs v-model="activeName" color="#67CDC9" title-active-color="#67CDC9" swipeable animated lazy-render sticky offset-top="46px">
    <van-tab title="全部订单" name="a">
      <div class="info_list">
        <div class="info" v-for="(item,index) in tableData" :key="item.id">
          <h3>{{item.order == 0 ? "送车":"还车"}}订单</h3>
          <p>
            订单号
            <span>{{item.ordernumber}}</span>
          </p>
          <p>
            发起时间
            <span>{{item.starttime}}</span>
          </p>
          <p>
            取消时间
            <span>{{item.endtime}}</span>
          </p>
          <!-- 需要展开的部分 -->
          <div v-show="aIndex == index">
            <div class="content-item showtop">
              <h3>车辆信息</h3>
              <p>车辆定位：{{item.carlocation}}</p>
              <p>车牌号码：{{item.caridcard}}</p>
              <p>车身颜色：{{item.carcolor}}</p>
              <p>车管人员：{{item.caradmin}}</p>
              <p>车管电话：{{item.caradminnumber}}</p>
            </div>
            <div class="content-item">
              <h3>{{item.order == 0 ? "送车":"还车"}}信息</h3>
              <p>车管人员：{{item.customername}}</p>
              <p>车管电话：{{item.customerphone}}</p>
              <p>{{item.order == 0 ? "送车":"还车"}}定位：{{item.customerlocation}}</p>
            </div>
            <div class="content-item active">
              <h3>特别说明</h3>
              <p>送还4s店后请让车管在签收单上签字</p>
            </div>
          </div>
          <!-- 展开收起切换 -->
          <div class="show" @click="clickTitle(index)">
            <div v-if="aIndex == index">
              <div>
                收起
                <span>
                  <van-icon name="arrow-up" />
                </span>
              </div>
            </div>
            <div v-else>
              <div>
                展开
                <span>
                  <van-icon name="arrow-down" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </van-tab>
    <van-tab title="送车订单" name="b">
      <div class="info_list">
        <div class="info" v-for="(item,index) in tableData" :key="item.id">
          <h3>送车订单</h3>
          <p>
            订单号
            <span>{{item.ordernumber}}</span>
          </p>
          <p>
            发起时间
            <span>{{item.starttime}}</span>
          </p>
          <p>
            取消时间
            <span>{{item.endtime}}</span>
          </p>
          <!-- 需要展开的部分 -->
          <div v-show="aIndex == index">
            <div class="content-item showtop">
              <h3>车辆信息</h3>
              <p>车辆定位：{{item.carlocation}}</p>
              <p>车牌号码：{{item.caridcard}}</p>
              <p>车身颜色：{{item.carcolor}}</p>
              <p>车管人员：{{item.caradmin}}</p>
              <p>车管电话：{{item.caradminnumber}}</p>
            </div>
            <div class="content-item">
              <h3>送车信息</h3>
              <p>车管人员：{{item.customername}}</p>
              <p>车管电话：{{item.customerphone}}</p>
              <p>送车定位：{{item.customerlocation}}</p>
            </div>
            <div class="content-item active">
              <h3>特别说明</h3>
              <p>送还4s店后请让车管在签收单上签字</p>
            </div>
          </div>
          <!-- 展开收起切换 -->
          <div class="show" @click="clickTitle(index)">
            <div v-if="aIndex == index">
              <div>
                收起
                <span>
                  <van-icon name="arrow-up" />
                </span>
              </div>
            </div>
            <div v-else>
              <div>
                展开
                <span>
                  <van-icon name="arrow-down" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </van-tab>
    <van-tab title="还车订单" name="c">
      <div class="info_list">
        <div class="info" v-for="(item,index) in tableData" :key="item.id">
          <h3>还车订单</h3>
          <p>
            订单号
            <span>{{item.ordernumber}}</span>
          </p>
          <p>
            发起时间
            <span>{{item.starttime}}</span>
          </p>
          <p>
            取消时间
            <span>{{item.endtime}}</span>
          </p>
          <!-- 需要展开的部分 -->
          <div v-show="aIndex == index">
            <div class="content-item showtop">
              <h3>车辆信息</h3>
              <p>车辆定位：{{item.carlocation}}</p>
              <p>车牌号码：{{item.caridcard}}</p>
              <p>车身颜色：{{item.carcolor}}</p>
              <p>车管人员：{{item.caradmin}}</p>
              <p>车管电话：{{item.caradminnumber}}</p>
            </div>
            <div class="content-item">
              <h3>还车信息</h3>
              <p>车管人员：{{item.customername}}</p>
              <p>车管电话：{{item.customerphone}}</p>
              <p>还车定位：{{item.customerlocation}}</p>
            </div>
            <div class="content-item active">
              <h3>特别说明</h3>
              <p>送还4s店后请让车管在签收单上签字</p>
            </div>
          </div>
          <!-- 展开收起切换 -->
          <div class="show" @click="clickTitle(index)">
            <div v-if="aIndex == index">
              <div>
                收起
                <span>
                  <van-icon name="arrow-up" />
                </span>
              </div>
            </div>
            <div v-else>
              <div>
                展开
                <span>
                  <van-icon name="arrow-down" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </van-tab>
  </van-tabs>
</div>
</template>

<script>
export default {
  data() {
    return {
      aIndex: "",
      activeName: "a",
      btnshow: 0, // 控制展开收起显示隐藏
      tableData: [{
        order: 0, // 订单类型 0送车订单  1还车订单
        ordernumber: "D119123123001212922", // 订单号码
        starttime: "2020/6/12 09:49:10",
        endtime: "2020/6/12 13:50:30",
        carlocation: "北京昌平", // 车辆定位
        caridcard: "京A88888", // 车牌号码
        carcolor: "白色", // 车身颜色
        caradmin: "阿珂", // 车管人员
        caradminnumber: "1388888888", // 车管联系方式
        customername: "高渐离", // 客户姓名
        customerphone: "1398888888", // 客户电话
        customerlocation: "北京市朝阳区xxxxxxxxx", // 送车定位 或者 还车定位
        show: false
      }, {
        order: 1, // 订单类型 0送车订单  1还车订单
        ordernumber: "D119123123001212921", // 订单号码
        starttime: "2020/5/12 09:49:10",
        endtime: "2020/5/12 13:50:30",
        carlocation: "北京昌平", // 车辆定位
        caridcard: "京A88888", // 车牌号码
        carcolor: "黄色", // 车身颜色
        caradmin: "嬴政", // 车管人员
        caradminnumber: "1388888888", // 车管联系方式
        customername: "白起", // 客户姓名
        customerphone: "1398888888", // 客户电话
        customerlocation: "北京市朝阳区xxxxxxxxx", // 送车定位 或者 还车定位
        show: false
      }, {
        order: 1, // 订单类型 0送车订单  1还车订单
        ordernumber: "D119123123001212921", // 订单号码
        starttime: "2020/5/12 09:49:10",
        endtime: "2020/5/12 13:50:30",
        carlocation: "北京昌平", // 车辆定位
        caridcard: "京A88888", // 车牌号码
        carcolor: "黄色", // 车身颜色
        caradmin: "嬴政", // 车管人员
        caradminnumber: "1388888888", // 车管联系方式
        customername: "白起", // 客户姓名
        customerphone: "1398888888", // 客户电话
        customerlocation: "北京市朝阳区xxxxxxxxx", // 送车定位 或者 还车定位
        show: false
      }]
    };
  },
  components: {},
  methods: {
    clickTitle: function (index) {

      if (this.aIndex == index) {
        this.aIndex = -1;
      } else {
        this.aIndex = index;
      }
    }
  },
};
</script>

<style lang="less" scoped>
.info_list {
  box-sizing: border-box;
  width: 100%;
  // height: 527px;
  padding: 15px;
  background-color: #efefef;
  min-height: 596px !important;

  .info {
    box-sizing: border-box;
    padding: 5px 13px 10px;
    background-color: #fff;
    margin-bottom: 50px;
    border-radius: 5px;
    line-height: 15px;

    h3 {
      text-align: left;
      font-size: 18px;
      color: #67cdc9;
      line-height: 25px;
    }

    p {
      font-size: 15px;
      text-align: left;
      overflow: hidden;

      span {
        float: right;
        text-align: right;
        color: #999999;
      }
    }

    .show {
      color: #67cdc9;
      font-size: 15px;
      overflow: hidden;
      margin: 0 auto;

      >div {
        line-height: 20px;
        width: 46px;
        overflow: hidden;
        margin: 0 auto;

        span {
          float: right;
          height: 20px;
          line-height: 20px;
        }
      }
    }
  }
}

.content-item {
  font-size: 15px;
  border-bottom: 1px dashed #bbbbbb;
  padding: 15px 7px;
}

.showtop {
  border-top: 1px dashed #bbbbbb;
}

.content-item h3 {
  color: #68ceca;
  width: 80px;
  padding: 7px 0 7px 20px;
  margin-left: -21px;
  /* border: 1px solid #333; */
  border-radius: 0 80px 80px 0;
  box-shadow: 1px 1px 5px 0px rgba(152, 152, 152, 0.5);
  border-left: none;
}

.active {
  border: none;
}

.allorder {
  margin-top: 46px;
}
</style>
