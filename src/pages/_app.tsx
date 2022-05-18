import "styles/font.css"
import type { AppProps } from "next/app"
import { createGlobalStyle } from "styled-components"
import { QueryClient, QueryClientProvider } from "react-query"
import { ReactQueryDevtools } from "react-query/devtools"
import Head from "next/head"
const queryClient = new QueryClient()

const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
 }

  body,
  html {
    height: 100%;
    font-family: "Noto Sans JP";
  }

  body > div:first-child,
  div#__next,
  div#__next > div {
    height: 100%;
  }

 ol,
 ul {
	list-style: none;
}

a {
  text-decoration: none;
}
`

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <Head>
        <title>なかよし</title>
      </Head>
      <GlobalStyle />
      <Component {...pageProps} />

      <ReactQueryDevtools />
    </QueryClientProvider>
  )
}

export default MyApp
