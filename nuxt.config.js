const baseUrl = 'https://wordpress.gintonic.cf/wp-json/wp/v2/'
require('dotenv').config()

export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    htmlAttrs: {
      lang: 'ru',
    },
    title: 'Товары по акции',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Данный сайт предназначен для того, чтобы посетители делились друг с другом информацией о том, где можно купить товары по акции, о проходящих распродажах.' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    '~/assets/mixins.scss',
    '~assets/main.css'
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    '~/plugins/dateformat.js'
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    '@aceforth/nuxt-optimized-images'
  ],
  optimizedImages: {
    optimizeImages: true,
    imagesName: ({ isDev }) => isDev ? '[path][name][hash:optimized].[ext]' : 'img/[contenthash:7].[ext]',
    responsiveImagesName: ({ isDev }) => isDev ? '[path][name]--[width][hash:optimized].[ext]' : 'img/[contenthash:7]-[width].[ext]',
    handleImages: ['jpeg', 'png', 'svg', 'webp', 'gif'],
    optimizeImages: true,
    optimizeImagesInDev: false,
    defaultImageLoader: 'img-loader',
    mozjpeg: {
      quality: 80,
    },
    optipng: {
      optimizationLevel: 3,
    },
    pngquant: false,
    webp: {
      preset: 'default',
      quality: 75,
    },
  },

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/dotenv',
    '@nuxtjs/sitemap'
  ],
  env: {
    WP_REST_API_BASE_URL: process.env.WP_REST_API_BASE_URL,
    WPUSER: process.env.WPUSER,
    APPLICATION_PASSWORD: process.env.APPLICATION_PASSWORD
  },
  styleResources: {
    scss: [
      '~/assets/scss/_colors.scss'
    ]
   },
  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {
    baseURL: baseUrl,
    https: true
  },
      /**
   * Sitemap
   */
  sitemap: {
    path: '/sitemap.xml',
    cacheTime: 1000 * 60 * 120,
    hostname: 'https://gintonic.cf',
    gzip: true,
    exclude: [
      '/category',
      '/page',
      '/tag'
    ],
    async routes () {
      let sitemapItems = []

      // All Categories
      const categories = await axios.get(
        `${baseUrl}categories`
      );
      let categoriesItems = categories.data.map(category => ({
        url: '/category/' + category.slug,
        changefreq: 'monthly',
        priority: 0.7,
      }) )
      // sitemapItems = [...sitemapItems, categoriesItems]
      sitemapItems.push(...categoriesItems);

      // Get Total Pages
      const getTotalPages = await axios.get(
        `${baseUrl}posts`
      )
      const totalPagesCount = getTotalPages.headers['x-wp-totalpages']

      // All Posts
      for (let page = 1; page <= totalPagesCount; page++) {
        const postsOnPage = await axios.get(
          `${baseUrl}posts?page=${page}`
        );

        let postsItems = postsOnPage.data.map(post => ({
          url: `/${post.slug}`,
          changefreq: 'daily',
          priority: 1,
          lastmod: new Date(post.date)
        }) )
        // sitemapItems = [...sitemapItems, postsItems]
        sitemapItems.push(...postsItems);
      }

      return sitemapItems
    }
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    extractCSS: true
  }
}