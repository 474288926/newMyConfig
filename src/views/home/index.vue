<template>
  <div>
    <header>home123131</header>
    <main>
      <div class="p-4 m-4 bg-slate-500">Count: {{ counter.count }}</div>
      <icon-ep-Search />
      <el-input v-model.trim="searchInput">
        <!-- prefix图标居左,suffix图标居右 -->
        <template #suffix>
          <div class="icon">
            <icon-ep-Search />
          </div>
        </template>
        <template #prefix>
          <div class="icon">
            <icon-ep-Search />
          </div>
        </template>
      </el-input>
      -- {{ x }} -- {{ y }}
      <el-button type="danger" @click="counter.increment">Increment</el-button>
      <el-button type="info" @click="counter.decrement">Decrement</el-button>
      <el-table
        :data="tableData"
        style="width: 100%"
        :row-class-name="tableRowClassName"
      >
        <el-table-column prop="date" label="Date" width="180" />
        <el-table-column prop="name" label="Name" width="180" />
        <el-table-column prop="address" label="Address" />
      </el-table>
      <el-pagination
        class="mt-4"
        v-model:current-page="currentPage4"
        v-model:page-size="pageSize4"
        :page-sizes="[100, 200, 300, 400]"
        layout="total, sizes, prev, pager, next, jumper"
        :total="400"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      />
    </main>
  </div>
</template>

<script setup lang="ts">
import { useMouse } from '@vueuse/core'
import { inject, ref } from 'vue'
import useCounterStore from '@/store/counter/index.ts'

// "x" and "y" are refs
const { x, y } = useMouse()
const counter = useCounterStore()
const router = inject('router')
console.log('router:', router)
const searchInput = ref<string>('123')
interface User {
  date: string
  name: string
  address: string
}

const tableRowClassName = ({ rowIndex }: { row: User; rowIndex: number }) => {
  if (rowIndex === 1) {
    return 'warning-row'
  }
  if (rowIndex === 3) {
    return 'success-row'
  }
  return ''
}
const tableData: User[] = [
  {
    date: '2016-05-03',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles'
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles'
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles'
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles'
  }
]
const currentPage4 = ref(4)
const pageSize4 = ref(100)
const handleSizeChange = (val: number) => {
  console.log(`${val} items per page`)
}
const handleCurrentChange = (val: number) => {
  console.log(`current page: ${val}`)
}
</script>

<style scoped>
:deep().el-table .warning-row {
  --el-table-tr-bg-color: var(--el-color-warning-light-9);
}
:deep().el-table .success-row {
  --el-table-tr-bg-color: var(--el-color-success-light-9);
}
</style>
