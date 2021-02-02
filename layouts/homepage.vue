<template>
  <div>
    <TheHeader @sidenavToggle="displaySidenav = !displaySidenav" />
    <TheSidenav
    :show="displaySidenav"
    @close="displaySidenav = false" />
    <nuxt />
    <TheFooter />
  </div>
</template>

<script>
import TheHeader from '~/components/Navigation/TheHeader'
import TheSidenav from "~/components/Navigation/TheSidenav"
import TheFooter from '~/components/TheFooter'

export default {
  components: {
    TheHeader,
    TheSidenav,
    TheFooter
  },
  data() {
    return {
      displaySidenav: false
    }
  }
}
</script>

<style>
.home {
  display: block;
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
</style>
