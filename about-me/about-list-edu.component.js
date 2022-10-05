const props = {
  data: Array,
};

const template = /* html */ `
  
<section v-for="item in data">
    <p class="position"> {{ item.title }}</p>
    <p class="company"> {{ item.school }}</p>
    <p class="period">{{ item.year }}</p>
</section>

`;

export default {
  name: 'AboutListEdu',
  props,
  template,
};
