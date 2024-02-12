<!-- eslint-disable no-unused-vars -->

<template>
  <div
    class="w-full h-screen bg-gradient-to-b from-blue-300 to-blue-400 flex justify-center items-center"
  >
    <main class="mx-4 md:w-3/5 bg-white rounded-xl flex flex-row gap-2 p-8">
      <div class="flex-1 items-center justify-center hidden md:flex">
        <el-image :src="imageSrc" fit="fill"></el-image>
      </div>
      <div class="flex-1 text-gray-500">
        <span class="text-6xl font-light tracking-wide">hello !</span>
        <p class="text-3xl mt-4">欢迎来到My Vue</p>
        <y-form
          ref="formRef"
          :source="loginForm"
          :rules="rules"
          :config="config"
          label-width="0px"
          size="large"
          @sourceUpdate="sourceUpdate"
        >
          <template #code>
            <el-input v-model="loginForm.code" clearable prefix-icon="Key">
              <template #append>
                <vue-verify-code
                  @getCode="getCode"
                  @click="getRefResh"
                  ref="verifyCode"
                ></vue-verify-code>
              </template>
            </el-input>
          </template>
          <template #btn>
            <div class="flex flex-col gap-2 w-full">
              <el-button type="primary" @click="onLogin(formRef)">登陆</el-button>
              <div>
                <el-button
                  type="primary"
                  class="w-20"
                  size="default"
                  @click="onRegister"
                  >注册</el-button
                >
              </div>
            </div>
          </template>
        </y-form>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import type { FormInstance } from 'element-plus'
import { useLogin } from '@/composables/useUser'
import imageSrc from '@/assets/img/left_img_1-6d-jzRvB.png'
import { useInject } from '@/composables/useInject'

const { router } = useInject()

const verifyCode = ref()

const formRef = ref<FormInstance>()

const config = [
  {
    key: 'username',
    label: '',
    component: 'el-input',
    props: {
      clearable: true,
      'prefix-icon': 'User'
    }
  },
  {
    key: 'password',
    label: '',
    component: 'el-input',
    props: {
      clearable: true,
      'prefix-icon': 'Lock',
      type: 'password',
      'show-password': true
    }
  },
  {
    key: 'code',
    label: '',
    component: 'slot',
    slotName: 'code'
  },
  {
    key: '',
    label: '',
    component: 'slot',
    slotName: 'btn'
  }
]

const { loginForm, rules, captchaValue, onLogin, getRefResh, getCode } = useLogin()

const sourceUpdate = (val: any) => {
  loginForm.value = val
}
const onRegister = () => {
  router.push('/register')
}

onMounted(() => {
  setTimeout(() => {
    loginForm.value.code = captchaValue.value
    onLogin(formRef.value)
  }, 6000)
})
</script>

<style scoped></style>
