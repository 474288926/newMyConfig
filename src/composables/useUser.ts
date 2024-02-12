import { FormInstance, FormRules } from 'element-plus'
import { ref } from 'vue'
import { useInject } from '@/composables/useInject'

const useCode = () => {
  const captchaValue = ref('')
  const getCode = (code: string) => {
    // 接收正确的验证码
    captchaValue.value = code
  }

  const getRefResh = (codeRef: any) => {
    codeRef.value.display()
  }

  return {
    captchaValue,
    getCode,
    getRefResh
  }
}

// useInfo 预留
// const useInfo = () => {

// }

export const useLogin = () => {
  interface RuleForm {
    username: string
    password: string
    code: string
  }
  const { cookies, router } = useInject()

  const { captchaValue, getCode, getRefResh } = useCode()

  const loginForm = ref<RuleForm>({
    username: 'admin',
    password: '123456',
    code: ''
  })

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
  const rules = ref<FormRules<RuleForm>>({
    username: [{ required: true, message: '请输入账号', trigger: 'blur' }],
    password: [{ required: true, message: '请输入密码', trigger: 'blur' }],
    code: [
      { required: true, message: '请输入验证码', trigger: 'blur' },
      { validator: validateCode, trigger: 'blur' }
    ]
  })
  const onLogin = async (formEl: FormInstance | undefined) => {
    if (!formEl) return
    const is = await formEl.validate()
    console.log(is)
    if (is) {
      cookies.set('token', 'John Doe', { expires: 7 })
      router.replace('/')
    } else {
      console.log('error submit!')
    }
  }
  return {
    loginForm,
    rules,
    captchaValue,
    onLogin,
    getRefResh,
    getCode
  }
}

export const useRegister = () => {
  interface RuleForm {
    username: string
    phone: string
    code: string
    password: string
  }

  const { router } = useInject()
  const registerForm = ref<RuleForm>({
    username: 'admin',
    password: '123456',
    phone: '',
    code: ''
  })
  const rules = ref<FormRules<RuleForm>>({
    username: [{ required: true, message: '请输入账号', trigger: 'blur' }],
    phone: [{ required: true, message: '请输入手机号码', trigger: 'blur' }],
    password: [{ required: true, message: '请输入密码', trigger: 'blur' }],
    code: [{ required: true, message: '请输入验证码', trigger: 'blur' }]
  })

  const onRegister = async (formEl: FormInstance | undefined) => {
    if (!formEl) return
    const is = await formEl.validate()
    if (is) {
      router.replace('/login')
    } else {
      console.log('error submit!')
    }
  }
  return {
    registerForm,
    rules,
    onRegister
  }
}

export default {
  useLogin,
  useRegister
}
