<template>
  <div class="main">
    <div class="navBar">
      <div v-if="active === 0">
        <van-nav-bar title="新任务" />
      </div>
      <div v-else-if="active === 1">
        <van-nav-bar title="订单列表" />
      </div>
      <div v-else>
        <van-nav-bar title="首页" />
      </div>
    </div>
    <div class="bg">
      <router-view />
    </div>
    <!-- 底部导航 -->
    <van-tabbar v-model="active" active-color="#67CDC9" inactive-color="#333">
      <van-tabbar-item replace to="/index/newtask">
        <span>新任务</span>
        <template #icon="props">
          <img :src="props.active ? newtask2 : newtask1" />
        </template>
      </van-tabbar-item>
      <van-tabbar-item replace to="/index/order">
        <span>订单列表</span>
        <template #icon="props">
          <img :src="props.active ? orders2 : orders1" />
        </template>
      </van-tabbar-item>
      <van-tabbar-item replace to="/index/owninfo">
        <span>我的</span>
        <template #icon="props">
          <img :src="props.active ? my2 : my1" />
        </template>
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script>
import newtask1 from "../assets/images/newtask1.png";
import newtask2 from "../assets/images/newtask2.png";
import my1 from "../assets/images/my1.png";
import my2 from "../assets/images/my2.png";
import orders1 from "../assets/images/orders1.png";
import orders2 from "../assets/images/orders2.png";
export default {
  data() {
    return {
      active: 2,
      newtask1,
      newtask2,
      my1,
      my2,
      orders1,
      orders2,
    };
  },
  components: {},
  methods: {},
  watch: {
    $route: {
      handler(val, oldval) {
        if (val.name === "newtask") {
          this.active === 0;
        } else if (val.name === "order") {
          this.active = 1;
        } else {
          this.active = 2;
        }
      },
    },
  },
};
</script>

<style scoped lang="less">
.main {
  background-color: #efefef;
}
.navBar{
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
}
</style>