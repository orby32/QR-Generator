import Home from './components/Home.vue';
import History from './components/History.vue';

export const routes = [
    {path: '/dashboard', component: Home},
    {path: '/history', component: History},
    {path: '/', redirect: '/dashboard'}
];