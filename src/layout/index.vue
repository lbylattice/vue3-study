<script setup>
import Header from './components/Header.vue'
import Aside from './components/Aside.vue'

</script>

<template>
	<div>
		<el-container direction="vertical" class="container">
			<Header />
			<el-container class="bottom-container">
				<Aside class="aside" />
				<el-container>
					<router-view>
					</router-view>
				</el-container>
			</el-container>
		</el-container>
	</div>
</template>

<style scoped lang="less">
.container {
	height: 100vh;
}
</style>