const withPlugins = require('next-compose-plugins');
const { PHASE_DEVELOPMENT_SERVER, PHASE_PRODUCTION_BUILD } = require('next/constants');
const withOffline = require('next-offline');
 
module.exports = withPlugins([
  [withOffline, {
    exportPathMap: async function(defaultPathMap) {
      return {
        '/': { page: '/' },
        '/apps': { page: '/apps' },
        '/contact': { page: '/contact' },
        '/github': { page: '/github' },
        '/login ': { page: '/login' },
        '/sandbox ': { page: '/sandbox' },
        '/resume': { page: '/resume' },
        '/roadmap': { page: '/roadmap' },
        '/stack': { page: '/stack' }
      }
    }
    }, ['!', PHASE_DEVELOPMENT_SERVER]],
]);


// const withSass = require('@zeit/next-sass')
// module.exports = withSass()
