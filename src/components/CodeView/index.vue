<script setup>
import { ref, defineProps } from 'vue'
defineProps({
	content: {
		type: String,
		default: '进入CodeView'
	}
})
const socureCode = ref(null)
</script>

<template>
	<div ref="socureCode" class="code">
		<div class="codeView">
			<pre v-highlight>
					<code style="border-radius: 4px;">
<slot>
<div v-text="content"></div>
</slot>
					</code>
				</pre>
		</div>
	</div>
</template>

<style lang="less" scoped>
.codeView {
	width: 800px;
	border-radius: 4px;
}
</style>