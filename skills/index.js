import { createApp, onMounted } from '../shared/vue.browser.esm';

import { useProfile } from '../shared/hooks/useProfile';
import { CommonComponents } from '../shared/components/common';

import SkillsTable from './skills-table.component';

const setup = () => {
  const { readProfile, resultProfile, loadingProfile } = useProfile();

  onMounted(readProfile);

  return {
    loading: loadingProfile,
    data: resultProfile,
  };
};

createApp({
  components: {
    ...CommonComponents,
    'app-skills-table': SkillsTable,
  },
  setup,
}).mount('body');
