<template>
  <div class="main">
    <div class="nanhu">
      <div class="title-img">
        <img src="/static/image/title-nanhu.png">
      </div>
    </div>
    <div class="bg">
      <img src="/static/image/bg-nanhu.png" />
    </div>
    <div class="menu">
      <div @click="ToDangPage">
        <div class="image">
          <img src="/static/image/title-jiandang.png" alt="" />
        </div>
      </div>
      <div @click="ToGuoPage">
        <div class="image">
          <img src="/static/image/title-jianguo.png" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nanhu: "/static/image/title-nanhu.png",
    };
  },
  methods: {
    ToDangPage: function () {
      this.$router.push({ path: "/jiandang" });
    },
    ToGuoPage: function () {
      this.$router.push({ path: "/jianguo" });
    },
  },
};
</script>

<style lang="less" scoped>
@fontsize_title: 2em;


.nanhu {
  position: absolute;
  right: 4%;
  top: 20%;
}

.title-img {
  width: 400px;
  img {
    width: 100%;
  }
}

.bg {
  position: absolute;
  bottom: 0;
}

img {
  width: 60%;
}

.menu {
  position: absolute;
  right: 10%;
  bottom: 15%;
}

.image {
  width: 200px;
  margin-top: -20px;
  img {
    width: 100%;
  }
}
</style>