<template>
  <el-row>
    <el-col>
      <el-steps :active="active">
        <el-step title="第一步" description="填写转账信息" />
        <el-step title="第二步" description="确认转账信息" />
        <el-step title="第三步" description="完成" />
      </el-steps>
    </el-col>
    <el-col class="mt-4 flex flex-col">
      <y-form
        v-if="active !== 3"
        ref="formRef"
        :source="form"
        :config="calcConfig(config, active)"
        label-width="100px"
        @sourceUpdate="sourceUpdate"
      >
      </y-form>
      <template v-else>
        <el-result icon="success" title="支付成功"> </el-result>
        <div class="border-dotted border-2 border-sky-500 font-normal p-4 m-auto">
          <div class="flex flex-row text-right">
            <div class="w-24">付款账户：</div>
            {{ result.paymentAccount }}
          </div>
          <div class="flex flex-row text-right">
            <div class="w-24">收款账户：</div>
            {{ result?.collectionAccount }}
          </div>
          <div class="flex flex-row text-right">
            <div class="w-24">收款人姓名：</div>
            {{ result.payee }}
          </div>
          <div class="flex flex-row text-right">
            <div class="w-24">转账金额：</div>
            {{ result.price }}
          </div>
        </div>
      </template>
    </el-col>
    <el-col class="text-center mt-4">
      <el-button v-if="active === 1" type="primary" @click="next">下一步</el-button>
      <template v-else-if="active === 2">
        <el-button type="primary" @click="submit">提交</el-button>
        <el-button @click="per">上一步</el-button>
      </template>
      <el-button v-else type="primary" @click="again">再转一笔</el-button>
    </el-col>
  </el-row>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'

const active = ref(1)

const formRef = ref()

const config = ref([
  {
    key: 'paymentAccount',
    label: '付款账户',
    component: 'el-input',
    itemProps: {
      rules: [{ required: true, message: '请输入付款账户', trigger: 'blur' }]
    }
  },
  {
    key: 'collectionAccount',
    label: '收款账户',
    component: 'el-input',
    itemProps: {
      rules: [{ required: true, message: '请输入收款账户', trigger: 'blur' }]
    }
  },
  {
    key: 'payee',
    label: '收款人姓名',
    component: 'el-input',
    itemProps: {
      rules: [{ required: true, message: '请输入收款人姓名', trigger: 'blur' }]
    }
  },
  {
    key: 'price',
    label: '转账金额',
    component: 'el-input',
    itemProps: {
      rules: [
        { required: true, message: '请输入转账金额', trigger: 'blur' },
        { type: 'number', message: '请输入正确金额' }
      ]
    }
  },
  {
    key: 'password',
    label: '支付密码',
    component: 'el-input',
    props: {
      type: 'password',
      'show-password': true
    },
    itemProps: {
      rules: [{ required: true, message: '请输入支付密码', trigger: 'blur' }]
    }
  }
])

const calcConfig = computed(() => (configList: any, num: any) => {
  let newConfig = JSON.parse(JSON.stringify(configList))
  switch (num) {
    case 1:
      newConfig.pop()
      break
    case 2:
      newConfig = newConfig.reduce((per: any, cur: any, index: any, array: any) => {
        if (index === array.length - 1) {
          return per.concat(cur)
        }
        per.push({ ...cur, component: 'innerText' })
        return per
      }, [])
      break
    default:
      break
  }
  return newConfig
})

const form = ref({
  paymentAccount: 'XXXXXXXXXXXXXXXX',
  collectionAccount: '1054788873@qq.com',
  payee: 'zhangsan',
  price: 100,
  password: '123456'
})

const result = ref({
  paymentAccount: '',
  collectionAccount: '',
  payee: '',
  price: 0
})

const next = async () => {
  const is = await formRef.value.validate()
  if (is) {
    active.value += 1
  }
}

const per = () => {
  active.value -= 1
}

const submit = () => {
  console.log('提交成功')
  Object.assign(result.value, form.value)
  formRef.value.resetForm()
  next()
}
const again = () => {
  active.value = 1
}

const sourceUpdate = (val: any) => {
  form.value = val
}
</script>

<style scoped></style>
