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
        <el-form :model="form" ref="formRef" :rules="rules" size="large" class="py-4">
          <el-form-item label="" prop="username">
            <el-input v-model="form.username" clearable prefix-icon="User"></el-input>
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
          <el-form-item label="" prop="code">
            <el-input v-model="form.code" clearable prefix-icon="Key">
              <template #append>
                <vue-verify-code
                  @getCode="getCode"
                  @click="getRefResh"
                  ref="verifyCode"
                ></vue-verify-code>
              </template>
            </el-input>
          </el-form-item>
          <el-form-item>
            <div class="flex flex-col gap-2 w-full">
              <el-button type="primary" @click="submit(formRef)">登陆</el-button>
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
          </el-form-item>
        </el-form>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { inject, onMounted, reactive, ref } from 'vue'
import type { FormInstance, FormRules } from 'element-plus'
import imageSrc from '@/assets/img/left_img_1-6d-jzRvB.png'

const router: any = inject('router')
const cookies: any = inject('cookies')
const captchaValue = ref('')
const verifyCode = ref()
const getCode = (code: string) => {
  // 接收正确的验证码
  captchaValue.value = code
}
const getRefResh = () => {
  verifyCode.value.display()
}

interface RuleForm {
  username: string
  password: string
  code: string
}

const formRef = ref<FormInstance>()

const validateCode = (
  _rules: any,
  value: string,
  // eslint-disable-next-line no-unused-vars
  callback: (_error?: Error) => void
) => {
  console.log('val:', value, 'cap:', captchaValue.value)
  if (value.toLowerCase() === captchaValue.value.toLowerCase()) {
    callback() // 验证通过
  } else {
    const error = new Error('请输入正确验证码')
    callback(error) // 验证失败，返回错误信息
  }
}

const form = reactive<RuleForm>({
  username: 'admin',
  password: '123456',
  code: ''
})
const rules = reactive<FormRules<RuleForm>>({
  username: [{ required: true, message: '请输入账号', trigger: 'blur' }],
  password: [{ required: true, message: '请输入密码', trigger: 'blur' }],
  code: [
    { required: true, message: '请输入验证码', trigger: 'blur' },
    { validator: validateCode, trigger: 'blur' }
  ]
})

const submit = async (formEl: FormInstance | undefined) => {
  if (!formEl) return
  await formEl.validate((valid, fields) => {
    if (valid) {
      cookies.set('token', 'John Doe', { expires: 7 })
      router.replace('/')
    } else {
      console.log('error submit!', fields)
    }
  })
}

const onRegister = () => {
  router.push('/register')
}

onMounted(() => {
  setTimeout(() => {
    form.code = captchaValue.value
    submit(formRef.value)
  }, 6000)
})
</script>

<style scoped></style>
