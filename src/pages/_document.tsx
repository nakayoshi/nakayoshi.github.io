import NextDocument, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from "next/document"
import { ServerStyleSheet } from "styled-components"

type Props = {}

class Document extends NextDocument<Props> {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        })

      const initialProps: any = await NextDocument.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      }
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

export default Document
