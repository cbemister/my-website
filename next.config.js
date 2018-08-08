const withPlugins = require('next-compose-plugins');
const { PHASE_DEVELOPMENT_SERVER, PHASE_PRODUCTION_BUILD } = require('next/constants');
const client = require('./client')
const withOffline = require('next-offline');
 
module.exports = withPlugins([
  [withOffline, {
    exportPathMap: async function (defaultPathMap) {
      const path = await client
        .fetch('*[_type == "post"].slug.current')
        .then(data =>
          data.reduce(
            (acc, slug) => ({
              '/': { page: '/' },
              '/apps': { page: '/apps' },
              '/stack': { page: '/stack' },
              '/blog': { page: '/blog' },
              '/metrics ': { page: '/metrics' },
              '/github': { page: '/github' },
              '/contact': { page: '/contact' },
              '/resume': { page: '/resume' },
              '/roadmap': { page: '/roadmap' },
              ...acc,
              [`/blog/${slug}`]: { page: '/post', query: { slug } }
            }),
            {}
          )
        )
        .catch(console.error)
      return path
    }
  }, ['!', PHASE_DEVELOPMENT_SERVER]],
]);


// const withSass = require('@zeit/next-sass')
// module.exports = withSass()

