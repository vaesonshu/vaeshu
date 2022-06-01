<template>
  <div>
    <div class="panel">
      <div class="layui-container">
        <ul>
          <router-link to="/index" custom v-slot="{ navigate }">
            <li
              @click="navigate"
              @keypress.enter="navigate"
              role="link"
              class="layui-this"
            >
              <a href="">首页</a>
            </li>
          </router-link>
          <router-link
            v-for="(item, index) in lists"
            :key="'panel' + index"
            :to="item.path"
            custom
            v-slot="{ navigate }"
          >
            <li
              @click="navigate"
              @keypress.enter="navigate"
              role="link"
              class="layui-hide-xs"
            >
              <a href="">
                {{ item.name }}
                <span class="layui-badge-dot" v-if="item.isNew"></span>
              </a>
            </li>
          </router-link>
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

<script setup lang="ts">
import { ref } from "vue";
const lists = [
  {
    name: "提问",
    path: "/index/ask",
    isNew: false,
  },
  {
    name: "分享",
    path: "/index/share",
    isNew: true,
  },
  {
    name: "讨论",
    path: "/index/discuss",
    isNew: false,
  },
  {
    name: "建议",
    path: "/index/advise",
    isNew: false,
  },
  {
    name: "公告",
    path: "/index/notice",
    isNew: false,
  },
  {
    name: "动态",
    path: "/index/logs",
    isNew: false,
  },
];
</script>

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
.layui-this {
  color: #20a0ff;
}
</style>
