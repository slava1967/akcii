<template>
<div class="sidenav-container">
  <div
    v-if="show"
    class="sidenav-backdrop"
    @click="$emit('close')"></div>
  <transition name="slide-side">
    <div
      v-if="show"
      class="sidenav">
      <ul
        class="nav-list"
        @click="$emit('close')">
        <li class="nav-item"><nuxt-link exact to="/">Главная</nuxt-link></li>  
        <li class="dropdown"><nuxt-link to="#" class="dropbtn">Категории</nuxt-link>
          <div class="dropdown-content">
            <Categories />
          </div>
        </li>
        <li class="nav-item"><nuxt-link to="/contact">Контакты</nuxt-link></li>
        <li class="nav-item"><nuxt-link to="/dobavit">Добавить</nuxt-link></li>
      </ul>
    </div>
  </transition>
</div>
</template>

<script>
import { mapGetters } from 'vuex'
import Categories from '~/components/Categories'

export default {
  name: "TheSidenav",
  components: {
    Categories
  },
  props: {
    show: {
      type: Boolean,
      default: false
    }
  },
  computed: mapGetters({
    categories: 'categories/get'
  })
};
</script>


<style scoped>
.sidenav-container {
  height: 100%;
  width: 100%;
}

.sidenav-backdrop {
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 1000;
  position: fixed;
  top: 0;
  left: 0;
}

.sidenav {
  width: 300px;
  background-color: white;
  z-index: 10000;
  position: fixed;
  top: 0;
  left: 0;
  box-sizing: border-box;
  padding: 30px;
  margin-top: 30px;
}

.slide-side-enter-active,
.slide-side-leave-active {
  transition: all 0.3s ease-out;
}
.slide-side-enter,
.slide-side-leave-to {
  transform: translateX(-100%);
}

.nav-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.nav-item {
  margin: 20px 0;
}

.nav-item a {
  text-decoration: none;
  color: black;
  font-size: 1rem;
}

.nav-item a:hover,
.nav-item a:active {
  color: red;
}
</style>
