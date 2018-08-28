const withPlugins = require('next-compose-plugins');
const { PHASE_DEVELOPMENT_SERVER, PHASE_PRODUCTION_BUILD } = require('next/constants');
const withOffline = require('next-offline');
const fetch = require('isomorphic-unfetch')
 
module.exports = withPlugins([
  [withOffline, {
    exportPathMap: async function(defaultPathMap) {
  
      // we fetch our list of posts, this allow us to dynamically generate the exported pages
      const response = await fetch('https://jsonplaceholder.typicode.com/posts?_page=1')
      const postList = await response.json()

      // tranform the list of posts into a map of pages with the pathname `/post/:id`
      const pages = postList.reduce(
        (pages, post) =>
          Object.assign({}, pages, {
            [`/post/${post.id}`]: {
              page: '/post',
              query: { id: post.id }
            }
          }),
        {}
      )

      // combine the map of post pages with the home


      return Object.assign({}, pages, {
        '/': { page: '/' },
        '/apps': { page: '/apps' },
        '/contact': { page: '/contact' },
        '/github': { page: '/github' },
        '/login ': { page: '/login' },
        '/sandbox ': { page: '/sandbox' },
        '/resume': { page: '/resume' },
        '/roadmap': { page: '/roadmap' },
        '/stack': { page: '/stack' }
      })
    }
    }, ['!', PHASE_DEVELOPMENT_SERVER]],
]);


// const withSass = require('@zeit/next-sass')
// module.exports = withSass()
