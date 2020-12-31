import React from "react";
import NextApp from "next/app";
import Head from "next/head";
import { Provider } from "react-redux";
import store from "_store_";

const App = class extends NextApp {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <Head>
          <meta charSet="UTF-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <title>Grants Clone</title>
        </Head>
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </>
    );
  }
};

export default App;
