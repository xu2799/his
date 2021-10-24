<template>
  <div class="main">
    <div class="clock daydiv">
      <div class="num">{{ day }}</div>
      <div class="desc">DAYS</div>
    </div>
    <div class="clock">
      <div class="num">{{ hour }}</div>
      <div class="desc">HOURS</div>
    </div>
    <div class="clock">
      <div class="num">{{ minute }}</div>
      <div class="desc">MINUTES</div>
    </div>
    <div class="clock">
      <div class="num">{{ second }}</div>
      <div class="desc">SECONDS</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "clock",
  data() {
    return {
      day: 0,
      hour: "",
      minute: "",
      second: "",
    };
  },
  mounted() {
    this.getTime();
    this.timer = setInterval(() => {
      this.getTime();
    }, 1000);
  },
  methods: {
    getTime: function () {
      var t = new Date();
      this.day = parseInt(Date.now() / (1000*24*60*60)) + 17693;
      this.hour = t.getHours() >= 10 ? t.getHours() : "0" + t.getHours()
      this.minute = t.getMinutes() >= 10 ? t.getMinutes() : "0" + t.getMinutes()
      this.second = t.getSeconds() >= 10 ? t.getSeconds() : "0" + t.getSeconds()
    },
  },
};
</script>

<style lang="less" scoped>
@clock_bg_color: #dc1f0b;
@font_size1: 40px;
@font_size2: 13px;

.main {
  display: flex;
  margin: 0 auto;
  // color: white;
}

.clock {
  padding: 20px;
  margin: 5px;
  text-align: center;
  background-color: @clock_bg_color;
}

.daydiv {
    width: 120px;
    padding-left: 20px;
}

.num {
  font-size: @font_size1;
}

.desc {
  font-size: @font_size2;
  margin-top: 6px;
}
</style>