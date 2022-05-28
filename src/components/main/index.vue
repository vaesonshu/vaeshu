<template>
  <div class="main">
    <div class="main-container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="less" scoped>
.main {
  margin-top: 55px;
  width: 100%;
  height: 100%;
  // .main-container {
  //   background-color: rgb(36, 35, 34);
  // }
}
</style>
