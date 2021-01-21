<template>
<div class="header-container">
  <header class="the-header">
    <div class="logo">
      <nuxt-link exact to="/">
      <img src="/logo-70.png" alt="Лого">
      </nuxt-link>
    </div>
    <div class="spacer"></div>
    <TheSideNavToggle @toggle="$emit('sidenavToggle')" />
    <div class="navigation-items">
      <ul class="nav-list">
        <li class="nav-item"><nuxt-link exact to="/">Главная</nuxt-link></li>
        <li class="dropdown"><nuxt-link to="#" class="dropbtn">Категории</nuxt-link>
          <div class="dropdown-content">
            <Categories />
          </div>
        </li>
        <li class="nav-item"><nuxt-link to="/contact">Контакты</nuxt-link></li>
        <li class="nav-item"><nuxt-link to="/about">About</nuxt-link></li>
      </ul>
    </div>
  </header>
</div>
</template>

<script>
import { mapGetters } from 'vuex'
import TheSideNavToggle from "~/components/Navigation/TheSideNavToggle"
import Categories from '~/components/Categories'

export default {
  name: "TheHeader",
  components: {
    TheSideNavToggle,
    Categories
  },
  computed: mapGetters({
    categories: 'categories/get'
  })
};
</script>


<style scoped>
.header-container {
  height: 60px;
}

.the-header {
  width: 100%;
  position: fixed;
  height: 60px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: black;
  z-index: 100;
  box-sizing: border-box;
  padding: 0 20px;
}

.logo {
  margin: 0 10px;
  font-size: 1.3rem;
}

.logo a {
  text-decoration: none;
  color: white;
}

.spacer {
  flex: 1;
}

.navigation-items {
  display: none;
}

@media (min-width: 768px) {
  .navigation-items {
    display: block;
  }
}

.nav-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
}

.nav-item {
  margin: 0 10px;
}

.nav-item a {
  text-decoration: none;
  color: white;
}

.nav-item a:hover,
.nav-item a:active,
.nav-item a.nuxt-link-active {
  color: red;
}

li {
  float: left;
}

li a, .dropbtn {
  display: inline-block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

li.dropdown {
  display: inline-block;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
}

.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  text-align: left;
}

.dropdown-content a:hover {background-color: #f1f1f1;}
.dropdown:hover .dropdown-content {
  display: block;
}
.dropdown:hover dropdown:focus .dropdown-content {
  display: block;
}

</style>
