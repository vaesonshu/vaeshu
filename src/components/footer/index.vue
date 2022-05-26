<template>
  <div class="footer">
    <div class="footer-top"></div>
    <div class="footer-container"></div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="less" scoped>
.footer {
  height: 55px;
  background-color: #272727;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  .footer-container {
    display: flex;
    height: 100%;
    margin: 0 auto;
    align-items: center;
    justify-content: space-between;
    text-align: center;
    color: rgba(255, 255, 255, 0.7);
  }
}
</style>
