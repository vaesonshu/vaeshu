<template>
  <div class="layui-container fly-marginTop">
    <div class="fly-panel fly-panel-user" pad20>
      <div class="layui-tab layui-tab-brief" lay-filter="user">
        <ul class="layui-tab-title">
          <li class="layui-this">登入</li>
          <li>
            <router-link :to="{ name: 'reg' }">注册</router-link>
          </li>
        </ul>
        <div
          class="layui-form layui-tab-content"
          id="LAY_ucm"
          style="padding: 20px 0"
        >
          <div class="layui-tab-item layui-show">
            <div class="layui-form layui-form-pane">
              <form method="post">
                <div class="layui-form-item">
                  <label for="L_email" class="layui-form-label">用户名</label>
                  <div class="layui-input-inline">
                    <input
                      type="text"
                      name="username"
                      v-model="username"
                      placeholder="请输入用户名"
                      autocomplete="off"
                      class="layui-input"
                    />
                  </div>
                  <div class="layui-form-mid">
                    <span style="color: #c00">{{}}</span>
                  </div>
                </div>
                <div class="layui-form-item">
                  <label for="L_pass" class="layui-form-label">密码</label>
                  <div class="layui-input-inline">
                    <input
                      type="password"
                      name="password"
                      v-model="password"
                      placeholder="请输入密码"
                      autocomplete="off"
                      class="layui-input"
                    />
                  </div>
                  <div class="layui-form-mid">
                    <span style="color: #c00">{{}}</span>
                  </div>
                </div>
                <div class="layui-form-item">
                  <div class="layui-row">
                    <label for="L_vercode" class="layui-form-label"
                      >验证码</label
                    >
                    <div class="layui-input-inline">
                      <input
                        type="text"
                        name="code"
                        v-model="code"
                        placeholder="请输入验证码"
                        autocomplete="off"
                        class="layui-input"
                      />
                    </div>
                    <div class="layui-input-inline">
                      <span
                        style="color: #c00"
                        @click="getCaptcha"
                        v-html="svg"
                      ></span>
                    </div>
                  </div>
                  <div class="layui-form-mid">
                    <span style="color: #c00">{{}}</span>
                  </div>
                </div>
                <div class="layui-form-item">
                  <button class="layui-btn" type="button">立即登录</button>
                  <span style="padding-left: 20px">
                    <router-link :to="{ name: 'forget' }"
                      >忘记密码？</router-link
                    >
                  </span>
                </div>
                <div class="layui-form-item fly-form-app">
                  <span>或者使用社交账号登入</span>
                  <a class="iconfont icon-qq" title="QQ登入"></a>
                  <a class="iconfont icon-weibo" title="微博登入"></a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useStore } from "vuex";
import { getCode } from "../api/login.js";
import { v4 } from "uuid";
const store = useStore();
onMounted(() => {
  let sid = "";
  if (localStorage.getItem("sid")) {
    sid = localStorage.getItem("sid");
  } else {
    sid = v4();
    localStorage.setItem("sid", sid);
  }
  store.commit("setSid", sid);
  console.log(sid);
  getCaptcha();
});
const svg = ref("");
const username = ref("");
const password = ref("");
const code = ref("");
const getCaptcha = () => {
  let sid = store.state.sid;
  console.log("从vuex中获取到的sid", sid);
  getCode(sid).then((res) => {
    if (res.code === 200) {
      svg.value = res.data;
    }
    console.log("res", res);
  });
};
</script>

<style lang="less" scoped>
.login {
  background-color: #f2f2f2;
  .layui-container {
    display: flex;
    justify-content: center;
    background-color: #fff;
    input {
      width: 190px;
    }
    .vaeian-link {
      margin-left: 10px;
      &:hover {
        color: #409eff;
      }
    }
  }
}
</style>
