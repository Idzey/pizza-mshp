<script>
    import axios from 'axios'
    export default {
        data() {
            return {
                pizza: {}
            }
        },
        methods: {
            async loadData() {
                let response = await axios.get('/pizza/find', {
                    params: {
                        id: this.$route.params.id
                    }
                });
                this.pizza = response.data;
            },
            async addToCart(item) {
                await axios.post('/user/cart-add', {
                    id: item._id
                });
            }
        },
        mounted() {
            this.loadData();
        }
    }
</script>

<template>
    <div class="container py-4">
        <h1 class="ff-marck mb-5 border-2 border-bottom pb-2">{{ pizza.title }}</h1>
        <div class="d-flex justify-content-center">
            <div class="col-md-8 col-sm-12 d-flex justify-content-center wow fadeInLeft">
                <img :src="'/src/assets/pizza/' + pizza.image" alt="">
            </div>
        </div>
        <div class="mb-4">
            <div class="col-md-3 col-sm-12">
                <p><span class="ff-sen">Основные ингридиенты: </span></p>
                <ul class="list-group mb-3">
                    <li class="list-group-item" v-for="(item, index) in pizza.ingredients">{{ item }}</li>
                </ul>
            </div>
            <p class="mb-1">{{ pizza.description }}</p>
            <span class="card-subtitle text-body-secondary">Цена: {{ pizza.price }}руб</span>
        </div>
        <button class="btn btn-primary" @click="addToCart(pizza)">Добавить в корзину</button>
    </div>
</template>

<style scoped>

</style>