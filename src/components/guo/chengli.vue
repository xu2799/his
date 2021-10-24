// 开国大典

<template>
  <div class="main">
    <div class="bg">
      <img src="/static/image/kaiguodadian.png">
    </div>
    <div class="desc">
      1949年10月1日中华人民共和国成立
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {},
};
</script>

<style lang="less" scoped>
.main {
  position: relative;
  text-align: center;
}


.bg {
  position: absolute;
  top: 10px;
  left: 20%;
  width: 55%;
  img {
    width: 100%;
  }
}

.desc {
  position: absolute;
  top: 420px;
  width: 40%;
  left: 30%;
  text-align: center;
}
</style>