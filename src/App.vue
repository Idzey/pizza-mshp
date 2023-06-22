<script>
  import AppHeader from './components/AppHeader.vue'
  import AppFooter from './components/AppFooter.vue'
  import { RouterView } from 'vue-router'
  export default {
    components: {
      AppHeader,
      AppFooter,
      RouterView
    },
    data() {
      return {
        count_cart: Number
      }
    }
  }
</script>

<template>
  <app-header></app-header>
  <router-view></router-view>
  <app-footer></app-footer>
</template>

<style scoped>

</style>