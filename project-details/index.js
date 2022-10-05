import { createApp, onMounted } from '../shared/vue.browser.esm';

import { CommonComponents } from '../shared/components/common';
import { useProfile } from '../shared/hooks/useProfile';

import ProjectDetails from './project-details.component';

const setup = () => {
  const existParam = window.location.search.includes('?');

  const existSlug = window.location.search
    .split('?')[1]
    .includes('slug');

  const slug =
    window.location.search.includes('=') &&
    window.location.search.split('=')[1];

  if (!existParam || !existSlug || !slug) {
    console.log('nao exist');
    const pro = window.location.protocol;
    const host = window.location.host;

    window.location.replace(`${pro}//${host}/projects/`);

    return;
  }

  const { readProfile, resultProfile, loadingProfile } = useProfile();

  onMounted(readProfile);

  return {
    loading: loadingProfile,
    data: resultProfile,
    slug,
  };
};

createApp({
  components: {
    ...CommonComponents,
    'app-project-details': ProjectDetails,
  },
  setup,
}).mount('body');
