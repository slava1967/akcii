<template>
  <div>
    <div class="posts">
      <main>
        <article class="post" :aria-labelledby="`post-id-${post.id}`">
          <div>
          <h2 :id="`post-id-${post.id}`">
            <nuxt-link :to="`/${post.slug}`" class="post-title">{{ post.title.rendered }}</nuxt-link>
          </h2>
          </div>
          <div v-html="post.excerpt.rendered"></div>
          <nuxt-link :to="`/${post.slug}`" class="readmore slide">Read more ⟶</nuxt-link>
        </article>
      </main>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Post",
    props: {
      post: Object
    },
    computed: {
      postInCategory() {
      return this.post['_embedded']['wp:term'][0]
    }
    }
  }
</script>

<style lang="scss" scoped>
.post {
  font-size: 14px;
}
.posts {
  margin: 1em auto;
}
.readmore {
display: inline-block;
font-size: 11px;
text-transform: uppercase;
padding: 5px 15px;
letter-spacing: 2px;
position: relative;
color: #000;
font-weight: 700;
font-family: "Open Sans", serif;
border: 1px solid #ccc;
background: #fff;
}
.slide {
position: relative;
background: transparent;
-webkit-transition: 0.3s ease;
transition: 0.3s ease;
z-index: 1;
backface-visibility: hidden;
perspective: 1000px;
transform: translateZ(0);
cursor: pointer;

&:hover {
  color: #fff;
}

&:hover:before {
  right: -1px;
}
}
.slide::before {
  content: "";
  display: block;
  position: absolute;
  background: #000;
  transition: right 0.3s ease;
  z-index: -1;
  top: -2px;
  bottom: -2px;
  left: -2px;
  right: 108%;
  backface-visibility: hidden;
}
h2 {
  margin-bottom: 0.5em;
  font-size: 18px;
}
.post-title {
  color: black;
  text-decoration: none;
  list-style-type: none;
}
</style>
