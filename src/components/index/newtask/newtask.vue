<template>
  <div class="order">
    <div class="content">
      <div class="content-item">
        <h1>送车订单<span><van-icon name="question-o" color="#999" size="14px" /></span></h1>
        <p>订单号：D119123123001212922</p>
        <p>剩余完成时间：1小时34分18秒</p>
      </div>
      <div class="content-item">
        <h3>车辆信息</h3>
        <p>车辆定位：北京市昌平区xxxxxxxxx</p>
        <p>车牌号码：京A88888</p>
        <p>车身颜色：白色</p>
        <p>车管人员：张三</p>
        <p>车管电话：1388888888</p>
      </div>
      <div class="content-item">
        <h3>送车信息</h3>
        <p>客户姓名：王五</p>
        <p>客户电话：1398888888</p>
        <p>送车定位：北京市朝阳区xxxxxxxxx</p>
      </div>
      <div class="content-item">
        <h3>特别说明</h3>
        <p>送还4s店后请让车管在签收单上签字</p>
      </div>
    </div>
     <div class="content">
      <div class="content-item">
        <h1>还车订单<span><van-icon name="question-o" color="#999" size="14px" /></span></h1>
        <p>订单号：D119123123001212922</p>
        <p>剩余完成时间：1小时34分18秒</p>
      </div>
      <div class="content-item">
        <h3>车辆信息</h3>
        <p>车辆定位：北京市昌平区xxxxxxxxx</p>
        <p>车牌号码：京A88888</p>
        <p>车身颜色：白色</p>
        <p>车管人员：张三</p>
        <p>车管电话：1388888888</p>
      </div>
      <div class="content-item">
        <h3>送车信息</h3>
        <p>客户姓名：王五</p>
        <p>客户电话：1398888888</p>
        <p>送车定位：北京市朝阳区xxxxxxxxx</p>
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
    return {};
  },
  components: {},
};
</script>

<style scoped lang="less">
.order{
  box-sizing: border-box;
  padding:10px 15px 50px;
  h1{
    font-size: 18px;
    text-align: left;
    line-height: 18px;
    // float: left;
    span{
      margin-left: 5px;
    }
  }
  h3{
    // border: 1px solid #000;
  }
  >:first-child{
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
