<template>
  <div>
    <Panel />
    <router-view></router-view>
  </div>
</template>

<script setup lang="ts">
import Panel from "../components/panel/index.vue";
</script>

<style lang="less" scoped>
.right-side {
  margin-top: 10px;
  margin-bottom: 50px;
}
</style>
