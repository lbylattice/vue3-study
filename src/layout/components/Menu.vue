<script setup>
import { defineProps } from 'vue'
import Menu from './Menu.vue'
defineProps({
	items: {
		type: Object,
		default: () => {
			return {}
		}
	}
})
</script>
<template>
	<el-sub-menu v-if="items.children" :index="items.name">
		<template #title>{{ items.name }}</template>
		<Menu v-for="items of items.children" :key="items.name" :items="items" />
	</el-sub-menu>
	<el-menu-item :index="items.name" v-else>
		{{ items.name }}
	</el-menu-item>
</template>
<style lang="less" scoped></style>