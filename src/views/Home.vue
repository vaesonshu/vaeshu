<template>
  <div class="common-layout">
    <el-container>
      <el-header class="header">
        <Nav></Nav>
      </el-header>
      <el-main>
        <Main></Main>
      </el-main>
      <el-footer>
        <Footer></Footer>
      </el-footer>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import Nav from "../components/nav/index.vue";
import Main from "../components/main/index.vue";
import Footer from "../components/footer/index.vue";
</script>

<style scoped>
/* .header {
  display: flex;
} */
</style>
