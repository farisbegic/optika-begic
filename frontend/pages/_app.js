import '../styles/globals.css'
import {GlobalStyle} from "../components/globalStyles";
import Script from 'next/script';

function MyApp({ Component, pageProps }) {
  return (
      <>
        <Script strategy="lazyOnload" src="https://www.googletagmanager.com/gtag/js?id=G-2LTVTFDJM9" />
        <Script strategy="lazyOnload">
            {
                `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-2LTVTFDJM9');
                `
            }
        </Script>
        <GlobalStyle />
        <Component {...pageProps} />
      </>
  )
}

export default MyApp
