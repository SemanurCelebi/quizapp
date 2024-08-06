import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Questions from '@/views/Questions.vue'
import Categories from "@/views/Categories.vue";
import Results from '@/views/Results.vue';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/categories',
        name: 'categories',
        component: Categories
    },
    {
        path: '/questions/:category',
        name: 'Questions',
        component: Questions,
        props: true
    },
    {
        path: '/results',
        name: 'Results',
        component: Results
    },
]

const router = createRouter({
    history: createWebHistory('/quizapp/'),
    routes
})

export default router;
