<script setup>
import Header from './components/Header.vue'
import Aside from './components/Aside.vue'

</script>

<template>
	<div>
		<el-container direction="vertical">
			<Header />
			<el-container>
				<Aside />
				<el-container>
					<router-view></router-view>
					<!-- <el-main>Main</el-main> -->
					<el-footer>Footer</el-footer>
				</el-container>
			</el-container>
		</el-container>
	</div>
</template>

<style scoped lang="less"></style>