<template>
  <div class="app-card" :class="'card-base-class ' + selfClass">
    <div class="add-card__header" v-if="$slots.header || header">
      <slot name="header">{{ header }}</slot>
    </div>
    <div class="app-card__body" :style="bodyStyle">
      <slot></slot>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.app-card {
  border: 1px solid #e0e0ee;
}
</style>

<script>
export default {
  name: "AppCard",
  props: {
    header: {},
    bodyStyle: {},
    selfClass: {
      type: String
    }
  }
};
</script>
