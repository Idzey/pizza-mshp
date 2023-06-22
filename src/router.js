import { createRouter, createWebHistory } from 'vue-router'
import HomePage from './views/HomePage.vue'
import MenuPage from './views/MenuPage.vue'
import PizzaPage from './views/PizzaPage.vue'
import CartPage from './views/CartPage.vue'

export default createRouter({
    // История переходов сохраняется
    history: createWebHistory(),
    routes: [
        {
            name: 'home',
            path: '/',
            component: HomePage
        },
        {
            name: 'menu',
            path: '/menu',
            component: MenuPage
        },
        {
            name: 'pizza',
            path: '/pizza/:id',
            component: PizzaPage
        },
        {
            name: 'cart',
            path: '/cart',
            component: CartPage
        }
]
})