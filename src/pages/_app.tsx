import { useEffect } from 'react';
// next
import { useRouter } from 'next/router';
import type { AppProps } from 'next/app';
// progress bar
import NProgress from 'nprogress';
// chakra
import theme from '@/theme';
import { ChakraProvider } from '@chakra-ui/react';
// styling
import '@/styles/globals.css';
import 'nprogress/nprogress.css';
// components
import Layout from '@/components/Layout';

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });

    const handleStart = () => NProgress.start();
    const handleStop = () => NProgress.done();

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleStop);
    router.events.on('routeChangeError', handleStop);

    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleStop);
      router.events.off('routeChangeError', handleStop);
    };
  }, [router]);

  return (
    <ChakraProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}
