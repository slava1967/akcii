<template>
  <div>
    <ul class="menu">
        <li class="menu__item" v-for="category in categories" :key="category.id">
          <n-link class="menu--link" :to="{ name: 'category-slug', params: { slug: category.slug }}">
            {{ category.name }}
          </n-link>
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

</style>