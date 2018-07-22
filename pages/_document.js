import Document, { Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
    render() {
        return (
            <html lang="en">
                <Head tite="{title}">
                    <meta charset="UTF-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
                    <title>{ this.props.title }</title>
                    <link rel="stylesheet" href="/_next/static/style.scss" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>

            </html>
        );
    }
}
