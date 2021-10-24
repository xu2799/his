<template>
  <div class="body">
    <div class="main">
      {{code}}
    </div>
    <div class="desc">
      <div >
      Sorry,the page does not exist!
    </div>
    <div>
      您需要的网页不存在！
    </div>
    </div>
    <div class="little">
      此网页可能没有发布，或者已被删除，也可能由于错误的链接把您带到了这里。
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      code: "404",
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
@width: 10px;
@codeColor: #bc2b2e;
.body {
  text-align: center;
}

.main {
  color: @codeColor;
  font-size: 10em;
  margin-bottom: 10px;
}

.desc {
  font-weight: 600;
  font-size: 2em;
  line-height: 70px;
}

.little {
  margin-top: 20px;
}
</style>
