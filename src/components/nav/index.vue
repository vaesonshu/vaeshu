<template>
  <div class="header">
    <div class="container">
      <div class="left">
        <span>首页</span>
        <span>首页</span>
        <span>首页</span>
      </div>
      <div class="right">
        <el-switch v-model="value1" @click="toggleDark()"></el-switch>
      </div>
    </div>
    <!-- <div class="header-bottom"></div> -->
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useDark, useToggle } from "@vueuse/core";
import type { TabsPaneContext } from "element-plus";
const value1 = ref(true);
const isDark = useDark({
  selector: "html",
  attribute: "class",
});
const handleClick = (tab: TabsPaneContext, event: Event) => {
  console.log(tab, event);
};
const toggleDark = useToggle(isDark);
</script>

<style lang="less" scoped></style>
