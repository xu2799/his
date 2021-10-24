<template>
  <div class="main">
    <div class="title">
      <img class="text" src="/static/image/title-malie.png" />
      <div class="bg-line"></div>
    </div>
    <div class="para">
      <div class="context">
        中国共产党的成立卷动着改天换地般的红色浪潮，是历史画卷中开天辟地的大事件——
      </div>
      <div class="context">
        1921年7月，为确保安全，一大代表从上海转移到嘉兴，在南湖红船上完成了大会议程，宣告中国共产党诞生。圣火南湖展翼翔，锤镰高举骋疆场，千秋伟业始于此。
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
  position: relative;
}

.title {
  float: right;
  margin-right: 10%;
  padding-top: 1%;
  width: 320px;
  .text {
    width: 100%;
  }
  .bg-line {
    border-bottom: 2px solid #ffe699;
    width: 100%;
    margin-top: -25px;
    margin-left: 3%;
  }
}

.para {
  font-family: "Courier New", Courier, monospace;
  position: absolute;
  left: 20%;
  top: 180px;
  width: 40%;

  .context {
    text-indent: 1.5em;
    font-size: 1.4em;
  }
}
</style>