<script setup>
import { ref } from 'vue'
import { menulist } from '@/enmus';
import { useDefaultStore } from '@/stores'
const defaultStore = useDefaultStore()
const buttonItem = ref(null)


const getItem = (item, index) => {
	menulist.forEach((e, i) => {
		buttonItem.value[i].ref.style.color = ""
		buttonItem.value[i].ref.style.backgroundColor = ''
	})
	buttonItem.value[index].ref.style.color = '#fff'
	buttonItem.value[index].ref.style.backgroundColor = '#626aef'
	defaultStore.setGoal(item)
}

</script>

<template>
	<el-header class="header">
		<div class="botton-group">
			<el-button v-for="(item, index) in menulist" :key="item.name" class="button" size="large"
				@click="getItem(item, index)" ref="buttonItem">
				{{ item.name }}
			</el-button>
		</div>
	</el-header>
</template>


<style lang="less" scoped>
.header {
	position: relative;
	background-color: #f6d6d6;
	height: 70px;

	.botton-group {
		height: 40px;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);

		.button {
			display: inline-block;
			margin-right: 20px;
			font-weight: 700;
		}
	}

}
</style>