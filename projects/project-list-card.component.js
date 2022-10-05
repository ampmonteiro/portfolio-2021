const props = {
  data: Array,
};

const setup = (props) => {
  const pjs = props.data.map((item) => {
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

  return { pjs };
};

const template = /* html */ `

<section v-for="item in pjs">
    <img :src="'/assets/img/' + item.img" 
         :alt=" item.title +' - '+ item.year" />
    <p>{{ item.title }} - {{item.year}}</p>
    <a class="btn btn-outline" 
        :href="'/project-details/?slug=' + item.slug">
    Details
    </a>
</section>
`;

export default {
  props,
  setup,
  template,
};
