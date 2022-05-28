<template>
  <div class="fly-header layui-bg-black">
    <div class="layui-container">
      <a class="fly-logo" href="/">
        <!-- <img src="" alt="layui" /> -->
      </a>
      <ul class="layui-nav fly-nav layui-hide-xs">
        <li class="layui-nav-item layui-this">
          <a href="/"> <i class="iconfont icon-jiaoliu"></i>交流 </a>
        </li>
        <li class="layui-nav-item">
          <a href="case/case.html">
            <i class="iconfont icon-iconmingxinganli"></i>文章
          </a>
        </li>
        <li class="layui-nav-item">
          <a href="http://www.layui.com/" target="_blank">
            <i class="iconfont icon-ui"></i>关于
          </a>
        </li>
      </ul>

      <ul class="layui-nav fly-nav-user">
        <li class="layui-nav-item">
          <router-link
            class="iconfont icon-touxiang layui-hide-xs"
            to="/"
          ></router-link>
        </li>
        <li class="layui-nav-item">
          <router-link to="/">登入</router-link>
        </li>
        <li class="layui-nav-item">
          <router-link to="/">注册</router-link>
        </li>
        <li class="layui-nav-item layui-hide-xs">
          <a title="QQ登入" class="iconfont icon-qq"></a>
        </li>
        <li class="layui-nav-item layui-hide-xs">
          <a title="微博登入" class="iconfont icon-weibo"></a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script></script>

<style lang="less" scoped>
.fly-logo {
  left: -15px;
  top: -10px;
  margin-left: 15px;
}
</style>
