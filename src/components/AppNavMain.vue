<script setup>
defineProps({
  activeMenu: String,
});
</script>

<template>
  <header id="main-header">
    <section class="container">
      <a href="/" class="logo">&lt; AgostinhoMonteiro /&gt;</a>
      <nav>
        <a href="/" :class="{ active: activeMenu === 'home' }">
          HOME
        </a>
        <a
          href="/about-me/"
          :class="{ active: activeMenu === 'about-me' }"
        >
          ABOUT ME
        </a>
        <a
          href="/projects/"
          :class="{ active: activeMenu === 'projects' }"
        >
          PROJECTS
        </a>
        <a
          href="/skills/"
          :class="{ active: activeMenu === 'skills' }"
        >
          SKILLS
        </a>
        <a
          href="/social/"
          :class="{ active: activeMenu === 'social' }"
          >SOCIAL</a
        >
      </nav>
    </section>
  </header>
</template>

<style>
/* HEADER */
#main-header {
  background-color: var(--color-dark);
  width: 100%;
  min-height: 5.5rem;
}

#main-header section {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
  min-height: 5.5rem;
}

#main-header nav {
  display: none;
}

.logo {
  color: var(--color-primary-light);
  font-size: 2rem;
  font-weight: 900;
  padding: 2rem 0;
}

#main-header nav a {
  display: inline-block;
  padding: 2rem;
  text-align: center;
  font-size: 1.2rem;
  color: #ffffffa1;
}

@media only screen and (min-width: 630px) {
  #main-header {
    position: fixed;
    top: 0;
    left: 0;
  }

  .logo {
    padding: unset;
  }

  #main-header nav {
    display: block;
  }

  #main-header nav a:active,
  #main-header nav a:hover,
  #main-header nav .active {
    background-color: var(--color-primary-light);
    display: inline-block;
    color: #000;
  }
}

@media only screen and (min-width: 1024px) {
  #main-header section {
    justify-content: space-between;
  }
}
</style>
