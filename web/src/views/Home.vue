<template>
  <el-carousel height="50vh" direction="horizontal" :autoplay="true" type="card">
    <el-carousel-item v-for="item in carouselItems" :key="item" style="">
      <div class="carousel-container">
        <div class="top-middle">
          <h3 text="2xl" justify="center">{{ item.title }}</h3>
        </div>
        <el-image style="width: 100%; height: 100%" :fit="'fill'" :src="item.image" />
      </div>
    </el-carousel-item>
  </el-carousel>
</template>
<script lang="ts" setup>
const carouselItems = [
  {
    title: 'Field Inspections',
    image: '/landing/inspection.png',
    description: 'We provide field inspections for all types of properties.',
  },
  {
    title: 'GIS Analysis',
    image: '/landing/gis.jpg',
    description: 'We provide GIS analysis for all types of properties.',
  },
];
</script>
<style scoped lang="scss">
.carousel-container {
  position: relative;
  width: 100%;
  height: 100%;
}
.top-middle {
  position: absolute;
  top: 8px;
  left: 40%;
  right: 40%;

  //color: black;
  z-index: 500;
  h3 {
    text-shadow: 3px 3px 3px black, -3px -3px 3px black, 3px -3px 3px black, -3px 3px 3px black;
  }
}
</style>
