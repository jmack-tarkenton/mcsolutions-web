<template>
  <div>Our Team</div>

  <el-row :gutter="36">
    <el-col :sm="8" :md="4" v-for="(employee, index) in employees" :key="index">
      <employee-card :employee="employee" />
    </el-col>
  </el-row>
</template>
<script lang="ts" setup>
import { storeToRefs } from 'pinia';

import EmployeeCard from '@/components/cards/EmployeeCard.vue';
import { useEmployeeStore } from '@/store/employee.store.ts';

const employeeStore = useEmployeeStore();
const { employees } = storeToRefs(employeeStore);
</script>
