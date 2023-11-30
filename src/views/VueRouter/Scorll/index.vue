<script setup>
import { ref } from "vue";
import CodeView from '@/components/CodeView';

const msg = ref('进入路由滚动');
const content = ref(`
const router = createRouter({
	history: createWebHistory('/demo/'),
	routes: staticRoutes,
	scrollBehavior(to, from, savedPosition) {
		console.log(savedPosition, 'savedPosition');
     // 始终滚动到顶部
    return { top: 0 }
    // 也可以这么写  以id为main的元素进行偏移
    // el: document.getElementById('main'),
    el: '#main', 
    top: 10,  偏移10
    behavior: 'smooth',  滚动更丝滑

    //延时滚动
    scrollBehavior(to, from, savedPosition) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({ left: 0, top: 0 })
      }, 500)
    })
  },
	}
});
//{
//    "left": 0,
//    "top": 0
//}
`)

</script>

<template>
  <div>
    <el-row :gutter="20" style="background-color:blue">
      <el-col :span="6">
        <div style="background-color: aqua;">1</div>
      </el-col>
      <el-col :span="6" :offset="1">
        <div style="background-color: aqua;">2</div>
      </el-col>
      <el-col :span="6" :sm="1">
        <div style="background-color: aqua;">3</div>
      </el-col>
      <el-col :span="6">
        <div style="background-color: aqua;">4</div>
      </el-col>
    </el-row>
    <span>{{ msg }}</span>
    <CodeView :content="content" />

  </div>
</template>

<style lang="less" scoped></style>