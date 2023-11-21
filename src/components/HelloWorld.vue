<template>
  <div class="hello">
    <h2>{{ num }}</h2>
    <button @click="addFun">点我就加</button>
  </div>
</template>

<script >
import { ref } from "vue";
export default {
  // name: "HelloWorld",
  // props: {
  //   msg: String,
  // },
  setup() {
    const num = ref(1);
    const addFun = () => {
      num.value++;
    };
    return { num, addFun };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
