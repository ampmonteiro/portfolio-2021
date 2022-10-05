<script setup>
const props = defineProps({
  data: Array,
});

const pjs = props.data.map((item) => {
  const slug = item.title
    .toLocaleLowerCase()
    .trim()
    .split(' ')
    .join('-');

  return {
    ...item,
    slug,
  };
});
</script>

<template>
  <section v-for="item in pjs">
    <img
      :src="'/assets/img/' + item.img"
      :alt="item.title + ' - ' + item.year"
    />
    <p>{{ item.title }} - {{ item.year }}</p>
    <a
      class="btn btn-outline"
      :href="'/project-details/?slug=' + item.slug"
    >
      Details
    </a>
  </section>
</template>
