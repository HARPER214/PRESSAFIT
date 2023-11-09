<template>
  <div>
    <HeaderNav />
    <router-view></router-view>
    <div class="app-footer-container">
      <Footer />
    </div>
  </div>
</template>

<script setup>
import HeaderNav from "@/components/commons/HeaderNav.vue";
import Footer from "@/components/commons/Footer.vue";
</script>

<style scoped>
* {
  font-family: Poppins, "Noto Sans KR", sans-serif;
}
.app-footer-container {
  background-color: black;
  color: white;
  font-weight: bold;
  font-size: 1.2rem;
  height: 70px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  position: absolute;
  bottom: 0;
}
</style>
