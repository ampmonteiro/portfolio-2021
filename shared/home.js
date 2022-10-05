import { createApp } from './vue.browser.esm';
import AppFooter from './components/app-footer.component';

createApp({})
  .component('app-footer', AppFooter)
  .mount('#main-footer');
