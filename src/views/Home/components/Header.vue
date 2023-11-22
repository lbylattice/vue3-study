<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()
const handleLogout = () => {
	router.push({ path: 'Login' })
}
</script>

<template>
	<el-header class="header">
		<div class="logo">logo</div>
		<el-link class="link">document</el-link>
		<el-button type="warning" size="large" round @click="handleLogout">
			<span>Log Out</span>
		</el-button>
	</el-header>
</template>


<style lang="less" scoped>
.header {
	position: relative;
	height: 80px;
	display: flex;
	justify-content: space-around;
	align-items: center;

	.logo {
		color: black
	}

	.link {
		color: #fff;
		font-weight: 700;
		font-size: 20px;
	}

	.button {
		font-size: 20px;
	}
}
</style>