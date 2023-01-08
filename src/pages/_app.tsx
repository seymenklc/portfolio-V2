import type { AppProps } from 'next/app';
// chakra
import theme from '@/theme';
import { ChakraProvider } from '@chakra-ui/react';
// styling
import '@/styles/globals.css';
// components
import Layout from '@/components/Layout';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}
