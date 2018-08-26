const routes = module.exports = require('next-routes')()
 
routes
//.add('about')
//.add('blog', '/blog/:slug')
//.add('user', '/user/:id', 'profile')
//.add('/:noname/:lang(en|es)/:wow+', 'complex')
.add({name: '/', page: 'index'})
.add({name: 'apps', page: 'apps'})
.add({name: 'contact', page: 'contact'})
.add({name: 'github', page: 'github'})
.add({name: 'login', page: 'login'})
.add({name: 'sandbox', page: 'sandbox'})
.add({name: 'resume', page: 'resume'})
.add({name: 'roadmap', page: 'roadmap'})
.add({name: 'stack', page: 'stack'})


// '/': { page: '/' },
// '/apps': { page: '/apps' },
// '/contact': { page: '/contact' },
// '/github': { page: '/github' },
// '/login ': { page: '/login' },
// '/metrics ': { page: '/metrics' },
// '/resume': { page: '/resume' },
// '/roadmap': { page: '/roadmap' },
// '/stack': { page: '/stack' }