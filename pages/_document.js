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
            <title>{this.props.title}</title>
            {/* <link rel="stylesheet" href="/_next/static/style.css" /> */}

            <link href="../static/css/css_1.css" rel="stylesheet" type="text/css" />
              <link href="../static/css/css.css" rel="stylesheet" type="text/css" />

              <link rel="stylesheet" href="../static/css/portfolio.css" />

                  <script src="../static/js/jquery.min.js"></script>
                  <script src="../static/js/anime.min.js"></script>


                  <script type="text/javascript" src="../static/js/app.js"></script>

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
