<template lang="">
  <div>axios test</div>
</template>
<script setup lang="ts">
import { http } from "@/service/request";
// import axios from "axios";
onMounted(() => {
  http.get("/doctor/hot").then((res) => {
    console.log(res);
  });
  // axios
  //   .get("http://localhost:3000/api/v1/doctor/hot")
  //   .then((res) => {
  //     console.log(res);
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   });
  // http.post("/department").then((res) => {
  //   console.log(res);
  // });
});
</script>
<style lang="scss"></style>
