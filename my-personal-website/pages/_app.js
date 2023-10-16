import '@pagesAlias (ex: @components) [?] @pages/styles/globals.css'

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}
