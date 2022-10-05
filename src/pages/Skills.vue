<script setup>
import { onMounted } from 'vue';
import { useProfile } from '../hooks/useProfile';
import App from '../components/App.vue';
import SkillsTable from '../components/SkillsTable.vue';

const {
  readProfile,
  resultProfile: data,
  loadingProfile: loading,
} = useProfile();

onMounted(readProfile);
</script>
<template>
  <App header="Skills" page="skills">
    <template v-if="!loading">
      <SkillsTable
        title="Technologies (for Web and other kind) that i worked with:"
        :data="data.skills.techs"
      />

      <SkillsTable
        title="Framework | Libraries | API that i worked with:"
        :data="data.skills.frameworks"
      />

      <SkillsTable
        title="Packger Managers i used:"
        :data="data.skills.pkgs"
      />

      <SkillsTable
        title="Software i worked with:"
        :data="data.skills.soft"
      />
    </template>
  </App>
</template>

<style>
@import '../common.css'; /* common styles */
</style>
