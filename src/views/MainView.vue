<template>
  <CustomHeader />
  <div class="container">
    <SideBar />
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script setup>
import SideBar from '../components/SideBar.vue';
import CustomHeader from '@/components/CustomHeader.vue';
</script>

<style scoped>
.container {
  display: flex;
}
.content {
  flex: 1;
  padding: 20px;
}
</style>
