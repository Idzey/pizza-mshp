<script>
    import axios from 'axios'
    export default {
        data() {
            return {
                cart: [],
                allPrice: 0,
                isPay: false
            }
        },
        methods: {
            async loadData() {
                let response = await axios.post('/user/cart');
                this.cart = response.data;
            },
            async removePizza(index) {
                await axios.post('/user/cart-remove', {
                    index: index
                });
                this.loadData();
                this.allPrice -= this.cart.cart[index].price;
            },
            async removeAll() {
                await axios.post('/user/cart-remove-all');
                this.loadData();
                this.allPrice = 0;
            },
            async countPrice() {
                let response = await axios.post('/user/cart');
                let items = response.data;
                for (let i = 0; i < items.cart.length; i++) {
                    let item = items.cart[i];
                    this.allPrice += item.price;
                }
            },
            pay() {
               if (this.allPrice > 0) {
                this.isPay = !this.isPay;
               }
            }
        },
        mounted() {
            this.loadData();
            this.countPrice();
        }
    }
</script>

<template>
    <div class="container py-4">
        <h2 class="ff-sen mb-5 border-2 border-bottom pb-2">Корзина</h2>
        <div class="d-flex justify-content-end"><button class="btn btn-danger mb-3" @click="removeAll">Очистить все</button></div>
        <div class="pizzas py-2 row row-cols-md-2">
            <div class="col-md-6 col-sm-12 wow fadeInLeft" v-for="(item, index) in cart.cart">
                <div class="card mb-3 border-2">
                <div class="row g-0">
                    <div class="col-md-6 d-flex justify-content-center">
                        <img :src="'/src/assets/pizza/' + item.image" alt="Nope">
                    </div>
                    <div class="col-md-6 d-flex">
                        <div class="card-body card-text d-flex flex-column justify-content-center h-100">
                            <h5 class="card-title f-sen">{{ item.title }}</h5>
                            <span class="card-subtitle text-body-secondary">Цена: {{item.price}}руб</span>
                        </div>
                        <div class="card-body card-remove d-flex flex-column justify-content-center h-100 border-start border-2">
                            <button class="btn btn-danger" @click="removePizza(index)">X</button>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
        <div class="d-flex border-2 border-top pt-2 my-3">
            <span class="fs-3 ff-sen flex-grow-1">Итого:</span>
            <span class="fs-3 ff-sen flex-grow-0">{{allPrice}} руб</span>
        </div>
        <button class="btn btn-primary" @click="pay">Оплатить</button><br>
        <p class="mt-4 bg-success text-light p-2 text-center" v-if="isPay">Наша компания пока не запустила доставку, но деньги с вашей карты мы уже списали :(</p>
    </div>
</template>

<style scoped>
    .card img {
    width: 180px;
    height: 150px;
  }
  .card-text {
    flex: 1;
  }
  .card-remove {
    flex: 0;
  }
</style>