// Event handlers like onClick can't be added to this file
import Document, { Head, Main, NextScript } from 'next/document';

// We wrap our scripts below in Fragment to avoid unnecessary mark up
import { Fragment } from 'react';
export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    // Check if in production
    const isProduction = process.env.NODE_ENV === 'production';
    const initialProps = await Document.getInitialProps(ctx);
    // Pass isProduction flag back through props
    return { ...initialProps, isProduction };
  }

  // Function will be called below to inject
  // script contents onto page
  setGoogleTags() {
    return {
      __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'UA-17688655-4');
      `
    };
  }

  render() {
    const { isProduction } = this.props;
    return (

      <html lang="en">
        <Head>

            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
            <meta name="apple-mobile-web-app-capable" content="yes" />
            <meta name="apple-mobile-web-app-status-bar-style" content="#00aeef" />
            <link rel="apple-touch-icon" href="/static/images/Icon-57x57.png" sizes="57x57" />
            <link rel="apple-touch-icon" href="/static/images/Icon-60x60.png" sizes="60x60" />
            <link rel="apple-touch-icon" href="/static/images/Icon-72x72.png" sizes="72x72" />
            <link rel="apple-touch-icon" href="/static/images/Icon-76x76.png" sizes="76x76" />
            <link rel="apple-touch-icon" href="/static/images/Icon-114x114.png" sizes="114x114" />
            <link rel="apple-touch-icon" href="/static/images/Icon-120x120.png" sizes="120x120" />
            <link rel="apple-touch-icon" href="/static/images/Icon-144x144.png" sizes="144x144" />
            <link rel="apple-touch-icon" href="/static/images/Icon-152x152.png" sizes="152x152" />
            <link rel="apple-touch-icon" href="/static/images/Icon-180x180.png" sizes="180x180" />
            <meta name="msapplication-TileImage" content="/static/images/Icon-144.png" />
            <meta name="msapplication-TileColor" content="#8b8b8b" />
            <meta name="theme-color" content="#00aeef" />
            <title>{this.props.title}</title>
            {/* <link rel="stylesheet" href="/_next/static/style.css" /> */}

            <link href="/static/css/bundled.min.css" rel="stylesheet" type="text/css" />
            <link href="/static/css/menu.css" rel="stylesheet" type="text/css" />
            <link rel="manifest" href="/static/manifest.json" />

            <link rel="icon" href="/static/images/favicon.png" type="image/png" sizes="32x32" />
            <link rel="icon" href="/static/images/Icon.svg" sizes="any" type="image/svg+xml" />

<<<<<<< HEAD
                  {/* <script src="/static/js/jquery.min.js"></script>
                  <script src="/static/js/anime.min.js"></script>
                  <script type="text/javascript" src="/static/js/app.js"></script> */}
                  <script defer type="text/javascript" src="/static/js/menu.js"></script>
=======
                  <script src="/static/js/jquery.min.js"></script>
                  <script src="/static/js/anime.min.js"></script>
                  <script type="text/javascript" src="/static/js/app.js"></script>
>>>>>>> master

        </Head>
                  <body className="portfolio">
                    <Main />
                    <NextScript />
                    {/* We only want to add the scripts if in production */}
                    {isProduction && (
                      <Fragment>
                        <script
                          async
                          src="https://www.googletagmanager.com/gtag/js?id=UA-17688655-4                "
                        />
                        {/* We call the function above to inject the contents of the script tag */}
                        <script dangerouslySetInnerHTML={this.setGoogleTags()} />
                      </Fragment>
                    )}
                  </body>

    </html>

                );
              }
            }
