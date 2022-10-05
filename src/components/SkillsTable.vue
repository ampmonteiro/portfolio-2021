<script setup>
defineProps({
  data: Array,
  title: String,
});
</script>

<template>
  <table>
    <caption>
      {{
        title
      }}
    </caption>
    <thead>
      <tr>
        <th>Technology</th>
        <th>Context</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="{ name, context } in data">
        <td>{{ name }}</td>
        <td>
          <template v-if="context.academic">
            Academics projects to: {{ context.academic }}; <br />
          </template>
          <template v-if="context.private">
            Private projects; <br />
          </template>
          <template v-if="context.professional">
            Professional projects to: {{ context.professional }};
          </template>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<style>
article {
  padding: 1rem 0;
  width: 100%;
}

table {
  background: #fff;
  margin-top: 2rem;
  width: 100%;
}

table caption {
  background: #fff;
  font-size: 1.6rem;
  padding-bottom: 1rem;
  padding-top: 3rem;
  padding-left: 1rem;
  text-align: left;
}

thead {
  text-align: left;
  font-size: 1.8rem;
  background-color: var(--color-primary-light);
  color: #000;
}

th {
  font-weight: 600;
  text-align: center;
  padding: 1rem;
}

th:first-of-type {
  width: 30%;
}

td {
  padding: 1rem;
  font-size: 1.6rem;
}

tr:nth-child(even) {
  background-color: #eee;
}

@media only screen and (min-width: 600px) {
  table caption {
    margin-left: unset;
  }

  th {
    text-align: left;
  }

  th:first-of-type {
    width: 25%;
  }
}
</style>
