<template>
  <div class="allorder">
    <van-tabs v-model="activeName" color="#67CDC9" title-active-color="#67CDC9" swipeable animated lazy-render sticky offset-top="46px">
      <van-tab title="全部订单" name="a">
        <div class="info_list">
          <div class="info">
            <h3>还车订单</h3>
            <p>
              订单号
              <span>SWBHD1119292922</span>
            </p>
            <p>
              发起时间
              <span>2020/5/12 09:49:10</span>
            </p>
            <p>
              取消时间
              <span>2020/5/12 09:49:10</span>
            </p>
            <!-- 需要展开的部分 -->
            <div v-if="btnshow === 1">
              <div class="content-item showtop">
                <h3>车辆信息</h3>
                <p>车辆定位：北京市昌平区xxxxxxxxx</p>
                <p>车牌号码：京A88888</p>
                <p>车身颜色：白色</p>
                <p>车管人员：张三</p>
                <p>车管电话：1388888888</p>
              </div>
              <div class="content-item">
                <h3>还车信息</h3>
                <p>车管人员：王五</p>
                <p>车管电话：1398888888</p>
                <p>还车定位：北京市朝阳区xxxxxxxxx</p>
              </div>
              <div class="content-item active">
                <h3>特别说明</h3>
                <p>送还4s店后请让车管在签收单上签字</p>
              </div>
            </div>
            <!-- 展开收起切换 -->
            <div class="show" @click="btnhide">
              <div v-if="btnshow === 1">
                收起
                <span>
                  <van-icon name="arrow-up" />
                </span>
              </div>
              <div v-else>
                展开
                <span>
                  <van-icon name="arrow-down" />
                </span>
              </div>
            </div>
          </div>
          <div class="info">
            <h3>送车订单</h3>
            <p>
              订单号
              <span>SWBHD1119292922</span>
            </p>
            <p>
              发起时间
              <span>2020/5/12 09:49:10</span>
            </p>
            <p>
              取消时间
              <span>2020/5/12 09:49:10</span>
            </p>
            <!-- 需要展开的部分 -->
            <div v-if="btnshow === 1">
              <div class="content-item showtop">
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
              <div class="content-item active">
                <h3>特别说明</h3>
                <p>送还4s店后请让车管在签收单上签字</p>
              </div>
            </div>
            <!-- 展开收起切换 -->
            <div class="show" @click="btnhide">
              <div v-if="btnshow === 1">
                收起
                <span>
                  <van-icon name="arrow-up" />
                </span>
              </div>
              <div v-else>
                展开
                <span>
                  <van-icon name="arrow-down" />
                </span>
              </div>
            </div>
            <!-- 上下箭头符号 -->
          </div>
          <div class="info">
            <h3>还车订单</h3>
            <p>
              订单号
              <span>SWBHD1119292922</span>
            </p>
            <p>
              发起时间
              <span>2020/5/12 09:49:10</span>
            </p>
            <p>
              取消时间
              <span>2020/5/12 09:49:10</span>
            </p>
            <!-- 需要展开的部分 -->
            <div v-if="btnshow === 1">
              <div class="content-item showtop">
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
              <div class="content-item active">
                <h3>特别说明</h3>
                <p>送还4s店后请让车管在签收单上签字</p>
              </div>
            </div>
            <!-- 展开收起切换 -->
            <div class="show" @click="btnhide">
              <div v-if="btnshow === 1">
                收起
                <span>
                  <van-icon name="arrow-up" />
                </span>
              </div>
              <div v-else>
                展开
                <span>
                  <van-icon name="arrow-down" />
                </span>
              </div>
            </div>
            <!-- 上下箭头符号 -->
          </div>
        </div>
      </van-tab>
      <van-tab title="送车订单" name="b">
        <div class="info_list">
          <div class="info">
            <h3>送车订单</h3>
            <p>
              订单号
              <span>SWBHD1119292922</span>
            </p>
            <p>
              发起时间
              <span>2020/5/12 09:49:10</span>
            </p>
            <p>
              取消时间
              <span>2020/5/12 09:49:10</span>
            </p>
            <!-- 需要展开的部分 -->
            <div v-if="btnshow === 1">
              <div class="content-item showtop">
                <h3>车辆信息</h3>
                <p>车辆定位：北京市昌平区xxxxxxxxx</p>
                <p>车牌号码：京A88888</p>
                <p>车身颜色：白色</p>
                <p>车管人员：张三</p>
                <p>车管电话：1388888888</p>
              </div>
              <div class="content-item">
                <h3>还车信息</h3>
                <p>车管人员：王五</p>
                <p>车管电话：1398888888</p>
                <p>还车定位：北京市朝阳区xxxxxxxxx</p>
              </div>
              <div class="content-item active">
                <h3>特别说明</h3>
                <p>送还4s店后请让车管在签收单上签字</p>
              </div>
            </div>
            <!-- 展开收起切换 -->
            <div class="show" @click="btnhide">
              <div v-if="btnshow === 1">
                收起
                <span>
                  <van-icon name="arrow-up" />
                </span>
              </div>
              <div v-else>
                展开
                <span>
                  <van-icon name="arrow-down" />
                </span>
              </div>
            </div>
            <!-- 上下箭头符号 -->
          </div>
          <div class="info">
            <h3>送车订单</h3>
            <p>
              订单号
              <span>SWBHD1119292922</span>
            </p>
            <p>
              发起时间
              <span>2020/5/12 09:49:10</span>
            </p>
            <p>
              取消时间
              <span>2020/5/12 09:49:10</span>
            </p>
            <!-- 需要展开的部分 -->
            <div v-if="btnshow === 1">
              <div class="content-item showtop">
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
              <div class="content-item active">
                <h3>特别说明</h3>
                <p>送还4s店后请让车管在签收单上签字</p>
              </div>
            </div>
            <!-- 展开收起切换 -->
            <div class="show" @click="btnhide">
              <div v-if="btnshow === 1">
                收起
                <span>
                  <van-icon name="arrow-up" />
                </span>
              </div>
              <div v-else>
                展开
                <span>
                  <van-icon name="arrow-down" />
                </span>
              </div>
            </div>
            <!-- 上下箭头符号 -->
          </div>
          <div class="info">
            <h3>送车订单</h3>
            <p>
              订单号
              <span>SWBHD1119292922</span>
            </p>
            <p>
              发起时间
              <span>2020/5/12 09:49:10</span>
            </p>
            <p>
              取消时间
              <span>2020/5/12 09:49:10</span>
            </p>
            <!-- 需要展开的部分 -->
            <div v-if="btnshow === 1">
              <div class="content-item showtop">
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
              <div class="content-item active">
                <h3>特别说明</h3>
                <p>送还4s店后请让车管在签收单上签字</p>
              </div>
            </div>
            <!-- 展开收起切换 -->
            <div class="show" @click="btnhide">
              <div v-if="btnshow === 1">
                收起
                <span>
                  <van-icon name="arrow-up" />
                </span>
              </div>
              <div v-else>
                展开
                <span>
                  <van-icon name="arrow-down" />
                </span>
              </div>
            </div>
            <!-- 上下箭头符号 -->
          </div>
        </div>
      </van-tab>
      <van-tab title="还车订单" name="c">
        <div class="info_list">
          <div class="info">
            <h3>还车订单</h3>
            <p>
              订单号
              <span>SWBHD1119292922</span>
            </p>
            <p>
              发起时间
              <span>2020/5/12 09:49:10</span>
            </p>
            <p>
              取消时间
              <span>2020/5/12 09:49:10</span>
            </p>
            <!-- 需要展开的部分 -->
            <div v-if="btnshow === 1">
              <div class="content-item showtop">
                <h3>车辆信息</h3>
                <p>车辆定位：北京市昌平区xxxxxxxxx</p>
                <p>车牌号码：京A88888</p>
                <p>车身颜色：白色</p>
                <p>车管人员：张三</p>
                <p>车管电话：1388888888</p>
              </div>
              <div class="content-item">
                <h3>还车信息</h3>
                <p>车管人员：王五</p>
                <p>车管电话：1398888888</p>
                <p>还车定位：北京市朝阳区xxxxxxxxx</p>
              </div>
              <div class="content-item active">
                <h3>特别说明</h3>
                <p>送还4s店后请让车管在签收单上签字</p>
              </div>
            </div>
            <!-- 展开收起切换 -->
            <div class="show" @click="btnhide">
              <div v-if="btnshow === 1">
                收起
                <span>
                  <van-icon name="arrow-up" />
                </span>
              </div>
              <div v-else>
                展开
                <span>
                  <van-icon name="arrow-down" />
                </span>
              </div>
            </div>
            <!-- 上下箭头符号 -->
          </div>
          <div class="info">
            <h3>还车订单</h3>
            <p>
              订单号
              <span>SWBHD1119292922</span>
            </p>
            <p>
              发起时间
              <span>2020/5/12 09:49:10</span>
            </p>
            <p>
              取消时间
              <span>2020/5/12 09:49:10</span>
            </p>
            <!-- 需要展开的部分 -->
            <div v-if="btnshow === 1">
              <div class="content-item showtop">
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
              <div class="content-item active">
                <h3>特别说明</h3>
                <p>送还4s店后请让车管在签收单上签字</p>
              </div>
            </div>
            <!-- 展开收起切换 -->
            <div class="show" @click="btnhide">
              <div v-if="btnshow === 1">
                收起
                <span>
                  <van-icon name="arrow-up" />
                </span>
              </div>
              <div v-else>
                展开
                <span>
                  <van-icon name="arrow-down" />
                </span>
              </div>
            </div>
            <!-- 上下箭头符号 -->
          </div>
          <div class="info">
            <h3>还车订单</h3>
            <p>
              订单号
              <span>SWBHD1119292922</span>
            </p>
            <p>
              发起时间
              <span>2020/5/12 09:49:10</span>
            </p>
            <p>
              取消时间
              <span>2020/5/12 09:49:10</span>
            </p>
            <!-- 需要展开的部分 -->
            <div v-if="btnshow === 1">
              <div class="content-item showtop">
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
              <div class="content-item active">
                <h3>特别说明</h3>
                <p>送还4s店后请让车管在签收单上签字</p>
              </div>
            </div>
            <!-- 展开收起切换 -->
            <div class="show" @click="btnhide">
              <div v-if="btnshow === 1">
                收起
                <span>
                  <van-icon name="arrow-up" />
                </span>
              </div>
              <div v-else>
                展开
                <span>
                  <van-icon name="arrow-down" />
                </span>
              </div>
            </div>
            <!-- 上下箭头符号 -->
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
      activeName: "a",
      btnshow: 0, // 控制展开收起显示隐藏
    };
  },
  components: {},
  methods: {
    btnhide: function () {
      if (this.btnshow) {
        this.btnshow--;
      } else {
        this.btnshow++;
      }
    },
  },
};
</script>
<style scoped lang="less">
.info_list {
  box-sizing: border-box;
  width: 100%;
  padding: 15px;
  background-color: #efefef;
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
      > div {
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
  margin-left: -19px;
  /* border: 1px solid #333; */
  border-radius: 0 80px 80px 0;
  box-shadow: 1px 1px 5px 0px rgba(152, 152, 152, 0.5);
  /* border-left: none; */
}
.active {
  border: none;
}
.allorder {
  margin-top: 46px;
}
</style>