<script setup lang="ts">
import NavHeader from './components/partials/Header.vue';
</script>

<template>
  <div>
    <nav-header />

    <el-container id="main">
      <el-main>
        <router-view />
      </el-main>
      <el-footer class="footer">
        <ul class="social-network social-circle">
          <li>
            <a
              href="https://www.facebook.com/McCormick-Solutions-114161913327290/"
              target="_blank"
              class="icoFacebook soci"
              title="Facebook"
              ><i class="fa fa-facebook"></i
            ></a>
          </li>
          <li>
            <a
              href="mailto:terry.mccormick@mccormicksolutions.com"
              class="icoTwitter soci"
              title="Twitter"
              ><i class="fa fa-envelope"></i
            ></a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/mccormicksolutions/"
              target="_blank"
              class="icoGoogle soci"
              title="Google +"
              ><i class="fa fa-instagram"></i
            ></a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/company/mccormick-solutions/"
              target="_blank"
              class="icoLinkedin soci"
              title="Linkedin"
              ><i class="fa fa-linkedin"></i
            ></a>
          </li>
        </ul>
      </el-footer>
    </el-container>
  </div>
</template>
<style scoped>
.footer,
.social-network {
  position: sticky;
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
}
</style>
