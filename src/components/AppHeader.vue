<script>
  export default {
    methods: {
      goHome() {
        this.$router.push({
          name: 'home'
        });
      },
      goMenu() {
        this.$router.push({
          name: 'menu'
        });
      },
      goCart() {
        this.$router.push({
          name: 'cart'
        });
      }
    }
  }
</script>
<template>
  <div class="container">
    <header class="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between align-items-center py-2 border-bottom">
      <div class="col-md-3 mb-2 mb-md-0 d-flex align-items-center">
        <button class="d-inline-flex link-body-emphasis text-decoration-none btn brand" @click="goHome">
          <img src="/src/assets/icon.png" alt="">
        </button>
      </div>

      <ul class="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0 gap-2">
        <li><a @click="goHome" class="p-2" :class="{'link-active': this.$route.name == 'home'}">Главная</a></li>
        <li><a @click="goMenu" class="p-2" :class="{'link-active': this.$route.name == 'menu' || this.$route.name == 'pizza'}">Меню</a></li>
      </ul>

      <div class="col-md-3 text-end">
        <button class="btn cart" @click="goCart" :class="{'border border-3 border-primary': this.$route.name == 'cart'}"><img src="/src/assets/cart.png" alt=""></button>
      </div>
    </header>
  </div>
</template>

<style scoped>
    @media (max-width: 990px) {
    header {
      height: auto!important;
      gap: 20px;
    }
  }
  header {
    height: 10vh;
  }
  .brand img {
    width: 28px;
  }
  .cart img {
    width: 28px;
  }
  .link-active{
    border-bottom: 3px solid #0d6efd;
  }
  a {
    cursor: pointer;
  }
</style>