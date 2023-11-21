<script setup>
import { ref, reactive } from "vue";
import { useDefaultStore } from "@/stores";
import { useRouter } from "vue-router";
import { ElMessage } from "element-plus";
const defaultStore = useDefaultStore();
const msg = ref("login");
const formRef = ref(null);
const router = useRouter()
const form = reactive({
  username: "",
  password: "",
});
const rules = reactive({
  username: [
    { required: true, message: "Please input username", trigger: "blur" },
  ],
  password: [
    { required: true, message: "Please input password", trigger: "blur" },
  ],
});
const loading = ref(false)
const login = async () => {
  await formRef.value.validate((valid, fields) => {
    loading.value = true
    if (valid) {
      if (form.username == "booty" && form.password == "lby0810.") {
        sessionStorage.setItem('token', form.password)
        defaultStore.setToken(form.password);
        router.push({ path: 'Home' })
      } else {
        ElMessage({ message: 'Incorrect username or password', type: 'error', grouping: true })
        // console.log("false");
      }
    } else {
      console.log("error submit!", fields);
    }
    loading.value = false
  });
};
</script>

<template>
  <div class="container">
    <el-space alignment="center" class="login-container" direction="vertical">
      <div class="login-text">
        <el-text tag="b" class="text">{{ msg }}</el-text>
      </div>
      <el-form :model="form" label-position="right" label-width="80" :rules="rules" ref="formRef" class="form"
        :hide-required-asterisk="true">
        <el-form-item label="username" prop="username">
          <el-input v-model="form.username" placeholder="Please input username" style="width: 200px;"></el-input>
        </el-form-item>
        <el-form-item label="password" prop="password">
          <el-input v-model="form.password" type="password" placeholder="Please input password" show-password
            style="width: 200px;" color="##626aef" @keyup.enter="login"></el-input>
        </el-form-item>
      </el-form>
      <el-button class="login-button" @click="login" round :loading="loading" color="#626aef">GO</el-button>
    </el-space>
  </div>
</template>

<style scoped lang="less">
.container {
  width: 100%;
  height: 100%;
  background-image: url("~@/assets/login.jpg");
  background-size: 100% 100%;
  position: relative;

  .login-container {
    width: 320px;
    height: 450px;
    // border: 4px solid black;
    position: absolute;
    top: 50%;
    left: 80%;
    transform: translate(-50%, -50%);
    border: 1px solid var(--el-border-color);
    border-radius: var(--el-border-radius-base);
    background-color: rgba(233, 233, 233, 0.8);

    .login-text {
      margin-top: 40px;

      .text {
        font-size: 80px;
        font-style: italic;
      }
    }

    .form {
      margin-top: 30px;
    }

    .login-button {
      width: 280px;
      margin-top: 15px;
    }
  }
}
</style>