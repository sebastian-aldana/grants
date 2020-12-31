import React from "react";
import Document, { Head, Main, NextScript } from "next/document";
import { ServerStyleSheets } from "@material-ui/core/styles";

class AppDocument extends Document {
  render() {
    return (
      <html lang="en">
        <Head>
          <meta name="theme-color" content="#00d2ff" />
          <link rel="manifest" href="/manifest.json" />
        </Head>
        <body>
          <Main />
          <NextScript />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
          />
        </body>
      </html>
    );
  }
}

AppDocument.getInitialProps = async (ctx) => {
  const sheets = new ServerStyleSheets();
  const originalRenderPage = ctx.renderPage;
  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: (App) => (props) => sheets.collect(<App {...props} />),
    });
  const initialProps = await Document.getInitialProps(ctx);
  return {
    ...initialProps,
    styles: [
      ...React.Children.toArray(initialProps.styles),
      sheets.getStyleElement(),
    ],
  };
};

export default AppDocument;
