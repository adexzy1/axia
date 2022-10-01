import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import React, { useEffect } from 'react';
import store from '../Redux/store';
import isUserLoggedIn from '../Redux/user/asyncThunk/IsUserLoggedIn';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />

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
