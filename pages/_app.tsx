import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Layout } from '../Components'
import {ThemeProvider} from 'next-themes'

import { ChakraProvider } from '@chakra-ui/react'
import theme from '../config/theme'
import aos from 'aos'
import 'aos/dist/aos.css'
import {useEffect} from 'react'

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    aos.init({
      duration:400
    })
  },[])
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
