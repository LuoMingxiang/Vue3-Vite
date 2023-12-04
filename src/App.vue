<template>
  <AxiosTest />
</template>
<script setup lang="ts">
import { useUserStore } from "@stores/index";
const userStore = useUserStore();
console.log(userStore.user);
</script>
<style scoped></style>
