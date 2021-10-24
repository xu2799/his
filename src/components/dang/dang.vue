<template>
  <div class="main">
    <div class="cover">
      <div class="bg">
        <img src="/static/image/jiandang.png" />
      </div>
       <div class="title">
        <img src="/static/image/title-jiandang.png" />
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
    width: 40%;
  };
  position: absolute;
  top: 18px;
}

@title-size: 280px;

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