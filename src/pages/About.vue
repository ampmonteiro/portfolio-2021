<script setup>
import { onMounted } from 'vue';
import { useProfile } from '../hooks/useProfile';

import App from '../components/App.vue';
import AboutInfo from '../components/about/AboutInfo.vue';
import AboutDetails from '../components/about/AboutDetails.vue';
import AboutListWork from '../components/about/AboutListWork.vue';
import AboutListEdu from '../components/about/AboutListEdu.vue';

const {
  readProfile,
  resultProfile: data,
  loadingProfile: loading,
} = useProfile();

onMounted(readProfile);
</script>

<template>
  <App header="About me" page="about-me">
    <template v-if="!loading">
      <AboutInfo
        :name="data.name"
        :city="data.city"
        :job="data.job"
        :exp="data.exp"
        :degree="data.degree"
        :school="data.school"
        :school-link="data.schoolLink"
      />

      <AboutDetails title="Work Experience">
        <AboutListWork :data="data.work" />
      </AboutDetails>

      <AboutDetails title="Education | Certifications">
        <AboutListEdu :data="data.courses" />
      </AboutDetails>
    </template>
  </App>
</template>

<style>
details {
  margin: 2rem 1rem;
}

summary {
  cursor: pointer;
  outline: none;
  font-size: 2rem;
  font-weight: 700;
  color: #fff;
  background-color: var(--color-primary);
  padding: 2rem;
}

summary::marker,
summary::-webkit-details-marker {
  color: var(--color-secundary);
}

details section {
  background-color: #fff;
  padding: 1rem 3.8rem;
  border-bottom: 3px dotted var(--color-primary);
}

details section:last-of-type {
  border-bottom: unset;
}

dl {
  font-size: 1.6rem;
  line-height: 2;
  margin-bottom: 5rem;
}

dt {
  font-weight: 600;
}

dd {
  margin-left: 1.6rem;
  letter-spacing: 0.8px;
}

.company,
.period,
.position {
  margin-bottom: 2rem;
}

.position {
  margin-top: 2rem;
  font-weight: 900;
  color: var(--color-primary);
}

.company {
  font-weight: 500;
  color: var(--color-secundary);
}

.period {
  color: #585858;
}
@media only screen and (min-width: 1200px) {
  #exp,
  details {
    margin: 1rem 0;
  }

  details {
    margin: 2rem 0;
  }
}
</style>
