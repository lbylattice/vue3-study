<script setup>
import { ref, reactive, watch } from "vue";
const num = ref(10);
const info = { name: "lin", telephone: "16605912018" };
const x = ref(1)
const y = ref(0)
let str = reactive({ hello: "你好哇", name: 'linbiyun' });
let sum = reactive(1)

const addFun = (field) => {
  switch (field) {
    case 'x':
      x.value++
      break;
    case 'y':
      y.value++
      break;
    case 'num':
      num.value++
      break;

    default:
      break;
  }

};



watch(() => x.value + y.value, (getVal) => {
  console.log(getVal, 'getVal');
  sum = getVal

})
</script>

<template>
  <button @click="addFun('num')">啊啊啊啊啊啊 我加！ {{ num }}</button>
  <h2>我的名字{{ info.name }}</h2>
  <h2>打个招呼{{ str.hello }}</h2>
  <button @click="addFun('x')">x: {{ x }}</button>
  <button @click="addFun('y')">y: {{ y }}</button>


  {{ x }} + {{ y }} = {{ sum }}
</template>