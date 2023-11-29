<script setup>
import { ref } from 'vue'
import CodeView from '@/components/CodeView'
import { useRouter } from 'vue-router'
const router = useRouter()

const list = ref([
  '嵌套路由映射',
  '动态路由选择',
  '模块化、基于组件的路由配置',
  '路由参数、查询、通配符',
  '展示由 Vue.js 的过渡系统提供的过渡效果',
  '细致的导航控制',
  '自动激活 CSS 类的链接',
  'HTML5 history 模式或 hash 模式',
  '可定制的滚动行为',
  'URL 的正确编码'
])
const content = ref(`
方式一：<router-link to="/home">Go to Home</router-link>
方式二：this.$router.push('/home')
to 和 push 的方式相同
`)


</script>

<template>
  <div class="container">
    <div class="content">
      Vue Router 是 Vue.js 的官方路由。它与 Vue.js 核心深度集成，让用 Vue.js 构建单页应用变得轻而易举。功能包括：
      <ul>
        <li v-for="item in list " :key="item">{{ item }}</li>
      </ul>
      <CodeView :content="content">
      </CodeView>
      <div>方式一：<router-link to="/home">Go to Home</router-link></div>
      <div>方式二：<span @click="() => { router.push({ path: '/home' }) }">Go to Home</span></div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.container {
  .content {
    box-sizing: border-box;
    border-radius: 4px;
    background-color: #fff;
    height: 100%;
  }
}
</style>