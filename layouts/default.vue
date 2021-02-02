<template>
<div>
  <TheHeader @sidenavToggle="displaySidenav = !displaySidenav" />
  <TheSidenav
    :show="displaySidenav"
    @close="displaySidenav = false" />
  <div class="page">
    <main>
      <nuxt />
    </main>
    <aside>
      <TheSideBar />
    </aside>
  </div>
  <TheFooter />
</div>
</template>

<script>
import TheHeader from '~/components/Navigation/TheHeader'
import TheSidenav from "~/components/Navigation/TheSidenav"
import TheFooter from '~/components/TheFooter'
import TheSideBar from '~/components/TheSideBar'

export default {
  components: {
    TheHeader,
    TheSidenav,
    TheFooter,
    TheSideBar
  },
  data() {
    return {
      displaySidenav: false
    }
  }
}
</script>

<style>
.page {
  display: block;
}
aside {
  height: 100%;
  padding: .5em;
  margin-top: 5em;
  margin-bottom: 1em;
  height: 100vh;
}



img {
  width: 100%;
}

video {
  width: 100%;
  margin: 25px 0;
}

pre,
code {
  white-space: pre-wrap; /* css-3 */
  white-space: -moz-pre-wrap; /* Mozilla, since 1999 */
  white-space: -pre-wrap; /* Opera 4-6 */
  white-space: -o-pre-wrap; /* Opera 7 */
  word-wrap: break-word; /* Internet Explorer 5.5+ */
  background: #eee;
  border-radius: 4px;
}

pre {
  padding: 8px 10px;
}

code {
  padding: 2px 0;
  line-height: 1.5;
}

p {
  margin: 15px 0 20px;
}
ul {
  padding-left: .5em;
  padding-right: .5em;
}
.grid-container {
  display: grid;
  grid-template-columns: 75% 25%;
}
#right {
  position: fixed;
}

a {
  color: #3b3b3b;
}
a :hover {
   text-decoration: none;
}
@media only screen and (min-width: 768px) {
  .page {
  display: grid;
  grid-template-columns: 75% 25%;
  padding-top: 3em;
  }
  aside {
    margin-top: 0;
  }
}
</style>
