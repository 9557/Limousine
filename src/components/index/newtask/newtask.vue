<template>
<div class="order">
  <div class="content" v-for="item in tableData" :key="item.id">
    <div class="content-item">
      <h1>{{item.order == 0?"送车":"还车"}}订单<span>
          <van-icon name="question-o" color="#999" size="14px" />
        </span></h1>
      <p>订单号：{{item.ordernumber}}</p>
      <p>剩余完成时间：1小时34分18秒</p>
    </div>
    <div class="content-item">
      <h3>车辆信息</h3>
      <p>车辆定位：{{item.carlocation}}</p>
      <p>车牌号码：{{item.caridcard}}</p>
      <p>车身颜色：{{item.carcolor}}</p>
      <p>车管人员：{{item.caradmin}}</p>
      <p>车管电话：{{item.customerphone}}</p>
    </div>
    <div class="content-item">
      <h3>{{item.order == 0?"送车":"还车"}}信息</h3>
      <p>客户姓名：{{item.caradmin}}</p>
      <p>客户电话：{{item.caradminnumber}}</p>
      <p>{{item.order == 0?"送车":"还车"}}定位：{{item.customerlocation}}</p>
    </div>
    <div class="content-item">
      <h3>特别说明</h3>
      <p>送还4s店后请让车管在签收单上签字</p>
    </div>
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [{
        order: 0, // 订单类型 0送车订单  1还车订单
        ordernumber: "D119123123001212922", // 订单号码
        surplustime: "", // 剩余完成时间 （需要时间的倒计时）
        carlocation: "北京昌平", // 车辆定位
        caridcard: "京A88888", // 车牌号码
        carcolor: "白色", // 车身颜色
        caradmin: "白起", // 车管人员
        caradminnumber: "1388888888", // 车管联系方式
        customername: "王五", // 客户姓名
        customerphone: "1398888888", // 客户电话
        customerlocation: "北京市朝阳区xxxxxxxxx" // 送车定位 或者 还车定位
      }, {
        order: 1, // 订单类型 0送车订单  1还车订单
        ordernumber: "D119123123001212921", // 订单号码
        surplustime: "", // 剩余完成时间 （需要时间的倒计时）
        carlocation: "北京昌平", // 车辆定位
        caridcard: "京A88888", // 车牌号码
        carcolor: "黄色", // 车身颜色
        caradmin: "嬴政", // 车管人员
        caradminnumber: "1388888888", // 车管联系方式
        customername: "赵四", // 客户姓名
        customerphone: "1398888888", // 客户电话
        customerlocation: "北京市朝阳区xxxxxxxxx" // 送车定位 或者 还车定位
      }]
    };
  },
  components: {},
  created: function () {

  }
};
</script>

<style lang="less" scoped>
.order {
  box-sizing: border-box;
  padding: 10px 15px 50px;

  h1 {
    font-size: 18px;
    text-align: left;
    line-height: 18px;

    // float: left;
    span {
      margin-left: 5px;
    }
  }

  h3 {
    // border: 1px solid #000;
  }

  > :first-child {
    margin-top: 50px;
  }
}

.content {
  box-sizing: border-box;
  width: 345px;
  margin: 10px auto;
  color: #333333;
  background-color: #fff;
  font-size: 14px;
  box-shadow: 1px 1px 5px 0rpx rgba(152, 152, 152, 0.2);
  border-radius: 5px;
  padding: 13px;
  overflow: hidden;
  text-align: left;
}

.content-item {
  font-size: 15px;
  border-bottom: 1px dashed #bbbbbb;
  padding: 15px 7px;
}

.content-item h3 {
  color: #68ceca;
  width: 80px;
  padding: 7px 0 7px 20px;
  margin-left: -19px;
  /* border: 1px solid #333; */
  border-radius: 0 80px 80px 0;
  box-shadow: 1px 1px 5px 0px rgba(152, 152, 152, 0.5);
  /* border-left: none; */
}

.content-item:last-child {
  border: none;
}
</style>
