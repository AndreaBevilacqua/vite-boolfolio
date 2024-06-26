import { createRouter, createWebHistory } from 'vue-router';

import HomePage from '../components/pages/HomePage.vue';
import ContactUsPage from '../components/pages/ContactUsPage.vue';
import ProjectDetailPage from '../components/pages/ProjectDetailPage.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: "/", name: "home", component: HomePage },
        { path: "/projects/:id", name: "project-detail", component: ProjectDetailPage },
        { path: "/contact-us", name: "contact-us", component: ContactUsPage },
        { path: "/:pathMatch(.*)*", redirect: "/" }
    ]
});

export { router };