import { createApp, onMounted } from '../shared/vue.browser.esm';
import { CommonComponents } from '../shared/components/common';
import ProjectListCard from './project-list-card.component';
import { useProfile } from '../shared/hooks/useProfile';

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
    'app-project-list-card': ProjectListCard,
  },
  setup,
}).mount('body');
