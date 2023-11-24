<script setup>
import { onMounted, ref, watch } from 'vue'
import Menu from './Menu.vue'

const files = require.context('@/router', true, /\.js$/);

const routerflag = './vueRouter.js'
const menuList = ref({})

onMounted(() => {
	files.keys().forEach(key => {
		if (key == routerflag) menuList.value = files(key).default[0].children
	})
})

watch(
	menuList,
	(val) => {
		console.log(val, 'val');
	},
	{ immediate: true }
)

</script>

<template>
	<el-aside class="aside">
		<el-scrollbar>
			<el-menu :collapse="false" background-color="red" style="height: 550px">
				<Menu v-for="items of menuList" :key="items.name" :items="items" />
			</el-menu>
		</el-scrollbar>
	</el-aside>
</template>


<style lang="less" scoped>
.aside {
	width: 200px;
}
</style>