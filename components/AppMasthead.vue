<template>
  <section class="masthead">
    <h1>{{ tagline }}</h1>
    <h2>Поможем друг другу сэкономить деньги и купить товары по акции!</h2>
  </section>
</template>

<script>
export default {
  data() {
    return {
      tagline: "Товары по акции"
    };
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/mixins.scss";
section.masthead {
  width: 100%;
  height: 90vh;
  overflow: hidden;
  text-align: center;
  display: block;
  justify-content: center;
  align-items: center;
  padding: 35vw 7vw 7vw 7vw;
  background: 
  linear-gradient(
      rgba(0, 0, 0, 0.5), 
      rgba(0, 0, 0, 0.5)
    ),
  url("/hero-1.jpg") no-repeat center center scroll; /* FF3.6-15 */
  background-size: cover;
  h1 {
    color: white;
    @include fluid-type(font-size, 320px, 1366px, 60px, 65px);
  }
  h2 {
    color: white;
  }
}
</style>