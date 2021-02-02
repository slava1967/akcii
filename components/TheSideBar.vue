<template>
  <div class="bar">
    <div class="menu">
      <h3>Категории</h3>
      <Categories />
    </div>
  </div>
</template>

<script>
  import Categories from '~/components/Categories'

export default {
  name: "Sidebar",
  components: {
    Categories
  }
}
</script>

<style lang="scss" scoped>

h3 {
  padding: 1em .5em;
  background-color: lightgray;
}
</style>