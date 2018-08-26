// server-side code, see https://nextjs.org/docs#custom-server-and-routing
 
const path = require("path");
const express = require("express");
const next = require("next");
 
// for example data loading
const { readFile } = require("fs");
const { promisify } = require("util");
 
const PORT = 3000;
 
// initialize the Next.js application
const app = next({
  dev: process.env.NODE_ENV !== "production"
});
 
// initialize and inject Next-Express into Express.js
// 'nextExpress' will just be the same 'express': the name difference is only for clarity of intent
const nextExpress = require("next-express/server")(app).injectInto(express);
 
app.prepare()
  .then(() => {
<<<<<<< HEAD
    // create an Express.js application, augumented with
    // Next-Express: all the normal Express.js functions work as
    // normal
    const server = nextExpress();
 
    // one of the things that Next-Express adds is a method called
    // pageRoute() that you can use to define a route that serves
    // a Next.js page
    server.pageRoute({
      // GET requests to this path will be handled by this route
      path: "/login",
 
      // path to the Next.js page to render
      // here this is redundant, since it's the same as "path"
    //   renderPath: "/",
 
      // an async function that fetches the data to be passed to
      // the page component rendered as props - this will always
      // run on the server
    //   async getProps(req, res) {
    //     return {
    //       content: await readFileAsync(path.join(__dirname, "data.txt"), "utf-8")
    //     };
    //   }
    });
 
    // you can register any other routes as you want; you can also
    // use ALL the standard Express functions such as
    // server.get(), server.post(), server.use(), etc.
 
    // finally, start the server
    // next-express' listen() method returns a Promise if no callback
    // function was passed to it; it also automatically registers
    // the Next.js request handler (app.getRequestHandler())
    return server.listen(PORT);
=======
    const server = express()

    server.use(bodyParser.json())
    server.use(session({
      secret: 'geheimnis',
      saveUninitialized: true,
      store: new FileStore({path: '/tmp/sessions', secret: 'geheimnis'}),
      resave: false,
      rolling: true,
      httpOnly: true,
      cookie: { maxAge: 604800000 } // week
    }))

    server.use((req, res, next) => {
      req.firebaseServer = firebase
      next()
    })

    server.post('/api/login', (req, res) => {
      if (!req.body) return res.sendStatus(400)

      const token = req.body.token
      firebase.auth().verifyIdToken(token)
        .then((decodedToken) => {
          req.session.decodedToken = decodedToken
          return decodedToken
        })
        .then((decodedToken) => res.json({ status: true, decodedToken }))
        .catch((error) => res.json({ error }))
    })

    server.post('/api/logout', (req, res) => {
      req.session.decodedToken = null
      res.json({ status: true })
    })
  
  server.get('/login', (req, res) => {
      return app.render(req, res, '/login', req.query)
    })
  
  server.get('/test', (req, res) => {
      return app.render(req, res, '/apps', req.query)
    })

    server.get('*', (req, res) => {
      return handle(req, res)
    })

    server.listen(port, (err) => {
      if (err) throw err
      console.log(`> Ready on http://localhost:${port}`)
    })
>>>>>>> f2fee8fe910929300d2931820ffcaf0b96299d07
  })
  .then(() => console.log(`> Running on http://localhost:${PORT}`))
  .catch(err => {
    console.error(`Server failed to start: ${err.stack}`);
    process.exit(1);
  });