<script setup>
import { onMounted, ref } from "vue";
import ProfilePekerja from "@/components/pekerja/profile/ProfilePekerja.vue";
let props = defineProps({
  id: String,
});

// nanti amik data pekerja dari store
let namaPekerja = ref("");
onMounted(() => {
  console.log(props);
  namaPekerja.value = props.id;
});
</script>

<template>
  <ProfilePekerja />
</template>