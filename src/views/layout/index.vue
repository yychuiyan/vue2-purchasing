<template>
   <div class="layout">
    <!-- 左侧导航 -->
    <div class="menu">
      <!-- 通过父级传递参数 -->
      <Menu :isCollapse="isCollapse"></Menu>
    </div>
    <!-- 右侧内容 动态绑定class -->
    <div class="content" :class="{small:isCollapse}">
      <Content @changeShow="changeShow" :isCollapse="isCollapse"></Content>
    </div>
   </div>
</template>
<script>
import Menu from './menu'
import Content from './content'
export default {
  data () {
    return {
      isCollapse:false
    }
  },
  // 注册组件
  components: {
    Menu,
    Content
  },
  methods: {
    changeShow() {
      // 接收参数 取反
      this.isCollapse=!this.isCollapse
    }
  }
}
</script>

<style lang="less" scoped>
.layout{
  // display: flex;
  .menu{
    // width: 200px;
    background-color:#112f50;
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
  }
  .content{
    transition: width .8s ease-in-out;
    padding-left: 200px;
  }
  .small{
    padding-left: 64px;
  }
}
</style>
