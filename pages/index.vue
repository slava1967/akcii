<template>
  <main>
    <app-masthead></app-masthead>
    <div class="kupit">
      <div class="picture">
        <img src="~assets/images/sale-2.jpg" width="540" height="552" title="Товары со скидкой" alt="Купить товары со скидкой" class="responsive">
      </div>
      <div class="skidka">
        <h2>Как купить товары по акции</h2>
        <p>Купить необходимые товары по акции или заплатить за первое попавшееся предложение? Каждый из нас периодически сталкивается с необходимостью купить какой-то товар, который не относится к категории товаров первой необходимости. И часто это не самые дешевые товары. В наше непростое и «веселое» время, как впрочем и всегда, возникает желание как-нибудь сэкономить на покупке. Вот тут-то и приходят на помощь всевозможные распродажи и акции. Однако не так-то просто всегда держать руку на пульсе всех событий в мире розничной торговли и быть в курсе всех акций и распродаж. Данный сайт предназначен для того, чтобы посетители делились друг с другом информацией о том, где можно купить необходимые товары по акциям, проходящих или предстоящих распродажах, а так же делились своими впечатлениями об этих акциях и распродажах.</p>
        <h2>Давайте поможем друг другу сэкономить деньги на покупках!</h2>
      </div>
    </div>
    <div class="kupit">
      <div class="picture">
        <img src="~assets/images/Super-Sale.jpg" width="400" height="307" title="Товары по акции" alt="Купить товары по акции - как это работает" class="responsive">
      </div>
      <div class="akcia">
        <h2>Как это работает</h2>
        <p>Выберите в верхнем меню интересующую Вас категорию товара, после чего можете ознакомиться с предлагаемыми акциями и распродажами товаров. При желании Вы можете оставить свой комментарий к любой предлагаемой акции или распродаже. Вы также можете добавить новую информацию о распродаже или акции нажав кнопку «Добавить» в верхнем меню.</p>
        <h2>Купить товары по акции или распродаже - это просто!</h2>
      </div>
    </div>
    <div class="container">
      <div class="new">
        <h2>Новые объявления:</h2>
      </div>
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
  </main>
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
      title: 'Товары по акции, сайт о распродажах',
      titleTemplate: null,
      bodyAttrs: {
        class: 'home blog'
      },
      meta: [
        { hid: 'description', name: 'description', content: 'Купить необходимые товары по акции или заплатить за первое попавшееся предложение? Каждый из нас периодически сталкивается с необходимостью купить какой-то товар, который не относится к категории товаров первой необходимости. И часто это не самые дешевые товары.' }
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
main {
  height: auto;
}
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
  box-shadow: 6px 8px 8px 8px rgba(0, 0, 0, 0.2);
}
.grid-container {
  display: grid;
  grid-gap: 15px ;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  padding-bottom: 2em;
}
.grid-container ul {
  padding-left: 1em;
  padding-right: 1em;
}
h2 {
  text-align: center;
  font-size: 26px;
  padding: 1em;
  margin-bottom: 1em;
}
.new {
  background-color: lightgray;
}
img {
    display: block;
    margin:0 auto;
    box-shadow: 6px 8px 8px 8px rgba(0, 0, 0, 0.2);
    border-radius: 1em;
  }
  .responsive {
  width: 70%;
  height: auto;
}
.skidka {
  padding: .5em;
  background:
  linear-gradient(
      rgba(255, 255, 255, 0.7), 
      rgba(255, 255, 255, 0.7)
    ),
  url('~assets/images/sale-2.jpg');
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
}

.akcia {
  padding: .5em;
  background:
  linear-gradient(
      rgba(255, 255, 255, 0.7), 
      rgba(255, 255, 255, 0.7)
    ),
  url('~assets/images/Super-Sale.jpg');
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
}

.kupit {
  display: flex;
  width: 100%;
  padding: 0;
}
p {
  margin: 0;
  padding: 20px;
  text-align: justify;
  font-size: 16px;
}
@media only screen and (min-width: 768px) {
.skidka {
  background: none;
}
.akcia {
  background: none;
}
.kupit {
  display: grid;
  grid-template-columns: 50% 50%;
  margin-top: .8em;
}
}
@media only screen and (max-width: 767px) {
  .picture {
    display: none;
  }
}
@media only screen and (max-width: 359px) {
  .grid-container {
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
}
}
</style>
