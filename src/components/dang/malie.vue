<template>
  <div class="main">
    <div class="title">
      <img class="text" src="/static/image/title-malie.png" />
      <img src="/static/image/icon-boat.png" class="icon" />
    </div>
    <div class="bg-line"></div>
    <div class="line"></div>
    <div class="body">
      <div class="first">
        <div class="event-img">
          <img src="/static/image/xinqingnian.png" />
        </div>
        <div class="para">《新青年》杂志创刊</div>
        <div class="time">1915.09</div>
      </div>
      <div class="second">
        <div class="time">1918.07</div>
        <div class="para">
          <div>《法俄革命之比较观》</div>
          <div>《庶民的胜利》</div>
          <div>《Bolshevism的胜利》</div>
        </div>
        <div class="event-img">
          <img src="/static/image/lidazhao.png" />
        </div>
      </div>
      <div class="third">
        <div class="event-img3">
          <img src="/static/image/wusiyundong.png" />
        </div>
        <div class="para">五四运动</div>
        <div class="time">1919.05.04</div>
      </div>
      <div class="forth">
        <div class="time">1923.10.20</div>
        <div class="para">《中国青年》周刊创办</div>
        <div class="event-img4">
          <img src="/static/image/zhongguoqingnian.png" />
        </div>
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
  position: relative;
  left: 3%;
  padding-top: 1%;
  width: 400px;
  display: flex;
  .text {
    width: 82%;
  }
  .icon {
    width: 12%;
    height: 12%;
  }
}

.bg-line {
  border-bottom: 2px solid #ffe699;
  width: 400px;
  margin-top: -25px;
  margin-left: 3%;
}

.line {
  border-top: 3px solid #ffe699;
  height: 0;
  width: 80%;
  margin: 0 auto;
  position: absolute;
  top: 250px;
  left: 10%;
}

@begin-left: 16%;

.body {
  .first {
    position: absolute;
    top: 120px;
    left: @begin-left;
    text-align: center;
  }
  .second {
    position: absolute;
    top: 270px;
    left: @begin-left + 24%;
    text-align: center;
  }
  .third {
    position: absolute;
    top: 120px;
    left: @begin-left + 18% * 2;
    text-align: center;
  }
  .forth {
    position: absolute;
    top: 270px;
    left: @begin-left + 18% * 3;
    text-align: center;
  }
}

.event-img {
  width: 120px;
  img {
    width: 100%;
  }
}

.event-img3 {
  width: 160px;
  img {
    width: 100%;
  }
}

.event-img4 {
  width: 100px;
  img {
    width: 100%;
  }
}
</style>