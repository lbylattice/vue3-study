<script setup>
import { ref } from "vue";
import CodeView from '@/components/CodeView'
const msg = ref('在 setup 中使用 useRouter 和 useRoute 函数访问路由和当前路由')
const content = ref(`
import { useRouter, useRoute } from 'vue-router'

export default {
  setup() {
    const router = useRouter()
    const route = useRoute()

    function pushWithQuery(query) {
      router.push({
        name: 'search',
        query: {
          ...route.query,
          ...query,
        },
      })
    }
  },
}`
)
</script>

<template>
  <div>
    <span>{{ msg }}</span>
    <CodeView :content="content" />
  </div>
</template>

<style lang="less" scoped></style>