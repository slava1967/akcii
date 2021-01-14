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
body {
  height: 100vh;
  background-color: #ffffff;
}
.page {
  display: block;
}
aside {
  height: 100%;
  padding: .5em;
  margin-top: 5em;
  margin-bottom: 1em;
  border-left: solid 2px #d6d6d6;
  background: whitesmoke;
  height: 100vh;
}
html {
  font-family: "Open Sans", sans-serif;
  font-size: 18px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

h1,
h2,
h3 {
  font-family: "Alata", serif;
  font-weight: normal;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.individual h3 {
  margin: 2em 0 25px;
}

h1 {
  margin-bottom: 30px;
  text-align: center;
}

img {
  width: 100%;
}

video {
  width: 100%;
  margin: 25px 0;
}

small {
  color: #9d5615;
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
@media only screen and (min-width: 768px) {
  .page {
  display: grid;
  grid-template-columns: 75% 25%;
  }
  aside {
    margin-top: 0;
  }
}
</style>
