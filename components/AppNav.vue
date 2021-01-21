<template>
  <div>
  <b-navbar toggleable="lg" type="light" variant="light">
    <b-navbar-brand to="/">
      <img src="/logo-70.png" width="137" height="70" title="Распродажа товаров" alt="Лого">
    </b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-item to="/">Главная</b-nav-item>

        <b-nav-item-dropdown text="Категории" right>
          <b-dropdown-item v-for="category in categories" :key="category.id" :to="{ name: 'category-slug', params: { slug: category.slug }}">
            {{ category.name }}
          </b-dropdown-item>
        </b-nav-item-dropdown>
        <b-nav-item href="https://wordpress.gintonic.cf/svyazatsya-s-nami/" target=”_blank”>Связаться с нами</b-nav-item>
        <b-navbar-item to="/contact">Контакт</b-navbar-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: "AppNav",
  computed: mapGetters({
    categories: 'categories/get'
  })
}
</script>

<style lang="scss" scoped>
</style>