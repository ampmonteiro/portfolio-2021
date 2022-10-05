<script setup>
import AppFooter from '../components/AppFooter.vue';
</script>

<template>
  <AppFooter />
</template>

<style>
/* common styles */
@import '../common.css';

.container {
  width: 100%;
}

#me-card .big-title {
  text-align: center;
  margin: 0;
}

body {
  background-color: var(--color-primary-light);
}

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
    margin-top: 10rem;
  }
}

@media only screen and (min-width: 1024px) {
  #main-content h1 {
    margin-left: auto;
  }
}

article {
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #ffffff;
}

article {
  padding: 4rem 0;
}

#me-card section {
  line-height: 2;
  text-align: center;
}

#skills section {
  margin: 4rem auto;
  display: flex;
}

#me-card footer {
  margin-top: 2.6rem;
  display: inherit;
}
/* Me and Skills Cards */

#me-card a,
#skills p {
  margin: 0 1.6rem;
}

/* Social */

#social section {
  margin-top: 3rem;
}

.bi {
  width: 6.5rem;
  color: var(--color-primary-light);
  padding-right: 2rem;
}

.bi.bi-linkedin:hover {
  color: var(--color-primary);
}

.bi.bi-github:hover {
  color: rgb(70, 69, 69);
}

.bi.bi-youtube:hover {
  color: red;
}

/* Tablet */
@media only screen and (min-width: 600px) {
  main {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0.4rem;
  }

  #me-card {
    grid-column: span 2;
  }
}

/* Desktop */
@media only screen and (min-width: 1200px) {
  main {
    grid-template-columns: 2fr 1fr;
  }

  article {
    justify-content: center;
  }

  #me-card {
    grid-column: unset;
    grid-row: span 2;
  }
}
</style>
