<script setup>
import { ref, onMounted, watch } from "vue";
import { useRouter, useRoute, onBeforeRouteLeave, onBeforeRouteUpdate } from 'vue-router'
import CodeView from '@/components/CodeView'
const router = useRouter()
const route = useRoute()
onMounted(() => {
  console.log('挂载完毕');
  console.log('mouted:', `参数变化${route.params.case}`);

})
watch(() => route.params.case, (val) => {
  console.log(`watch:参数变化${val}`);
})
onBeforeRouteLeave((to, form) => {
  console.log(to, form);
})
onBeforeRouteUpdate(() => {
  console.log(`onBeforeRouteUpdate:参数变化${route.params.case}`);
})
const msg = ref('case one')
const routerChange = (index) => {
  router.push({ path: `/vueRouter/dynamic/${index}` })
}
const content = ref(`
当用户从 vueRouter/dynamic/1 导航到 vueRouter/dynamic/2 时，相同的组件实例将被重复使用。
因为两个路由都渲染同个组件，比起销毁再创建，复用则显得更加高效。不过，这也意味着组件的生命周期钩子不会被调用。
可以使用watch和onBeforeRouteUpdate来监听动态路由变化， 查看console.log
`)



</script>

<template>
  <div>
    <div>{{ msg }}</div>
    <CodeView :content="content">
    </CodeView>
    <el-button type="primary" @click="routerChange(1)">go 1</el-button>
    <el-button type="primary" @click="routerChange(2)">go 2</el-button>

  </div>
</template>

<style lang="less" scoped></style>