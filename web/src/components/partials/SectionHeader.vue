<template>
  <el-row :justify="justify">
    <h2 class="section-title"><span v-if="logo">Image</span>{{ title }}</h2>
  </el-row>
</template>
<script lang="ts" setup>
defineProps({
  logo: {
    type: Boolean,
    default: false,
  },
  justify: {
    type: String,
    default: 'center',
  },
  title: {
    type: String,
    required: true,
  },
});
</script>
<style lang="scss" scoped>
.section-title {
  color: var(--el-text-color-primary);
}
</style>
