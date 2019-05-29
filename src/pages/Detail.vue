<template>
  <div>
    <h2>详情页内容</h2>
    <p>
      <router-link to="/">返回首页</router-link>
    </p>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "detail",
  // 数据
  data() {
    return {};
  },
  // 计算属性
  computed: {},
  beforeMount() {
    // 已经渲染过，走客户端渲染
  },
  mounted() {
    // code...
  },
  // 方法
  methods: {},
  // 子组件
  components: {}
};
</script>
<style scoped lang="less">
</style>