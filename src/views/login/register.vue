<template>
  <div
    class="w-full h-screen bg-gradient-to-b from-blue-300 to-blue-400 flex justify-center items-center"
  >
    <main class="w-3/5 bg-white rounded-xl flex flex-row gap-2 p-8">
      <div class="flex-1 items-center justify-center hidden md:flex">
        <el-image :src="imageSrc" fit="fill"></el-image>
      </div>
      <div class="flex-1 text-gray-500">
        <span class="text-6xl font-light tracking-wide">hello !</span>
        <p class="text-3xl mt-4">账号注册</p>
        <y-form
          ref="formRef"
          :source="registerForm"
          :rules="rules"
          :config="config"
          label-width="0px"
          size="large"
          @sourceUpdate="sourceUpdate"
        >
          <template #code>
            <el-input v-model="registerForm.code" clearable prefix-icon="Key">
              <template #append>
                <el-button type="primary" size="default">获取验证码</el-button>
              </template>
            </el-input>
          </template>
          <template #btn>
            <div class="flex flex-col gap-2 w-full">
              <el-button type="primary" @click="onRegister(formRef)">注册</el-button>
              <div>
                <el-button type="primary" class="w-20" size="default" @click="onLogin"
                  >登陆</el-button
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
import { ref } from 'vue'
import type { FormInstance } from 'element-plus'
import imageSrc from '@/assets/img/left_img_2-qPXLYNe1.png'
import { useRegister } from '@/composables/useUser'
import { useInject } from '@/composables/useInject'

const { router } = useInject()

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
    key: 'phone',
    label: '',
    component: 'el-input',
    props: {
      clearable: true,
      'prefix-icon': 'Phone'
    }
  },
  {
    key: 'code',
    label: '',
    component: 'slot',
    slotName: 'code'
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
    key: '',
    label: '',
    component: 'slot',
    slotName: 'btn'
  }
]

const { registerForm, rules, onRegister } = useRegister()

const sourceUpdate = (val: any) => {
  registerForm.value = val
}

const onLogin = () => {
  router.replace('/login')
}
</script>

<style scoped></style>
