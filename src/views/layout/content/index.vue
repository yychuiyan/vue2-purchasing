<template>
   <div>
    <!-- 顶部 -->
    <div class="header">
      <div class="open">
        <span v-if="!isCollapse" class="iconfont icon-right-indent" @click="changeMenu"></span>
        <span v-else class="iconfont icon-left-indent"  @click="changeMenu"></span>
      </div>
    </div>
    <!-- 内容 二级路由出口 -->
    <router-view></router-view>
   </div>
</template>
<script>

export default {
  // 获取传递过来的参数
  props:['isCollapse'],
  data () {
    return {}
  },
  methods: {
    // 获取父类传递过来的方法
    changeMenu() {
      this.$emit('changeShow');
    }
  }
}
</script>

<style lang="less" scoped>
.header{
  height: 50px;
  width: 100vw;
  color: #fff;
  line-height: 50px;
  background-color: #1e78bf;
  .open{
    .iconfont{
      font-size: 22px;
      cursor: pointer;
    }
  }
}
</style>
