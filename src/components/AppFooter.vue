<script setup>
const year = new Date();
const updated = '10/2022';
</script>

<template>
  <footer id="main-footer">
    <section class="container">
      <p>
        &copy; {{ year.getFullYear() }} | Developed by:
        <span> Agostinho Monteiro </span>
      </p>
      <p>Last update: {{ updated }}</p>
      <p>
        Powered by:
        <a
          href="https://vuejs.org/"
          target="_blank"
          class="framework"
          title="visit VueJS"
        >
          Vue ( 3.2 )
        </a>
      </p>
      <p>
        Icons by
        <a
          href="https://icons.getbootstrap.com/"
          target="_blank"
          title="visit bootstrap icons"
        >
          Bootstrap Icons
        </a>
      </p>
    </section>
  </footer>
</template>

<style>
/* FOOTER */
#main-footer {
  min-height: 11vh;
  background-color: #000;
  color: #ffffff;
}

#main-footer a,
#main-footer p {
  font-size: 1.4rem;
}

#main-footer section {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  height: 100%;
  padding: 2rem;
  gap: 1rem 14rem;
}

#main-footer a {
  color: var(--color-primary-light);
}

#main-footer .framework {
  color: #3fdd3f;
  font-weight: 600;
}

#main-footer .framework:hover {
  color: #15a815;
  font-weight: 600;
}

#main-footer a:hover {
  color: var(--color-primary);
}

@media only screen and (min-width: 630px) {
  #main-footer section {
    justify-content: space-around;

    gap: unset;
  }
}
</style>
