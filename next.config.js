const withPlugins = require('next-compose-plugins');
const { PHASE_DEVELOPMENT_SERVER, PHASE_PRODUCTION_BUILD } = require('next/constants');
const withOffline = require('next-offline');
 
module.exports = withPlugins([
  [withOffline, {
    exportPathMap: function(defaultPathMap) {
      return {
        '/': { page: '/' },
        '/apps': { page: '/apps' },
        '/blog': { page: '/blog' },
        '/contact': { page: '/contact' },
        '/github': { page: '/github' },
        '/login ': { page: '/login' },
        '/metrics ': { page: '/metrics' },
        '/resume': { page: '/resume' },
        '/roadmap': { page: '/roadmap' },
        '/specs': { page: '/specs' },
        '/stack': { page: '/stack' }
      }
    }
    }, ['!', PHASE_DEVELOPMENT_SERVER]],
]);


// const withSass = require('@zeit/next-sass')
// module.exports = withSass()


// next.config.js
module.exports = {
  exportPathMap: function(defaultPathMap) {
    return {
      '/': { page: '/' },
      '/about': { page: '/about' },
      '/readme.md': { page: '/readme' },
      '/p/hello-nextjs': { page: '/post', query: { title: 'hello-nextjs' } },
      '/p/learn-nextjs': { page: '/post', query: { title: 'learn-nextjs' } },
      '/p/deploy-nextjs': { page: '/post', query: { title: 'deploy-nextjs' } }
    }
  }
}