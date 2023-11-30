<script setup>
import { ref } from "vue";
import { useRouter } from 'vue-router'
const router = useRouter()
import CodeView from '@/components/CodeView'
const msg = ref('进入动态路由语法')
const routerChange = (item) => {
  router.push({ name: 'case one', params: { case: item } })
}
const content = ref(`
//见 case one 路由
{
  path: '/vueRouter/dynamic/:case',
  name: 'case one',
  component: () => import('@/views/VueRouter/Dynamic/CaseOne')
},
//动态路由通过params参数传递
router.push({ name: 'case one', params: { case: item } })`
)
</script>

<template>
  <div>
    <span>{{ msg }}</span>
    <CodeView :content="content" />
    <div> 
      <el-button v-for="item in 2" :key="item" style="display: inline-block;" type="primary"
        @click="routerChange(item)">{{ 'case' + item }}</el-button>
    </div>
  </div>
</template>

<style lang="less" scoped></style>