import { sync } from 'vuex-router-sync';
import Vue from 'vue';
import App from './App';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

sync(store, router);

/* eslint-disable no-new */
new Vue({
    router,
    store,
    el: '#app',
    render: h => h(App),
});
