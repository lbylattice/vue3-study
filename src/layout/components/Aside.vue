<script setup>
import { onMounted, ref, computed } from 'vue'
import Menu from './Menu.vue'
const files = require.context('@/router', true, /\.js$/);

const routerflag = './vueRouter.js'
const menuList = ref({})

onMounted(() => {
	files.keys().forEach(key => {
		if (key == routerflag) menuList.value = files(key).default[0].children
	})
})

const defaultActive = computed(() => {
	const arr = Object.keys(menuList.value)
	if (arr.length) {
		return menuList.value[0].name
	} else {
		return null
	}
})

</script>

<template>
	<el-aside class="aside">
		<el-scrollbar>
			<el-menu :collapse="false" background-color="#fff" style="height: 550px" :default-active="defaultActive"
				:collapse-transition="true">
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