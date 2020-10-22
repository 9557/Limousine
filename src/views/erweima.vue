<template>
<div class="qrCode">
  <van-nav-bar left-text="" left-arrow @click-left="onClickLeft" fixed />
  <van-image width="100" height="100" lazy-load :src="codeImg" @click="showShare = true" />
  <van-share-sheet v-model="showShare" title="保存到本地然后分享给好友" :options="options" @click="downloadCodeImg" />
</div>
</template>

<script>
import codeIMG from '../assets/images/qrcode.jpg'
export default {
  data() {
    return {
      showShare: false,
      codeImg: codeIMG,
      options: [{
        name: '保存到本地',
        icon: 'poster'
      }],
    }
  },
  components: {},
  methods: {
    onClickLeft() {
      console.log('返回');
      this.$router.replace('/')
    },
    onSelect(option) {
      console.log(option.name);
      this.showShare = false;
    },
    downloadCodeImg() {
      console.log('下载图片')
      var a = document.createElement('a')
      a.download = name || 'pic'
      // 设置图片地址
      a.href = codeIMG;
      a.click();
    },
  }
}
</script>

<style lang="less" scoped>
* {
  background-color: #fff;
}

.van-image {
  margin-top: 100px;
  -webkit-touch-callout: default;
}
</style>
