<template>
  <div id="footer-bottom" class="clr no-footer-nav">
    <div id="footer-bottom-inner" class="container clr">
      <div id="copyright" class="clr" role="contentinfo">
      Copyright © 2020 - Товары по акции.
      </div><!-- #copyright -->
    </div><!-- #footer-bottom-inner -->
  </div>
</template>

<script>

export default {
  name: 'Footer'
  }
</script>

<style lang="scss" scoped>
#footer-bottom {
    background-color: #1b1b1b;
    padding: 15px 0;
    font-size: 11px;
    line-height: 1;
}
.container {
    width: 1200px;
    max-width: 90%;
    margin: 0 auto;
}
#footer-bottom.no-footer-nav #copyright {
    color: #7a7a7a;
    float: none;
    width: 100%;
    text-align: center;
    padding-left: 0 !important;
    padding-right: 0 !important;
}
</style>