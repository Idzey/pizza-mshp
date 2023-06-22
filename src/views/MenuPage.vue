<script>
    import axios from 'axios'
  export default {
    data() {
      return {
        pizzas: []
      }
    },
    methods: {
      async loadData() {
        let response = await axios.get('/pizza/all');
        this.pizzas = response.data;
      },
      goPizza(item) {
        this.$router.push({
          name: 'pizza',
          params: {
            id: item._id
          }
        });
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
    <main>
        <div class="container py-4">
            <h2 class="ff-sen mb-5 border-2 border-bottom pb-2">Меню</h2>
            <div class="menu row row-cols-lg-5 row-cols-md-3 row-cols-sm-2 g-2 gap-3 justify-content-center">
                <div class="card border-2 d-flex wow fadeInLeft" style="width: 14rem;" v-for="item in pizzas">
                    <a @click="goPizza(item)">
                        <img :src="'/src/assets/pizza/' + item.image" class="card-img-top" alt="Nope">
                        <div class="card-body">
                        <div>
                            <h5 class="card-title fs-4 ff-marck border-2 border-bottom pb-2">{{item.title}}</h5>
                            <p class="card-text mb-2">{{ item.description }}</p>
                            <span class="card-subtitle text-body-secondary">Цена: {{item.price}}руб</span>
                        </div>
                        </div>
                    </a>
                    <div class="card-body pt-0">
                        <button class="btn btn-primary" @click="addToCart(item)">Добавить</button>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>
<style scoped>
  @media (max-width: 990px) {
    .card {
        width: 11rem!important;
    }
  }
  .card img {
    width: 210px;
    height: 170px;
  }
  .card-text {
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
  }
  a {
    cursor: pointer;
  }
</style>