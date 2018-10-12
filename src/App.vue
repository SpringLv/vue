<style lang="less" scoped>
.app-content {
  display: flex;
  flex-direction: row;
  height: 100%;
  box-sizing: border-box;
  padding-top: 45px;
  .left-nav {
    flex: 1 10 auto;
    max-width: 180px;
    min-width: 180px;
    background-color: rgb(84, 92, 100);
    overflow: hidden;
  }
  .body-content {
    flex: 1 10 auto;
    box-sizing: border-box;
    overflow: hidden;
  }
}
</style>
<template>
  <div class="app">
     <v-header>
      <router-link slot="left" to="/home">
        <img :src="logo" width="50" height="50" style="margin-left:65px;" />
      </router-link>
    </v-header>
    <v-content class="app-content">
      <div class="left-nav" slot="left">
        <EasyScrollbar :barOption="getOpt('nav')">
          <div :style="{height: height + 'px'}">
              <v-sidenavigations></v-sidenavigations>
          </div>
        </EasyScrollbar>
      </div>
      <div class="body-content" slot="content">
        <EasyScrollbar :barOption="getOpt('contetnt')">
          <div :style="{height: height + 'px', padding: '15px'}">
            <router-view></router-view>
          </div>
        </EasyScrollbar>
      </div>
    </v-content>
  </div>
</template>
<script>
import logo from "@/assets/logo.png";
export default {
  name: "app",
  created() {
    this.height = document.body.clientHeight - 50;
    window.addEventListener("resize", () => {
      this.height = document.body.clientHeight - 50;
    });
  },
  data() {
    return {
      logo,
      height: 500
    };
  },
  methods: {
    getOpt(type) {
      return {
        barColor: "#959595", //滚动条颜色
        barWidth: type === "nav" ? 3 : 5, //滚动条宽度
        railColor: type === "nav" ? "rgb(84, 92, 100)" : "#ffffff", //导轨颜色
        barMarginRight: type === "nav" ? 0 : 0, //垂直滚动条距离整个容器右侧距离单位（px）
        barMaginBottom: 0, //水平滚动条距离底部距离单位（px)
        barOpacityMin: 0.0, //滚动条非激活状态下的透明度
        zIndex: "auto", //滚动条z-Index
        autohidemode: false, //自动隐藏模式
        horizrailenabled: false //是否显示水平滚动条
      };
    }
  }
};
</script>
