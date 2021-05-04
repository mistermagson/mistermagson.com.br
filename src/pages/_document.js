import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="pt">
        <Head>
          <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/hack-font@3/build/web/hack.css" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}