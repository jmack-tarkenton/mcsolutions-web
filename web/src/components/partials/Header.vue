<template>
  <div id="header-container">
    <el-affix :offset="5" position="top" target="#header-container">
      <el-button @click="toggleDark()" style="float: right" class="mt-1 mr10">
        <template #icon>
          <moon v-if="isDark" />
          <sunny v-else />
        </template>
        {{ isDark ? 'Dark' : 'Light' }}
      </el-button>
    </el-affix>
    <el-row justify="center">
      <img
        class="header-logo"
        :src="isDark ? 'dark_logo.png' : '/logo.png'"
        alt="McCormick Solutions Logo"
      />
    </el-row>

    <el-menu
      :default-active="activeIndex"
      class="mcsolutions-nav"
      mode="horizontal"
      :ellipsis="false"
      @select="handleSelect"
      router
    >
      <el-row justify="center" class="px-3">
        <el-menu-item :index="RouteNames.Home" :route="{ name: RouteNames.Home }">
          Home
        </el-menu-item>

        <el-menu-item :index="RouteNames.About" :route="{ name: RouteNames.About }"
          >About
        </el-menu-item>
        <el-menu-item :index="RouteNames.Contact" :route="{ name: RouteNames.Contact }">
          Contact
        </el-menu-item>
      </el-row>
    </el-menu>
  </div>
</template>

<script lang="ts" setup>
import { Moon, Sunny } from '@element-plus/icons-vue';
import { useDark, useToggle } from '@vueuse/core';
import { ref } from 'vue';

import { RouteNames } from '@/router/router.ts';

const activeIndex = ref({ name: RouteNames.Home });
const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};

const isDark = useDark();

const toggleDark = useToggle(isDark);
</script>

<style lang="scss" scoped>
#header-container * {
  background-color: var(--el-bg-color);
  color: var(--el-text-color-primary);
}

.header-logo {
  width: 250px;
}

.flex-grow {
  flex-grow: 1;
}

.mcsolutions-nav {
  background-color: inherit;
  width: 100%;
  display: unset;

  img {
    width: 100px;
  }
}
</style>
