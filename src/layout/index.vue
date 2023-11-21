<script setup></script>

<template>
	<el-container>
		<el-header>Header</el-header>
		<el-container>
			<el-aside width="200px">Aside</el-aside>
			<el-container>
				<el-main><router-view></router-view></el-main>
			</el-container>
		</el-container>
	</el-container>
</template>

<style scoped lang="less"></style>