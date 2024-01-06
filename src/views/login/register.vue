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
        <el-form :model="form" ref="formRef" :rules="rules" size="large" class="py-4">
          <el-form-item label="" prop="username">
            <el-input v-model="form.username" clearable prefix-icon="User"></el-input>
          </el-form-item>
          <el-form-item label="" prop="phone">
            <el-input v-model="form.phone" clearable prefix-icon="Phone"></el-input>
          </el-form-item>
          <el-form-item label="" prop="code">
            <el-input v-model="form.code" clearable prefix-icon="Key">
              <template #append>
                <el-button type="primary" size="default">获取验证码</el-button>
              </template>
            </el-input>
          </el-form-item>
          <el-form-item label="" prop="password">
            <el-input
              v-model="form.password"
              clearable
              prefix-icon="Lock"
              type="password"
              show-password
            ></el-input>
          </el-form-item>
          <el-form-item>
            <div class="flex flex-col gap-2 w-full">
              <el-button type="primary" @click="submit(formRef)">注册</el-button>
              <div>
                <el-button type="primary" class="w-20" size="default" @click="onLogin"
                  >登陆</el-button
                >
              </div>
            </div>
          </el-form-item>
        </el-form>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { inject, reactive, ref } from 'vue'
import type { FormInstance, FormRules } from 'element-plus'
import imageSrc from '@/assets/img/left_img_2-qPXLYNe1.png'

const router: any = inject('router')

interface RuleForm {
  username: string
  phone: string
  code: string
  password: string
}

const formRef = ref<FormInstance>()

const form = reactive<RuleForm>({
  username: 'admin',
  password: '123456',
  phone: '',
  code: ''
})
const rules = reactive<FormRules<RuleForm>>({
  username: [{ required: true, message: '请输入账号', trigger: 'blur' }],
  phone: [{ required: true, message: '请输入手机号码', trigger: 'blur' }],
  password: [{ required: true, message: '请输入密码', trigger: 'blur' }],
  code: [{ required: true, message: '请输入验证码', trigger: 'blur' }]
})
const submit = async (formEl: FormInstance | undefined) => {
  if (!formEl) return
  await formEl.validate((valid, fields) => {
    if (valid) {
      router.replace('/login')
    } else {
      console.log('error submit!', fields)
    }
  })
}

const onLogin = () => {
  router.replace('/login')
}
</script>

<style scoped></style>
