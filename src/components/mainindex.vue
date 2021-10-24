<template>
  <div class="main">
    <div class="title">{{ msg }}</div>
    <div class="clock">
      <div class="desc">时至今日，中国共产党成立已有</div>
      <Clock />
    </div>
    <div>
      <div>2021年是中国共产党建党100周年</div>
      <div>100年的砥砺筑梦</div>
      <div>一路风雨一路歌</div>
      <div>一路拼搏一路唱</div>
      <div>一路坎坷一路颂</div>
      <div>一路跋涉一路咏</div>
      <div>一路凯歌一路舞</div>
      <div>中国共产党人始终以初心为桨、借时代之舟、化使命为帆，砥砺前行</div>
    </div>
  </div>
</template>

<script>
import Clock from "./clock.vue";

export default {
  name: "mainindex",
  data() {
    return {
      msg: "百年征程波澜壮阔，百年初心历久弥坚",
    };
  },
  components: {
    Clock,
  },
};
</script>

<style lang="less" scoped>
.main {
  text-align: center;
  font-family: playfairdisplay-bold, playfair display, serif;
  width: 100%;
  // color: white;
}

.title {
  font-size: 2.2em;
  margin: 10px 0;
}

.desc {
  font-size: 1.8em;
}

.clock {
  width: 40%;
  margin: 0 auto;
}
</style>