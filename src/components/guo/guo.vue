<template>
  <div class="main">
    <div class="cover">
      <div class="bg">
        <img src="/static/image/guo.png" />
      </div>
      <div class="title">
        <img src="/static/image/title-jianguo.png" />
      </div>
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
  text-align: center;
  position: relative;
}

.bg {
  img {
    width: 50%;
  };
  position: absolute;
  top: 118px;
}

@title-size: 320px;

.title {
  img {
    width: 100%;
  };
  font-size: 2em;
  text-align: center;
  position: absolute;
  width: @title-size;
  left: 50%;
  margin-left: -0.5*(@title-size);
  top: 20px;
}
</style>