<script setup>
defineProps({
  title: String,
});
</script>

<template>
  <details>
    <summary>{{ title }}</summary>
    <slot />
  </details>
</template>
