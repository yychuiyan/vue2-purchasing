<template>
   <div>
    <!--  default-active="/" 默认当前路由 -->
    <el-menu
      :default-active="$route.path"
      class="el-menu-vertical-demo"
      background-color="#112f50"
      text-color="#fff"
      active-text-color="#ffd04b"
      router :collapse="isCollapse">
      <!-- router 开启路由模式 -->
      <el-menu-item>
        <span slot="title">管理系统</span>
      </el-menu-item>
      <el-menu-item index="/">
        <i class="el-icon-menu"></i>
        <span slot="title">首页</span>
      </el-menu-item>


      <el-submenu index="'/product">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>产品管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/product/list">
          <i class="el-icon-setting"></i>
          <span slot="title">产品列表</span>
          </el-menu-item>
          <el-menu-item index="/product/category">
            <i class="el-icon-setting"></i>
          <span slot="title">产品分类</span>
          </el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="'/order">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>订单管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/order/order-list">
          <i class="el-icon-setting"></i>
          <span slot="title">订单列表</span>
          </el-menu-item>
          <el-menu-item index="/order/order-collect">
            <i class="el-icon-setting"></i>
          <span slot="title">订单分类</span>
          </el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="'/advert">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>广告管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/advert/advert-list">
          <i class="el-icon-setting"></i>
          <span slot="title">广告列表</span>
          </el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
   </div>
</template>
<script>
export default {
  // 接收状态
  props:['isCollapse'],
  data () {
    return {
      // isCollapse:false
    }
  }
}
</script>

<style lang="less" scoped>
.el-menu{
  border-right: 0;
  .is-active{
    background-color: #1e78bf !important;
    color: #fff !important;
  }
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>
