import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Layout } from '../Components'
import {ThemeProvider} from 'next-themes'

import { ChakraProvider } from '@chakra-ui/react'
import theme from '../config/theme'

function MyApp({ Component, pageProps }: AppProps) {
  return(
    <ChakraProvider theme={theme}>
        <ThemeProvider attribute='class'>
          <Layout>
              <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
    </ChakraProvider>
  )
}

export default MyApp
