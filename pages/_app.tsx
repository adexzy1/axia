import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import store from '../Redux/store';
import React from 'react';

type ComponentWithPageProps = AppProps & {
  Component: AppProps['Component'] & {
    PageLayout?: AppProps['Component'];
  };
};

function MyApp({ Component, pageProps }: ComponentWithPageProps) {
  return (
    <Provider store={store}>
      {Component.PageLayout ? (
        <Component.PageLayout>
          <Component {...pageProps} />
        </Component.PageLayout>
      ) : (
        <Component {...pageProps} />
      )}
    </Provider>
  );
}

export default MyApp;
