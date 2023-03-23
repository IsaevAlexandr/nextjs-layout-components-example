import '@/styles/globals.css'
import '@gravity-ui/uikit/styles/styles.css';
import type { AppProps } from 'next/app'
import { ThemeProvider } from '@gravity-ui/uikit';
import { LayoutProvider } from '@gravity-ui/uikit/unstable_layout';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme='light'>
      <LayoutProvider>
        <Component {...pageProps} />
      </LayoutProvider>
    </ThemeProvider>
  );
}
