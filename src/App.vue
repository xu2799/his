<template>
  <div id="app">
    <div class="header">
      <div class="logo" @click="ToIndexPage">首页</div>
      <div class="meun">
        <router-link to="party">南湖红船万里行</router-link>
        <router-link to="2">燎原星火创辉煌</router-link>
        <router-link to="3">迢递百年砥砺行</router-link>
        <router-link to="aboutus">关于我们</router-link>
      </div>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      windowWidth: document.documentElement.clientWidth, //实时屏幕宽度
      windowHeight: document.documentElement.clientHeight - 1, //实时屏幕高度
    };
  },
  mounted() {
    var that = this;
    // <!--把window.onresize事件挂在到mounted函数上-->
    window.onresize = () => {
      return (() => {
        window.fullHeight = document.documentElement.clientHeight;
        window.fullWidth = document.documentElement.clientWidth;
        that.windowHeight = window.fullHeight; // 高
        that.windowWidth = window.fullWidth; // 宽
      })();
    };
  },
  methods: {
    ToIndexPage: function () {
      this.$router.push({ path: "/" });
    },
  },
};
</script>

<style lang="less">
HTML,
body,
div,
h1,
h2,
h3,
h4,
h5,
h6,
ul,
ol,
dl,
li,
dt,
dd,
p,
blockquote,
pre,
form,
fieldset,
table,
th,
td {
  border: none;
  font-family: "微软雅黑", "黑体", "宋体";
  font-size: 14px;
  margin: 0px;
  padding: 0px;
}

html,
body {
  height: 100%;
  width: 100%;
}

@height_1: 56px;
@border_color: #e6e6e6;
@font_color: #868894;

#app {
  width: 100%;
  height: 100%;
  // background-color: #510909;
}

.header {
  box-sizing: border-box;
  height: @height_1;
  line-height: @height_1;
  width: 100%;
  padding: 0 6%;
  border-bottom: 3px solid @border_color;
  display: flex;
  justify-content: space-between;
}


a {
  line-height: @height_1;
  padding: 0 4%;
  text-decoration: none;
  color: @font_color;
}

a:hover {
  background-color: antiquewhite;
}

.meun {
  display: flex;
  width: 60%;
  justify-content: space-between;
}

.logo {
  color: @font_color;
}
</style>
