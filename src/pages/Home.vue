<template>
  <div>
    <h1>首页</h1>
    <p>
      <router-link to="/detail">Go to detail</router-link>
    </p>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "home",
  // 数据
  data() {
    return {
    };
  },
  // 方法
  methods: {
  },
  // 子组件
  components: {}
};
</script>
<!--当前组件的样式 -->
<style scoped lang="less">

</style>