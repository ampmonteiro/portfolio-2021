const props = {
  title: String,
};

const template = /* html */ `
  <details>
    <summary>{{title}}</summary>
    <slot />
  </details>
  `;

export default {
  props,
  template,
};
