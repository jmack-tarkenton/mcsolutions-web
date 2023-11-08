<template>
  <Transition name="fade-slide" appear>
    <el-card :body-style="{ padding: '0px' }">
      <el-image
        class="image"
        :src="`/staff/${employee.image}`"
        fit="cover"
        :alt="`${employee.firstName} ${employee.lastName}`"
      />
      <div class="p-2">
        <el-space direction="vertical">
          <span>{{ employee.firstName }} {{ employee.lastName }}</span>
          <el-tag effect="dark" type="" size="large">{{ employee.title }}</el-tag>
        </el-space>
      </div>
    </el-card>
  </Transition>
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
.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: opacity 2s ease, transform 1s ease-in-out;
  transform: translateY(0px);
}

.fade-slide-enter-from,
.fade-slide-leave-to {
  opacity: 0;
  transform: translateY(100px);
}
</style>
