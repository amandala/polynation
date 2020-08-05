import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400&family=Red+Rose:wght@300;400;700&display=swap"
          rel="stylesheet"
        />
        <link href="/static/styles.css" rel="stylesheet" />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
