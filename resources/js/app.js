import './bootstrap';

import './assets/scss/main.scss';
import './assets/scss/oneui/themes/amethyst.scss';
import './assets/scss/oneui/themes/city.scss';
import './assets/scss/oneui/themes/flat.scss';
import './assets/scss/oneui/themes/modern.scss';
import './assets/scss/oneui/themes/smooth.scss';


import { createApp, h } from 'vue';
import { createInertiaApp } from '@inertiajs/vue3';
import { createPinia } from "pinia";
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { ZiggyVue } from '../../vendor/tightenco/ziggy/dist/vue.m';

// Template components
import BaseBlock from "./Components/BaseBlock.vue";
import BaseBackground from "./Components/BaseBackground.vue";
import BasePageHeading from "./Components/BasePageHeading.vue";

// Bootstrap framework
import * as bootstrap from "bootstrap";
window.bootstrap = bootstrap;

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => resolvePageComponent(`./Pages/${name}.vue`, import.meta.glob('./Pages/**/*.vue')),
    setup({ el, App, props, plugin }) {
        return createApp({ render: () => h(App, props) })
            .component("BaseBlock", BaseBlock)
            .component("BaseBackground", BaseBackground)
            .component("BasePageHeading", BasePageHeading)
            .use(createPinia())
            .use(plugin)
            .use(ZiggyVue)
            .mount(el);
    },
    progress: {
        color: '#4B5563',
    },
});
