const props = {
  activeMenu: String,
};

const template = /* html */ `

  <section class="container">
    <a href="/" class="logo">&lt; AgostinhoMonteiro /&gt;</a>
    <nav>
      <a href="/" :class="{ active: activeMenu ==='home'}">HOME</a>
      <a href="/about-me/" :class="{ active: activeMenu ==='about-me'}">ABOUT ME</a>
      <a href="/projects/" :class="{ active: activeMenu ==='projects'}">PROJECTS</a>
      <a href="/skills/" :class="{ active: activeMenu ==='skills'}">SKILLS</a>
      <a href="/social/" :class="{ active: activeMenu ==='social'}">SOCIAL</a>
    </nav>
  </section>
  `;

export default {
  props,
  template,
};
