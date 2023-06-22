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
        let response = await axios.get('/pizza/new');
        this.pizzas = response.data;
      },
      goMenu() {
        this.$router.push({
          name: 'menu'
        });
      },
      goPizza(item) {
        this.$router.push({
          name: 'pizza',
          params: {
            id: item._id
          }
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
    <div class="block_1 ">
      <div class="image"></div>
      <div class="text ff-sen text-center bg-dark text-light">
        <span class="title-brand text-uppercase ff-marck">Пицца—МШП</span><br>
        <span class="fs-5 ff-sen">Лучшая пицца только у нас!</span>
      </div>
    </div>
    <div class="block_2 container py-4 d-flex flex-column">
      <h2 class="ff-sen border-2 border-bottom pb-2">Новинки</h2>
      <div class="cards mt-4 d-flex justify-content-center align-self-stretch gap-4 flex-wrap">
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
                        <button class="btn btn-primary">Добавить</button>
                    </div>
                </div>
      </div>
      <div class="d-flex justify-content-center mt-4">
        <button class="btn btn-primary" @click="goMenu">Смотреть остальное меню...</button>
      </div>
    </div>
    <div class="block_3 py-5 bg-dark">
      <div class="container text-light">
        <h2 class="ff-sen mb-5 border-2 border-bottom pb-2">О нас</h2>
        <div class="row d-flex justify-content-center align-items-center mb-3">
          <div class="col-lg-6 col-12 px-4 d-flex flex-column justify-content-center wow fadeInLeft">
            <h3 class="ff-sen fs-4">Готовим с любовью</h3>
            <p class="mb-0">Мы любим наше дело и относимся к нему очень серьезно и при этом со всей душой. Наша цель – не просто готовить пиццу. Мы хотим познакомить наших гостей и клиентов с настоящей итальянской пиццей. Наша цель - готовить действительно вкусную еду из качественных продуктов. Наша цель – готовить действительно вкусную еду из качественных продуктов и показать людям, что качество не обязано быть дорогим и находится далеко от дома. Мы хотим донести до вас, что в пиццерии по соседству за доступную цену можно поесть ничуть не хуже, чем в самом дорогом ресторане города.</p>
          </div>
          <div class="col-lg-6 col-12 block_3__img d-flex justify-content-center wow fadeInRight">
            <img src="/src/assets/block_3_1.jpg" class="img-fluid" alt="">
          </div>
        </div>
        <div class="row d-flex justify-content-center align-items-center mb-3">
          <div class="col-lg-6 col-12 block_3__img d-flex justify-content-center wow fadeInLeft">
            <img src="/src/assets/block_3_2.jpg" class="img-fluid" alt="">
          </div>
          <div class="col-lg-6 col-12 px-4 d-flex flex-column justify-content-center wow fadeInRight">
            <h3 class="ff-sen fs-4">Мы готовим пиццу в помпейской печи</h3>
            <p class="mb-0">Помпейская печь – сердце нашей пиццерии. Именно в ней наша пицца становится тем самым блюдом, которое меняет представление о пицце любого, кто ее попробует. Если вы не пробовали пиццу из дровяной печи, значит, вы не пробовали пиццу вовсе!</p>
          </div>
        </div>
        <div class="row d-flex justify-content-center align-items-center mb-3">
          <div class="col-lg-6 col-12 px-4 d-flex flex-column justify-content-center wow fadeInLeft">
            <h3 class="ff-sen fs-4">Тесто</h3>
            <p class="mb-0">Тесто – основа любой пиццы и важнейший ее ингредиент. Наша технология приготовления теста уникальна. Перед тем, как стать пиццей, тесто выдерживается не менее 48 часов. Мы не используем специальные инструменты для растяжки теста, а все делаем своими руками. Особый сорт муки – семола, помогает тесту приобрести нужную форму, а также при выпекании дарит пицце неповторимую хрустящую корочку.</p>
          </div>
          <div class="col-lg-6 col-12 block_3__img d-flex justify-content-center wow fadeInRight">
            <img src="/src/assets/block_3_3.webp" class="img-fluid" alt="">
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
    @media (max-width: 990px) {
    .card {
      width: 10rem!important;
    }
    .block_1 {
      flex-flow: column;
    }
    .block_1 .image {
      width: 100%!important;
      height: 60vh!important;
    }
    .block_1 .text {
      width: 100%!important;
      height: 20vh!important;
      align-items: center;
    }
  }
  .block_1 {
    height: 60vh;
    display: flex;
  }
  .block_1 .image {
    width: 75%;
    height: 100%;
    background-image: url('/src/assets/block_1.jpg');
    background-position: center bottom;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;
  }
  .block_1 .text {
    width: 25%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: column;
  }
  .title-brand {
    font-size: 50px;
  }
  .block_2 .card-text {
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
  }
  .block_3__img {
    max-width: 600px;
    max-height: 350px;
  }
  a {
    cursor: pointer;
  }
</style>