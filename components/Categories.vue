<template>
  <div>
    <ul class="menu">
        <li v-for="category in categories" :key="category.id">
          <nuxt-link class="menu--link" :to="{ name: 'category-slug', params: { slug: category.slug }}">
            {{ category.name }}
          </nuxt-link>
        </li>
      </ul>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

  export default {
    name: "Categories",
    computed: mapGetters({
      categories: 'categories/get'
    })
  }
</script>

<style lang="scss" scoped>
ul {
  padding: 1em .5em;
}
li {
  list-style-type: none;
  margin: 0 0 12px;  
}
a {
  text-decoration: none;
}
</style>