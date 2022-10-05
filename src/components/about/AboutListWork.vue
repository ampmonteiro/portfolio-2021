<script setup>
defineProps({
  data: Array,
});
</script>

<template>
  <section v-for="item in data">
    <p class="position">{{ item.title }}</p>
    <p class="company">{{ item.company }}</p>
    <p class="period">{{ item.period }}</p>
    <dl>
      <dt>Technologies:</dt>
      <dd>{{ item.tech }}</dd>
      <dt>Frameworks | Libraries | API:</dt>
      <dd>{{ item.frameworks }}</dd>
      <dt>Package managers:</dt>
      <dd>{{ item.pkg }}</dd>
      <dt>Database:</dt>
      <dd>{{ item.db }}</dd>
      <dt>CVS:</dt>
      <dd>{{ item.cvs }}</dd>
      <dt>Software:</dt>
      <dd>{{ item.software }}</dd>
    </dl>
  </section>
</template>
