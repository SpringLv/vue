
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
  box-shadow: 1px 1px 2px #e0e0e0;
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
  }
  .app-header-right {
    flex: 30 32 auto;
    width: 100px;
    ul {
      margin: 0;
      padding: 0;
      list-style: none;
      overflow: hidden;
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
        <div class="app-header-left">
            <slot name="left"></slot>
        </div>
        <div class="app-header-right">
            <ul>
                <li v-for="item in navigations" v-if="item.isShow" :key="item.key">
                  <el-tag>
                    <router-link :to="item.link">
                      {{ item.name }}
                    </router-link>
                    <i class="el-icon-close" @click="(e)=>{removeTag(e, item.link)}"></i>
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
  watch: {
    $route() {
      this.RouterChange();
    }
  },
  computed: {
    ...mapGetters(["navigations"])
  },
  methods: {
    RouterChange() {
      console.debug(this.$route); // eslint-disable-line
      this.$store.commit("SET_NAVIGATION", {
        type: "showActived",
        value: this.$route.path
      });
    },
    removeTag(e, link) {
      this.$store.commit("SET_NAVIGATION", {
        type: "hide",
        value: link
      });
    }
  }
};
</script>
