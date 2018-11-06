<style lang="less" scoped>
</style>
<template>
     <el-menu
     :collapse="isCollapse"
     :show-timeout="200"
     :default-active="$route.path"
     background-color="rgb(48, 65, 86)"
     text-color="#fff"
     active-text-color="#67c23a"
     :collapse-transition="false"
     router
     >
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-news"></i>{{isCollapse? '': '路由'}}
        </template>
        <el-menu-item v-for="item in navigations" :key="item.key" :index="item.link" :route="item.link">
          {{ item.name }}
        </el-menu-item>
      </el-submenu>
    </el-menu>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["navigations", "isCollapse"])
  }
};
</script>
