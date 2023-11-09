import { ref, computed } from "vue";
import { defineStore } from "pinia";
import axios from "axios";
import router from "@/router";

const REST_VIDEO_API = `http://localhost:1004/api-video`;
export const useVideoStore = defineStore("video", () => {
  //비디오 전체 목록 가져오기
  //담아 줄 배열
  const videos = ref([]);
  const videoCnt = computed(() => {
    return videos.value.length;
  });

  const getVideos = function () {
    //GET으로 가져올거다
    axios.get(REST_VIDEO_API).then((response) => {
      //   console.log(response.data);
      videos.value = response.data;
    });
  };

  return { getVideos, videoCnt };
});
