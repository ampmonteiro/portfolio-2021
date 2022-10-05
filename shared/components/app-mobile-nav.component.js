import { ref, computed } from '../vue.browser.esm';

const props = {
  activeMenu: String,
};

const setup = () => {
  const isMenuVisible = ref(false);

  const showMenu = () => {
    isMenuVisible.value = !isMenuVisible.value;
  };

  const changeIcon = computed(() => ({
    'strippes-menu': !isMenuVisible.value,
    'close-menu': isMenuVisible.value,
  }));

  return { isMenuVisible, changeIcon, showMenu };
};

const template = /* html */ `

    <button id="btn-menu" @click="showMenu">
        <div :class="changeIcon"></div>
    </button>

    <section id="mobile-menu" v-if ="isMenuVisible">
        <a href="/" :class="{ active: activeMenu ==='home'}">HOME</a>
        <a href="/about-me/" :class="{ active: activeMenu ==='about-me'}">ABOUT ME</a>
        <a href="/projects/" :class="{ active: activeMenu ==='projects'}">PROJECTS</a>
        <a href="/skills/" :class="{ active: activeMenu ==='skills'}">SKILLS</a>
        <a href="/social/" :class="{ active: activeMenu ==='social'}">SOCIAL</a>
    </section>

`;

export default {
  props,
  setup,
  template,
};
