import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { StrictMode } from 'react';

function MyApp({ Component, pageProps: {...pageProps} }: AppProps) {
  const AnyComponent = Component as any;
  const getLayout = AnyComponent.getLayout || ((page) => page)
  return getLayout(
      <StrictMode>
        <AnyComponent {...pageProps} />
      </StrictMode>
  )
}

export default MyApp;
