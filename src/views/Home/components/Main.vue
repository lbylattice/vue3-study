<script setup>
import { defineProps } from 'vue'
import { useRouter } from 'vue-router'
const Router = useRouter()
defineProps({
	item: {
		type: Object,
		default: () => {
			return {}
		}
	}
})
const go = (path) => {
	Router.push({ path })
}
</script>

<template>
	<el-main class="main">
		<p class="content">{{ item.content }}</p>
		<el-row>
			<el-col align="center">
				<el-button size="large" class="button" type="warning" @click="go(item.path)">Go</el-button>
			</el-col>
		</el-row>
	</el-main>
</template>


<style lang="less" scoped>
.main {
	width: 600px;

	.content {
		text-indent: 2em;
		font-size: 20px;
		font-weight: 700;
		color: sandybrown;
	}

	.button {
		margin: 16px 0;
	}
}
</style>