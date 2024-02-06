<template>
  <el-form ref="formRef" :model="formData" v-bind="$attrs" label-width="120px">
    <el-row :gutter="8">
      <el-col v-for="(item, index) in config" :key="index" :span="item.span || 24">
        <el-form-item v-bind="item.itemProps" :label="item.label" :prop="item.key">
          <slot v-if="item.component === 'slot'" :name="item.slotName"></slot>
          <div v-else-if="item.component === 'innerText'">
            {{ formData[item.key] }}
          </div>
          <template v-else-if="item.component === 'el-cascader'">
            <component
              :is="item.component"
              v-model="formData[item.key]"
              v-bind="item.props"
            />
          </template>
          <template v-else>
            <component
              :is="item.component"
              v-model="formData[item.key]"
              v-bind="item.props"
            >
              <template v-if="item.component == 'el-checkbox-group'">
                <el-checkbox
                  v-for="(checkbox, checkboxIndex) in item.options"
                  :key="checkboxIndex"
                  :label="checkbox.value"
                >
                  {{ checkbox.label }}
                </el-checkbox>
              </template>
              <template v-else-if="item.component === 'el-radio-group'">
                <el-radio
                  v-for="(radio, radioIndex) in item.options"
                  :key="radioIndex"
                  :label="radio.value"
                  :disabled="radio.disabled"
                >
                  {{ radio.label }}
                </el-radio>
              </template>
              <template v-else-if="item.component === 'el-select'">
                <el-option
                  v-for="(option, optionIndex) in item.options"
                  :key="optionIndex"
                  :label="option.label"
                  :value="option.value"
                ></el-option>
              </template>
            </component>
          </template>
        </el-form-item>
      </el-col>
    </el-row>
  </el-form>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import type { FormInstance } from 'element-plus'

type configItem = {
  key: string
  label: string
  component: string
  slotName?: string
  options?: Array<any>
  span?: number
  itemProps?: object
  props?: object
}

const props = defineProps({
  source: {
    type: Object,
    required: true,
    default: () => ({})
  },
  config: {
    type: Array<configItem>,
    required: true,
    default: () => []
  }
})

const formRef = ref<FormInstance>()
const formData = ref({ ...props.source })

const emits = defineEmits(['sourceUpdate'])

const resetForm = () => {
  if (!formRef.value) return
  formRef.value.resetFields()
}

const validate = async () => {
  if (!formRef.value) return
  const is = await formRef.value.validate((valid: any) => valid)
  // eslint-disable-next-line consistent-return
  return is
}

defineExpose({
  resetForm,
  validate
})

watch(
  formData,
  (newVal) => {
    emits('sourceUpdate', newVal)
  },
  { deep: true }
)

watch(
  props.source,
  (newVal) => {
    formData.value = { ...newVal }
  },
  { deep: true, immediate: true }
)
</script>

<style scoped></style>
