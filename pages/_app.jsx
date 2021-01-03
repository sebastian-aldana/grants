import React from "react";
import NextApp from "next/app";
import Head from "next/head";
import { Provider } from "react-redux";
import { ThemeProvider, AppBar, Toolbar, Typography } from "@material-ui/core";
import CssBaseline from "@material-ui/core/CssBaseline";
import store from "_store_";
import theme from "_theme_";
import Header from "_providers_/Header/Header";

const App = class extends NextApp {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <Head>
          <title>Grants</title>
          <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width"
          />
          <link rel="shortcut icon" href="/favicon.ico" />
        </Head>
        <Provider store={store}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Header>
              <Component {...pageProps} />
            </Header>
          </ThemeProvider>
        </Provider>
      </>
    );
  }
};

export default App;
