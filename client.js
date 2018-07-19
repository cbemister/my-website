const sanityClient = require('@sanity/client')

module.exports = sanityClient({
  projectId: 'drxwx4uk', // you can find this in sanity.json
  dataset: 'blog', // or the name you chose in step 1
  useCdn: true // `false` if you want to ensure fresh data
})