import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import React, { useEffect } from 'react';
import store from '../Redux/store';
import isUserLoggedIn from '../Redux/slice/asyncThunk/IsUserLoggedIn';

type ComponentWithPageProps = AppProps & {
  Component: AppProps['Component'] & {
    PageLayout?: AppProps['Component'];
  };
};

function MyApp({ Component, pageProps }: ComponentWithPageProps) {
  useEffect(() => {
    store.dispatch(isUserLoggedIn());
  }, []);

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
