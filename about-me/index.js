import { createApp, onMounted } from '../shared/vue.browser.esm';
import { CommonComponents } from '../shared/components/common';
import AboutInfo from './about-info.component';
import AboutDetails from './about-details.component';
import AboutListWork from './about-list-work.component';
import AboutListEdu from './about-list-edu.component';
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
    'app-about-info': AboutInfo,
    'app-about-details': AboutDetails,
    'app-about-list-work': AboutListWork,
    'app-about-list-edu': AboutListEdu,
  },
  setup,
}).mount('body');
