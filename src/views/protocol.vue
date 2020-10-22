<template>
<div class="protocol">
  <h3>用户服务协议</h3>
  <p>{{context}}</p>
  <van-button type="primary" @click="goBack">同意</van-button>
</div>
</template>

<script>
import {
  API_PROTOCOL_ID
} from '../api/api';
import {
  delay
} from "../assets/js/utils"
export default {
  data() {
    return {
      loading: false,
      context: '',
    }
  },
  components: {},
  methods: {
    goBack() {
      this.$router.replace("/index/owninfo")
    }
  },
  async created() {
    this.loading = true;
    await delay();
    let data = await API_PROTOCOL_ID({})
    this.context = data + "呵呵";
  }
}
</script>

<style lang="less" scoped>
.protocol {
  box-sizing: border-box;
  background-color: #fff;
  padding: 0 15px;

  .van-button {
    width: 100% !important;
    background: rgb(103, 205, 201);
  }
}
</style>
