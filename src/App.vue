<template>
  <div class="common-layout">
    <Header></Header>
    <Main></Main>
    <Footer></Footer>
  </div>
</template>

<script setup lang="ts">
// import Nav from "./components/nav/index.vue";
import Header from "./components/header/index.vue";
import Main from "./components/main/index.vue";
import Footer from "./components/footer/index.vue";
</script>

<style lang="less">
.right-side {
  margin-top: 10px;
  margin-bottom: 50px;
}
</style>
