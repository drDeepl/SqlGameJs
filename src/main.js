import {createApp} from 'vue';
import App from './App.vue';
import Form from '@/components/Form.vue';

import './assets/main.scss';

const app = createApp(App);

app.mount('#app');

const config = {
  colors: {
    variables: {
      primary: '#5a6170',
      secondary: '#fff',
      success: '#43d681',
      danger: '#ee4540',
      grey: '#565656'
    }
  }
};

// app.use(createVuestic({config: config}));
