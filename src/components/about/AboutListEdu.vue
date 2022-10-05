<script setup>
defineProps({
  data: Array,
});
</script>

<template>
  <section v-for="item in data">
    <p class="position">{{ item.title }}</p>
    <p class="company">{{ item.school }}</p>
    <p class="period">{{ item.year }}</p>
  </section>
</template>
