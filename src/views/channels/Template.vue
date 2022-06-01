<template>
  <div class="layui-container">
    <div class="layui-row layui-col-space15">
      <div class="layui-col-md8 right-side">
        <List />
      </div>
      <div class="layui-col-md4 right-side">
        <HotList />
        <Ads />
        <Links />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import List from "../../components/contents/List.vue";
import Ads from "../../components/sidebar/Ads.vue";
import HotList from "../../components/sidebar/HotList.vue";
import Links from "../../components/sidebar/Links.vue";
</script>

<style scoped></style>
