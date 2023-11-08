<script setup lang="ts">
import NavHeader from './components/partials/Header.vue';
</script>

<template>
  <nav-header />
  <el-container id="main">
    <el-main>
      <router-view />
    </el-main>
  </el-container>
</template>
