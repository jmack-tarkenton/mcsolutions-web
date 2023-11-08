<template>
  <el-card :body-style="{ padding: '0px' }">
    <el-image
      class="image"
      :src="`/staff/${employee.image}`"
      fit="cover"
      :alt="`${employee.firstName} ${employee.lastName}`"
    />
    <div style="padding: 14px">
      <span>{{ employee.firstName }} {{ employee.lastName }}</span>
      <span>{{ employee.title }}</span>
    </div>
  </el-card>
</template>
<script lang="ts" setup>
import type { PropType } from 'vue';

import type { Employee } from '@/models/employee.model';

defineProps({
  employee: {
    type: Object as PropType<Employee>,
    required: true,
  },
});
</script>
<style scoped>
.image {
  width: 100%;
  height: 250px;
}
</style>
