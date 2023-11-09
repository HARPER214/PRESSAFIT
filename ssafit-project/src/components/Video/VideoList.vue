<template>
  <div>차량 목록</div>
</template>

<script setup>
import { useVideoStore } from "@/stores/videoStore";
const videoStore = useVideoStore();
console.log(videoStore.videos.value);
</script>

<style scoped></style>
