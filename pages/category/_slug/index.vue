<template>
  <main>
    <div class="info">
      <h1>{{ this.categoryTitle }}</h1>
      <p>{{ this.categoryDescription }}</p>
    </div>
    <div class="container">
      <Pagination
        :routeRootName="'category-slug'"
        :routeName="'category-slug-page-id'"
        :routeSlug="this.pageSlug"
        :pageNumber="1"
        :totalPages="this.totalPages" />

      <ul v-if="posts.length" class="grid-container">
        <li v-for="post in posts" :key="post.id">

          <Post :post="post" />

        </li>
      </ul>
      <div v-else>В этой категории пока ещё нет объявлений.</div>

    </div>
  </main>
</template>

<script>
import Pagination from '~/components/AppPagination'
import Post from '~/components/Post'

export default {
  async asyncData( { store, params, route, error } ) {
    const catId = store.getters['categories/getId']((route.params.slug))

    // if the category ID does not exist, I tag the page with 404
    if ( catId ) {
      await store.dispatch('posts/category/getCategoryPosts', {
        slug: route.params.slug,
        categoryId: catId,
        pageId: 1
      })
    } else {
      error({ statusCode: 404, message: 'Category not found' })
    }
  },
  head() {
    return {
      title: `Акции в категории ${this.categoryTitle}`,
      titleTemplate: null,
      bodyAttrs: {
        class: `archive category category-${this.caregoryId} category-${this.pageSlug}`
      },
      meta: [
        { hid: 'description', name: 'description', content: `${this.categoryDescription}` }
      ]
    }
  },
  name: "categorySlug",
  components: {
    Pagination,
    Post
  },
  data() {
    return {
      pageSlug: this.$route.params.slug
    }
  },
  computed: {
    posts() {
      return this.$store.getters['posts/category/get']({
        id: 1,
        name: this.pageSlug
      })
    },
    caregoryId() {
      return this.$store.getters['categories/getId']((this.pageSlug))
    },
    totalPages() {
      return Number( this.$store.getters['posts/category/totalPages'](this.pageSlug) )
    },
    categoryTitle() {
      return this.$store.getters['categories/getTitle']((this.pageSlug))
    },
    categoryDescription() {
      return this.$store.getters['categories/getDescription']((this.pageSlug))
    }
  }
}
</script>

<style scoped>
main {
  height: 100%;
}
.info {
  padding: 0 2em;
}
.info p {
  text-align: center;
}
.grid-container {
  display: grid;
  grid-gap: 10px ;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  margin-bottom: 5px;
}
.container {
  margin-bottom: .8em;
  margin: 0 auto;
}
.container ul li {
  list-style-type: none;
  background: white;
  border-radius: 1em;
  padding: .2em .7em;
  margin: .5em auto;
  box-shadow: 6px 8px 8px 8px rgba(0, 0, 0, 0.2);
}
</style>
