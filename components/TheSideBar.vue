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