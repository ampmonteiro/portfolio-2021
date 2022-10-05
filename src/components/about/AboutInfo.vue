<script setup>
defineProps({
  name: String,
  city: String,
  job: String,
  exp: String,
  degree: String,
  schoolLink: String,
  school: String,
});
</script>

<template>
  <section id="about-text">
    <p>
      My name is <strong> {{ name }} </strong>, live in {{ city }}.
    </p>
    <p>
      {{ job }}, <strong> with {{ exp }} years </strong> of
      professional experience.
    </p>
    <p>
      {{ degree }}
      at
      <a :href="schoolLink" target="_blank"> {{ school }} </a> .
    </p>
  </section>
</template>

<style>
#about-text {
  background-color: #fff;
  padding: 2rem;
  margin: 1rem;
  line-height: 3;
  border-left: 2rem solid var(--color-dark);
}

@media only screen and (min-width: 1200px) {
  #about-text {
    margin: unset;
  }
}
</style>
