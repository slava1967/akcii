<template>
  <div>
    <app-masthead></app-masthead>
    <div class="kupit">
      <main>
        <img src="/sale-2.jpg" alt="">
        <div class="content">
          <h2>Как купить товары по акции</h2>
          <p>Купить необходимые товары по акции или заплатить за первое попавшееся предложение? Каждый из нас периодически сталкивается с необходимостью купить какой-то товар, который не относится к категории товаров первой необходимости. И часто это не самые дешевые товары. В наше непростое и «веселое» время, как впрочем и всегда, возникает желание как-нибудь сэкономить на покупке. Вот тут-то и приходят на помощь всевозможные распродажи и акции. Однако не так-то просто всегда держать руку на пульсе всех событий в мире розничной торговли и быть в курсе всех акций и распродаж. Данный сайт предназначен для того, чтобы посетители делились друг с другом информацией о том, где можно купить необходимые товары по акциям, проходящих или предстоящих распродажах, а так же делились своими впечатлениями об этих акциях и распродажах.</p>
          <h2>Давайте поможем друг другу сэкономить деньги на покупках!</h2>
        </div>
      </main>
    </div>
    <div class="kupit">
      <main>
        <img src="/Super-Sale.jpg" alt="Купить товары по акции - как это работает">
        <div class="content">
          <h2>Как это работает</h2>
          <p>Выберите в верхнем меню интересующую Вас категорию товара, после чего можете ознакомиться с предлагаемыми акциями и распродажами товаров. При желании Вы можете оставить свой комментарий к любой предлагаемой акции или распродаже. Вы также можете добавить новую информацию о распродаже или акции нажав кнопку «Добавить» в верхнем меню.</p>
          <h2>Купить товары по акции или распродаже - это просто!</h2>
        </div>
      </main>
    </div>
    <div class="container">
        <h2>Новые объявления:</h2>
        <ul v-if="latestPosts.length" class="grid-container">
          <li v-for="post in latestPosts" :key="post.id">

            <Post :post="post" />

          </li>
        </ul>
        <div v-else>no posts</div>

        <Pagination
          :routeRootName="'index'"
          :routeName="'page-id'"
          :routeSlug="$route.params.slug"
          :pageNumber="1"
          :totalPages="totalPages" />

    </div>  
  </div>
</template>

<script>
import AppMasthead from "@/components/AppMasthead";
import Pagination from '~/components/AppPagination'
import Post from '~/components/Post'

export default {
  async asyncData( { store, params } ) {
    await store.dispatch('posts/latest/getPosts', {
      page: 1
    })
  },
  head() {
    return {
      title: '',
      titleTemplate: null,
      bodyAttrs: {
        class: 'home blog'
      },
      meta: [
        { hid: 'description', name: 'description', content: '' }
      ]
    }
  },
  layout: 'homepage',
  name: 'PagesIndex',
  components: {
    AppMasthead,
    Pagination,
    Post
  },
  computed: {
    posts() {
      return this.$store.getters['posts/latest/get'](1)
    },
    openerPost() {
      return this.posts.slice(0, 1)[0]
    },
    topPosts() {
      return this.posts.slice(1, 3)
    },
    latestPosts() {
      return this.posts.slice(3)
    },
    totalPages() {
      return Number(this.$store.getters['posts/latest/totalPages'])
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  padding: 0;
  margin-top: .8em;
}
.container ul {
  padding-inline-start: 0px!important;
}
.container ul li {
  list-style-type: none;
  background: white;
  border-radius: 1em;
  padding: 0 1em;
  margin: 0;
  box-shadow: 15px 21px 40px 15px rgba(0,0,0,0.1);
}
.grid-container {
  display: grid;
  grid-gap: 10px ;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
}
h2 {
  text-align: center;
  font-size: 20px;
}
main {
  img {
    display: block;
    width: 50%;
    margin:0 auto;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    border-radius: 1em;
  }
  .content {
      padding: .5em;
    }
}
.kupit {
  display: flex;
  width: 100%;
  padding: 0;
}
.kak-kupit {
  display: flex;
  object-fit: contain;
  margin: 2em 0 0 0;
}
p {
  padding: 20px;
  text-align: justify;
  font-size: 14px;
}
@media only screen and (min-width: 768px) {
  main {
    display: grid;
    grid-template-columns: 50% 50%;
    margin-top: .8em;

    
  }
  main img {
    display: block;
    width: 80%;
    margin:0 auto;
    box-shadow: none;
    border-radius: 0;
  }
}
</style>
