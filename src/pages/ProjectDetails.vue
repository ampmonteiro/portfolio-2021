<script setup>
import { onMounted } from 'vue';
import { useProfile } from '../hooks/useProfile';

import App from '../components/App.vue';
import ProjectInfo from '../components/ProjectInfo.vue';

const existParam = window.location.search.includes('?');

const existSlug = window.location.search
  .split('?')[1]
  .includes('slug');

const slug =
  window.location.search.includes('=') &&
  window.location.search.split('=')[1];

if (!existParam || !existSlug || !slug) {
  console.log('nao exist');
  const pro = window.location.protocol;
  const host = window.location.host;

  window.location.replace(`${pro}//${host}/projects/`);
}

const {
  readProfile,
  resultProfile: data,
  loadingProfile: loading,
} = useProfile();

onMounted(readProfile);
</script>
<template>
  <App header="Project Details" page="">
    <ProjectInfo :slug="slug" v-if="!loading" :data="data.projs" />
  </App>
</template>

<style>
/* common styles */
@import '../common.css';

article {
  background-color: #fff;
  padding: 2rem;
}

article.container {
  margin: 0 1rem;
}

@media only screen and (min-width: 1200px) {
  article.container {
    margin: 0 auto;
  }
}

img {
  width: 100%;
  margin: 4rem 1rem;
}

dl {
  margin-left: 1.6rem;
  font-size: 1.6rem;
  line-height: 2;
  margin-bottom: 5rem;
}

dt {
  font-weight: 600;
}

dd {
  margin-left: 1.6rem;
  letter-spacing: 0.8px;
}

article section:first-of-type {
  display: flex;
  flex-wrap: wrap;
}

article section:last-of-type {
  display: flex;
  place-content: center;
}

@media only screen and (min-width: 1024px) {
  img {
    width: 50%;
  }

  dd {
    max-width: 43ch;
  }

  article section:first-of-type {
    align-items: center;
  }
}
</style>
