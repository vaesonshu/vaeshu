<template>
  <div class="common-layout">
    <el-container>
      <el-header class="header">
        <Nav></Nav>
      </el-header>
      <el-main></el-main>
      <el-footer></el-footer>
    </el-container>
  </div>
  <div>home</div>
</template>

<script setup lang="ts">
import Nav from "../components/nav/index.vue";
</script>

<style scoped>
/* .header {
  display: flex;
} */
</style>
