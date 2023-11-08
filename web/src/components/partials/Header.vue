<template>
  <el-menu
    :default-active="activeIndex"
    class="mcsolutions-header"
    mode="horizontal"
    :ellipsis="false"
    @select="handleSelect"
    router
    background-color="#323330"
    active-text-color="#ed2415"
    text-color="#ffffff"
  >
    <el-menu-item :index="RouteNames.Home" :route="RouteNames.Home">
      <img src="/logo.png" alt="McCormick Solutions Logo" />
    </el-menu-item>
    <div class="flex-grow" />
    <el-menu-item :index="RouteNames.About" :route="RouteNames.About">About</el-menu-item>
    <el-menu-item :index="RouteNames.Contact" :route="RouteNames.Contact">Contact Us</el-menu-item>
  </el-menu>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

import { RouteNames } from '~/router/router.ts';

const activeIndex = ref('1');
const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
</script>

<style lang="scss" scoped>
.flex-grow {
  flex-grow: 1;
}
.mcsolutions-header {
  background-color: #323330;
  padding: 2rem;
  min-height: 5vh;
  max-height: 20vh;

  img {
    width: 100px;

    padding: 2rem;
  }
}
</style>
