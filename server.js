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
  })
  .then(() => console.log(`> Running on http://localhost:${PORT}`))
  .catch(err => {
    console.error(`Server failed to start: ${err.stack}`);
    process.exit(1);
  });