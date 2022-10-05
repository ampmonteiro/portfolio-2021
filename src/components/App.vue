<script setup>
import AppNavMain from './AppNavMain.vue';
import AppFooter from './AppFooter.vue';
import AppNavMobile from './AppNavMobile.vue';

// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup

defineProps({
  header: String,
  page: String,
});
</script>

<template>
  <AppNavMain :active-menu="page" />

  <main id="main-content">
    <h1 class="container">{{ header }}</h1>
    <article class="container">
      <slot></slot>
    </article>
  </main>

  <AppFooter />

  <!-- btn top-->
  <a id="btn-up" href="#" title="Go to Top">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M5 10l7-7m0 0l7 7m-7-7v18"
      />
    </svg>
  </a>
  <!-- mobile actions -->

  <AppNavMobile :active-menu="page" />
</template>

<style>
@import '../common.css';

/* Main content */
#main-content {
  background-color: var(--color-primary-light);
  padding: 4rem 0;
}

#main-content h1 {
  margin-bottom: 4rem;
  margin-left: 1rem;
}

@media only screen and (min-width: 630px) {
  body {
    display: grid;
    grid-template-rows: 1fr auto;
  }

  #main-content h1 {
    margin-top: 5rem;
  }
}

@media only screen and (min-width: 1024px) {
  #main-content h1 {
    margin-left: auto;
  }
}

/* btn up */

#btn-up {
  display: none;
  position: fixed;
  bottom: 2rem;
  right: 14rem;
  background-color: #0164bc;
  color: #fff;
  padding: 1.2rem 1.4rem;
  z-index: 1;
}

#btn-up svg {
  width: 20px;
}

@media only screen and (min-width: 630px) {
  #btn-menu {
    display: none;
  }

  #btn-up {
    display: inline-block;
  }
}
</style>
