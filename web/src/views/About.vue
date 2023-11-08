<template>
  <section-header title="Our Team" />

  <el-row :gutter="36" justify="center">
    <el-col
      :xs="12"
      :sm="6"
      :md="4"
      v-for="(employee, index) in employees"
      :key="index"
      class="mb-5"
    >
      <employee-card :employee="employee" />
    </el-col>
  </el-row>
</template>
<script lang="ts" setup>
import { storeToRefs } from 'pinia';

import EmployeeCard from '@/components/cards/EmployeeCard.vue';
import SectionHeader from '@/components/partials/SectionHeader.vue';
import { useEmployeeStore } from '@/store/employee.store.ts';

const employeeStore = useEmployeeStore();
const { employees } = storeToRefs(employeeStore);
</script>
