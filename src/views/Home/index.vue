<script setup>
import Header from './components/Header.vue'
import Main from './components/Main.vue'
import Footer from './components/Footer.vue'
import { menulist } from '@/enmus';

// 
</script>

<template>
  <div class="container">
    <el-carousel class="carousel">
      <el-container direction="vertical" height="100%">
        <el-carousel-item v-for="item in menulist" :key="item.name" class="carouselItem">
          <el-image class="image" :src="item.image" />
          <Main class="main" :item="item"></Main>
        </el-carousel-item>
        <Header class="header" />
        <Footer class="footer"></Footer>
      </el-container>
    </el-carousel>
  </div>
</template>

<style scoped>
.container {
  width: 100%;
  height: 100%;

  .carousel {
    height: 100%;
    position: relative;

    .carouselItem {
      height: 100%;
      position: absolute;

      .image {
        width: 100%;
        height: inherit;
      }

    }

    .main {
      position: absolute;
      left: calc(50% - 300px);
      top: 30%;
    }

    .footer {
      width: 100%;
      position: absolute;
      bottom: 0;
    }
  }
}

:deep .el-carousel__container {
  height: 100%;
}
</style>