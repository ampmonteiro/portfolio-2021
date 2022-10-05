const props = {
  data: Array,
  title: String,
};

const template = /* html */ `

  <table>
    <caption> {{title}}</caption>
    <thead>
        <tr>
            <th>Technology</th>
            <th>Context</th>
        </tr>
    </thead>
    <tbody>
        <tr v-for=" { name, context } in data">
            <td>{{ name }}</td>
            <td>
              <template v-if="context.academic">
                    Academics projects to: {{ context.academic }}; <br>
              </template>
              <template v-if="context.private">
                Private projects; <br>
              </template>
              <template v-if="context.professional">
                Professional projects to:  {{ context.professional }};
              </template>
            </td>
        </tr>
    </tbody>
</table>

`;

export default {
  props,
  template,
};
