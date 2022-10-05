<script setup>
import { ref, computed } from 'vue';

defineProps({
  activeMenu: String,
});

const isMenuVisible = ref(false);

const showMenu = () => {
  isMenuVisible.value = !isMenuVisible.value;
};

const changeIcon = computed(() => ({
  'strippes-menu': !isMenuVisible.value,
  'close-menu': isMenuVisible.value,
}));
</script>

<template>
  <nav id="mobile-nav">
    <button id="btn-menu" @click="showMenu">
      <div :class="changeIcon"></div>
    </button>

    <section id="mobile-menu" v-show="isMenuVisible">
      <a href="/" :class="{ active: activeMenu === 'home' }">HOME</a>
      <a
        href="/about-me/"
        :class="{ active: activeMenu === 'about-me' }"
      >
        ABOUT ME
      </a>
      <a
        href="/projects/"
        :class="{ active: activeMenu === 'projects' }"
        >PROJECTS
      </a>
      <a href="/skills/" :class="{ active: activeMenu === 'skills' }">
        SKILLS
      </a>
      <a href="/social/" :class="{ active: activeMenu === 'social' }">
        SOCIAL
      </a>
    </section>
  </nav>
</template>

<style>
/* ====== Mobile nav ===========*/

/* Define the btn menu  */
#btn-menu {
  position: fixed;
  bottom: 15vh;
  right: 1rem;
  cursor: pointer;
  background-color: #0164bc;
  color: #fff;
  padding: 2rem;
  z-index: 2;
  border-radius: 1rem;
  border-color: transparent;
}

#btn-menu .strippes-menu {
  width: 3rem;
  height: 0.3rem;
  background-color: #fff;
  border-radius: 1rem;
}

#btn-menu .strippes-menu::before,
#btn-menu .strippes-menu::after {
  content: '';
  position: absolute;
  width: 3rem;
  height: 0.3rem;
  background-color: #fff;
  border-radius: 1rem;
  right: 2rem;
}

#btn-menu .strippes-menu::before {
  top: 1rem;
}

#btn-menu .strippes-menu::after {
  bottom: 1rem;
}

#btn-menu .close-menu {
  width: 3rem;
  height: 0.6rem;
}

#btn-menu .close-menu::before,
#btn-menu .close-menu::after {
  content: '';
  position: absolute;
  width: 3rem;
  height: 0.6rem;
  background-color: #fff;
  border-radius: 1rem;
  right: 20px;
}

#btn-menu .close-menu::before {
  transform: rotate(45deg);
}

#btn-menu .close-menu::after {
  transform: rotate(-45deg);
}

/* define menu */
#mobile-menu {
  position: fixed;
  height: 100vh;
  width: 100vw;
  top: 0;
  z-index: 1;
  background-color: var(--color-dark);
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  align-items: center;
}

#mobile-menu a {
  color: #ffffffa1;
}

#mobile-menu a:hover,
#mobile-menu a.active {
  color: var(--color-primary-light);
  text-decoration: underline;
  font-weight: 700;
}
</style>
