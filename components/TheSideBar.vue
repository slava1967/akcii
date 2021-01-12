<template>
  <div class="bar">
    <div class="menu">
      <h3>Категории</h3>
      <ul class="menu">
        <li class="menu__item" v-for="category in categories" :key="category.id">
          <n-link class="menu--link" :to="{ name: 'category-slug', params: { slug: category.slug }}">
            {{ category.name }}
          </n-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'

export default {
  name: "Sidebar",
  computed: mapGetters({
    categories: 'categories/get'
  }),
}
</script>

<style lang="scss" scoped>

.menu {
  list-style-type: none;
  a {
    text-decoration: none;
    color: black;
  }
  li :hover {
    background: rgb(48, 47, 47);
    color: white;
  } 
}

</style>