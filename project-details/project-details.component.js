const props = {
  slug: String,
  data: Array,
};

const setup = (props) => {
  const projs = props.data.map((item) => {
    const slug = item.title
      .toLocaleLowerCase()
      .trim()
      .split(' ')
      .join('-');

    return {
      ...item,
      slug,
    };
  });

  const current = projs.find((item) => item.slug === props.slug);

  if (!current) {
    const pro = window.location.protocol;
    const host = window.location.host;

    window.location.replace(`${pro}//${host}/projects/`);

    return;
  }

  return current;
};

const template = /* html */ `

<article class="container">
  <h3> {{ title }} - {{ year }}</h3>
  <section>
    <img  :src="'/assets/img/'+ img" :alt=" title + ' - ' + year" />
    <dl>
      <dt>Description:</dt>
      <dd v-html="descr">

      </dd>
      
      <dt>Technologies:</dt>
      <dd>{{ techs }}</dd>

      <dt>Frameworks | Libraries | API:</dt>
      <dd>{{ frameworks }}</dd>
    </dl>
  </section>

  <section>
    <a class="btn btn-outline" target="_blank" :href="see">
      Let's see
    </a>
  </section>
</article>

`;

export default {
  props,
  setup,
  template,
};
