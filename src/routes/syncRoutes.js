import Home from '../components/Home';
import Ui from '../components/Ui.js';

export const routes = [
  {
    component: Home,
    path: '/',
    exact: true,
  },
  {
    component: Ui,
    path: '/ui',
    exact: true,
  },
];
