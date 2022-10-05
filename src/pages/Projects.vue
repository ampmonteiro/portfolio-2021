<script setup>
import { onMounted } from 'vue';
import { useProfile } from '../hooks/useProfile';

import App from '../components/App.vue';
import ProjectListCard from '../components/ProjectListCard.vue';

const {
  readProfile,
  resultProfile: data,
  loadingProfile: loading,
} = useProfile();

onMounted(readProfile);
</script>
<template>
  <App header="Projects" page="projects">
    <ProjectListCard v-if="!loading" :data="data.projs" />
  </App>
</template>

<style>
/* common styles */
@import '../common.css';

/* Override */

img {
  display: block;
  width: 100%;
  object-fit: contain;
  height: 64%;
}

/* end override  */

article section {
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  justify-content: space-between;
  align-items: center;
  height: 40rem;
  margin: 2rem 1rem;
  max-width: 50rem;
}

article section a {
  margin-bottom: 1rem;
}

@media only screen and (min-width: 600) {
  article {
    display: grid;
    grid-template-columns: 1fr;
    align-items: center;
    gap: 3rem;
  }

  article section {
    height: 40rem;
  }
}

@media only screen and (min-width: 570px) {
  article {
    display: grid;
    grid-template-columns: minmax(40rem, 70rem);
    justify-content: center;
  }

  article section {
    height: 60rem;
    max-width: unset;
  }
}

@media only screen and (min-width: 850px) {
  article {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(40rem, 1fr));
    gap: 3rem;
  }

  article section {
    height: 50rem;
  }
}
</style>
