<template>
  <div>
    <div class="panel">
      <div class="layui-container">
        <ul>
          <li class="layui-hide-xs"><a href=""></a>首页</li>
          <li><a href=""></a>提问</li>
          <li><a href=""></a>分享</li>
          <li><a href=""></a>讨论</li>
          <li><a href=""></a>建议</li>
          <li><a href=""></a>公告</li>
          <li><a href=""></a>动态</li>
          <li class="layui-hide-xs"><span class="line"></span></li>
          <li class="layui-hide-xs"><a href=""></a>我发表的贴</li>
          <li class="layui-hide-xs"><a href=""></a>我收藏的贴</li>
        </ul>
        <div class="right layui-hide-xs">
          <span class="layui-icon layui-icon-search"></span>
          <a href="" class="layui-btn layui-btn-normal">发表新帖</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="less" scoped>
@media (max-width: 768px) {
  .panel {
    height: auto !important;
  }
  ul {
    li {
      width: 33.3%;
    }
  }
}
.panel {
  position: relative;
  height: 50px;
  line-height: 50px;
  border-radius: 2px;
  background-color: #fff;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
}
ul {
  li {
    display: inline-block;
    a {
      padding: 0 20px;
    }
    &:hover {
      color: #20a0ff;
      cursor: pointer;
    }
  }
  .line {
    display: inline-block;
    height: 10px;
    width: 1px;
    background: #e2e2e2;
    vertical-align: middle;
    margin: 0 20px;
  }
}
.right {
  position: absolute;
  right: 0;
  top: 0;
  .layui-icon-search {
    margin-right: 10px;
    font-size: 20px;
    &:hover {
      color: #20a0ff;
      cursor: pointer;
    }
  }
}
</style>
