const client = require('./client')

module.exports = {
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
            '/profile': { page: '/profile' },
            '/github': { page: '/github' },
            '/contact': { page: '/contact' },
            '/resume': { page: '/resume' },
            ...acc,
            [`/blog/${slug}`]: { page: '/post', query: { slug } }
          }),
          {}
        )
      )
      .catch(console.error)
    return path
  }
}

// const withSass = require('@zeit/next-sass')
// module.exports = withSass()
