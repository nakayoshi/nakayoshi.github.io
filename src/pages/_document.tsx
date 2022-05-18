import Document from "next/document"
import { Html, Head, Main, NextScript, DocumentContext } from "next/document"
import React from "react"
import { ServerStyleSheet } from "styled-components"

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: [
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>,
        ],
      }
    } catch {
      throw new Error("document error")
    } finally {
      sheet.seal()
    }
  }
  render() {
    const { styles } = this.props

    return (
      <Html>
        <Head>
          <meta property="og:title" content="なかよし" />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://nakayoshi.dance" />
          <meta
            property="og:image"
            content="https://nakayoshi.dance/nakayoshi.jpg"
          />
          <meta
            property="og:description"
            content="なかよくしよう！なかよしはクリエイターのコミュニティです。踊りません"
          />
          <meta
            name="description"
            content="なかよくしよう！なかよしはクリエイターのコミュニティです。踊りません"
          />
          <meta name="keywords" content="nakayoshi.dance" />
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:title" content="なかよし" />
          <meta
            name="twitter:description"
            content="なかよくしよう！なかよしはクリエイターのコミュニティです。踊りません"
          />
          <meta
            name="twitter:image"
            content="https://nakayoshi.dance/nakayoshi.jpg"
          />
          {styles}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
