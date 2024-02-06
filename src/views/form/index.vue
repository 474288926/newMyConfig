<template>
  <el-row>
    <el-col>
      <y-form
        ref="formRef"
        :source="form"
        :config="calcConfig(config, form)"
        @sourceUpdate="sourceUpdate"
      >
        <template #submit>
          <el-button type="primary" @click="submit">立即创建</el-button>
          <el-button @click="reset">重置</el-button>
        </template>
      </y-form>
    </el-col>
  </el-row>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import calcConfig from '@/utils/calcConfig'

const formRef = ref()

const config = ref([
  {
    key: 'title',
    label: '活动名称',
    component: 'el-input',
    itemProps: {
      rules: [{ required: true, message: '请输入活动名称', trigger: 'blur' }]
    }
  },
  {
    key: 'area',
    label: '活动区域',
    component: 'el-select',
    itemProps: {
      rules: [{ required: true, message: '请选择活动区域', trigger: 'change' }]
    },
    props: {
      placeholder: '选择活动区域'
    },
    options: [
      { label: '区域1', value: '1' },
      { label: '区域2', value: '2' }
    ]
  },
  {
    key: 'time',
    label: '活动时间',
    component: 'el-date-picker',
    itemProps: {
      rules: [{ required: true, message: '请选择活动时间', trigger: 'change' }]
    },
    props: {
      type: 'datetime',
      placeholder: '选择日期'
    }
  },
  {
    key: 'component',
    label: '即时配送',
    component: 'el-switch'
  },
  {
    key: 'natureOfActivity',
    label: '活动性质',
    component: 'el-checkbox-group',
    itemProps: {
      rules: [{ required: true, message: '请选择活动性质', trigger: 'change' }]
    },
    options: [
      { label: '美食/餐厅线上活动', value: '美食/餐厅线上活动' },
      { label: '地推活动', value: '地推活动' },
      { label: '线下主题活动', value: '线下主题活动' },
      { label: '线上品牌活动', value: '线上品牌活动' }
    ]
  },
  {
    key: 'specialResources',
    label: '特殊资源',
    component: 'el-radio-group',
    itemProps: {
      rules: [{ required: true, message: '请选择特殊资源', trigger: 'change' }]
    },
    options: [
      { label: '线上品牌商赞助', value: '线上品牌商赞助' },
      { label: '线下场地免费', value: '线下场地免费' }
    ]
  },
  {
    key: 'desc',
    label: '活动形式',
    itemProps: {
      rules: [{ required: true, message: '请输入活动形式', trigger: 'blur' }]
    },
    component: 'el-input',
    props: {
      'show-word-limit': true,
      type: 'textarea'
    }
  },
  {
    key: 'rate',
    label: '评星',
    component: 'el-rate'
  },
  {
    key: 'distinguish',
    label: '行政区分',
    component: 'el-cascader',
    props: {
      options: [
        {
          value: 'guide',
          label: 'Guide',
          children: [
            {
              value: 'disciplines',
              label: 'Disciplines',
              children: [
                {
                  value: 'consistency',
                  label: 'Consistency'
                },
                {
                  value: 'feedback',
                  label: 'Feedback'
                },
                {
                  value: 'efficiency',
                  label: 'Efficiency'
                },
                {
                  value: 'controllability',
                  label: 'Controllability'
                }
              ]
            },
            {
              value: 'navigation',
              label: 'Navigation',
              children: [
                {
                  value: 'side nav',
                  label: 'Side Navigation'
                },
                {
                  value: 'top nav',
                  label: 'Top Navigation'
                }
              ]
            }
          ]
        },
        {
          value: 'component',
          label: 'Component',
          children: [
            {
              value: 'basic',
              label: 'Basic',
              children: [
                {
                  value: 'layout',
                  label: 'Layout'
                },
                {
                  value: 'color',
                  label: 'Color'
                },
                {
                  value: 'typography',
                  label: 'Typography'
                },
                {
                  value: 'icon',
                  label: 'Icon'
                },
                {
                  value: 'button',
                  label: 'Button'
                }
              ]
            },
            {
              value: 'form',
              label: 'Form',
              children: [
                {
                  value: 'radio',
                  label: 'Radio'
                },
                {
                  value: 'checkbox',
                  label: 'Checkbox'
                },
                {
                  value: 'input',
                  label: 'Input'
                },
                {
                  value: 'input-number',
                  label: 'InputNumber'
                },
                {
                  value: 'select',
                  label: 'Select'
                },
                {
                  value: 'cascader',
                  label: 'Cascader'
                },
                {
                  value: 'switch',
                  label: 'Switch'
                },
                {
                  value: 'slider',
                  label: 'Slider'
                },
                {
                  value: 'time-picker',
                  label: 'TimePicker'
                },
                {
                  value: 'date-picker',
                  label: 'DatePicker'
                },
                {
                  value: 'datetime-picker',
                  label: 'DateTimePicker'
                },
                {
                  value: 'upload',
                  label: 'Upload'
                },
                {
                  value: 'rate',
                  label: 'Rate'
                },
                {
                  value: 'form',
                  label: 'Form'
                }
              ]
            },
            {
              value: 'data',
              label: 'Data',
              children: [
                {
                  value: 'table',
                  label: 'Table'
                },
                {
                  value: 'tag',
                  label: 'Tag'
                },
                {
                  value: 'progress',
                  label: 'Progress'
                },
                {
                  value: 'tree',
                  label: 'Tree'
                },
                {
                  value: 'pagination',
                  label: 'Pagination'
                },
                {
                  value: 'badge',
                  label: 'Badge'
                }
              ]
            },
            {
              value: 'notice',
              label: 'Notice',
              children: [
                {
                  value: 'alert',
                  label: 'Alert'
                },
                {
                  value: 'loading',
                  label: 'Loading'
                },
                {
                  value: 'message',
                  label: 'Message'
                },
                {
                  value: 'message-box',
                  label: 'MessageBox'
                },
                {
                  value: 'notification',
                  label: 'Notification'
                }
              ]
            },
            {
              value: 'navigation',
              label: 'Navigation',
              children: [
                {
                  value: 'menu',
                  label: 'Menu'
                },
                {
                  value: 'tabs',
                  label: 'Tabs'
                },
                {
                  value: 'breadcrumb',
                  label: 'Breadcrumb'
                },
                {
                  value: 'dropdown',
                  label: 'Dropdown'
                },
                {
                  value: 'steps',
                  label: 'Steps'
                }
              ]
            },
            {
              value: 'others',
              label: 'Others',
              children: [
                {
                  value: 'dialog',
                  label: 'Dialog'
                },
                {
                  value: 'tooltip',
                  label: 'Tooltip'
                },
                {
                  value: 'popover',
                  label: 'Popover'
                },
                {
                  value: 'card',
                  label: 'Card'
                },
                {
                  value: 'carousel',
                  label: 'Carousel'
                },
                {
                  value: 'collapse',
                  label: 'Collapse'
                }
              ]
            }
          ]
        },
        {
          value: 'resource',
          label: 'Resource',
          children: [
            {
              value: 'axure',
              label: 'Axure Components'
            },
            {
              value: 'sketch',
              label: 'Sketch Templates'
            },
            {
              value: 'docs',
              label: 'Design Documentation'
            }
          ]
        }
      ]
    }
  },
  {
    label: '',
    component: 'slot',
    slotName: 'submit'
  }
])

const form = ref({
  title: '',
  area: '',
  time: '',
  delivery: '',
  natureOfActivity: [],
  specialResources: '',
  desc: '',
  rate: 0,
  distinguish: []
})

const sourceUpdate = (val: any) => {
  form.value = val
}

const submit = async () => {
  const is = await formRef.value.validate()
  if (is) {
    console.log('提交成功')
  } else {
    console.log('提交失败')
  }
}

const reset = () => {
  formRef.value.resetForm()
}
</script>

<style scoped></style>
