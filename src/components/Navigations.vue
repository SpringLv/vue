
<style lang="less" scoped>
.app-header {
  height: 45px;
  border-bottom: 1px solid #e0e0e0;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  z-index: 1;
  a {
    text-decoration: none;
    color: #333333;
  }
  & > div {
    transition: width 0.7s ease-out;
  }
  .app-header-left {
    flex: 2 32 auto;
    min-width: 180px;
    max-width: 180px;
    .app-isCollapse {
      width: 20px;
      height: 40px;
      float: right;
      line-height: 40px;
      cursor: pointer;
    }
  }
  .app-header-left-lite {
    flex: 2 32 auto;
    min-width: 64px;
    max-width: 64px;
    .app-isCollapse {
      width: 15px;
      height: 40px;
      float: right;
      line-height: 40px;
      cursor: pointer;
    }
  }
  .app-header-right {
    flex: 30 32 auto;
    width: 100px;
    ul {
      margin: 0;
      padding: 0;
      list-style: none;
      overflow: hidden;
      height: 45px;
      line-height: 45px;
      box-shadow: 1px -1px 2px #e0e0e0;
      & > li {
        float: left;
        margin-left: 10px;
      }
    }
  }
}
</style>

<template>
    <div class="app-header">
        <div :class="isCollapse ? 'app-header-left-lite' : 'app-header-left'">
            <slot name="left"></slot>
            <div class="app-isCollapse" @click="(e)=>setIsCollapse(e, isCollapse)">
              <i :class="isCollapse?'el-icon-arrow-right i-left':'el-icon-arrow-left i-left'"></i>
            </div>
        </div>
        <div class="app-header-right">
            <ul>
                <li v-for="item in navigations" v-if="item.isShow" :key="item.key">
                  <el-tag size="small" :type="item.link === $route.path ? 'success':'info'" closable @close="(e)=>{removeTag(e, item.link)}">
                    <span v-if="item.isActived">·</span>
                    <router-link :to="item.link">
                      {{ item.name }}
                    </router-link>
                  </el-tag>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  created() {
    this.RouterChange();
  },
  render: cr => {
    console.debug(cr, '----'); // eslint-disable-line
    return cr(<div>111</div>);
    console.debug(cr, '----'); // eslint-disable-line
  },
  watch: {
    $route() {
      this.RouterChange();
    }
  },
  computed: {
    ...mapGetters(["navigations", "isCollapse"])
  },
  methods: {
    RouterChange() {
      console.debug(this.$route); // eslint-disable-line
      this.$store.commit("SET_NAVIGATION", {
        type: "show",
        value: this.$route.path
      });
    },
    removeTag(e, link) {
      console.debug(e, link); // eslint-disable-line
      this.$store.commit("SET_NAVIGATION", {
        type: "hide",
        value: link
      });
      if (link === this.$route.path) this.$router.go(-1);
    },
    setIsCollapse(e, isCollapse) {
      console.debug(isCollapse); // eslint-disable-line
      this.$store.commit("SET_ISCOLLAPSE", {
        value: isCollapse
      });
    }
  }
};
</script>
