const props = {
  name: String,
  city: String,
  job: String,
  exp: String,
  degree: String,
  schoolLink: String,
  school: String,
};

const template = /* html */ `
  <p>
    My name is <strong> {{ name }} </strong>, live in {{ city }}.
  </p>
  <p>
    {{job}},
    <strong> with {{exp}} years </strong> of professional experience.
  </p>
  <p>
    {{degree}}
    at
    <a :href="schoolLink" target="_blank">{{school}}</a>.
  </p>
`;

export default {
  props,
  template,
};
