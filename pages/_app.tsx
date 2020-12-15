import App from "next/app";
import Head from "next/head";
import React from "react";
import {Provider} from "mobx-react";
import '../styles/globals.css';

class ChromaChief extends App<any, any> {

  render() {
    const {Component, pageProps, err} = this.props;
    return (
      <Provider>
        <Head>
          <link rel="apple-touch-icon" sizes="180x180" href="/static/apple-touch-icon.png"/>
          <link rel="icon" type="image/png" sizes="32x32" href="/static/favicon-32x32.png"/>
          <link rel="icon" type="image/png" sizes="16x16" href="/static/favicon-16x16.png"/>
          <link rel="manifest" href="/static/site.webmanifest"/>
          <link rel="preconnect" href="https://fonts.gstatic.com"/>
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
            rel="stylesheet"/>
          <title>ChromaChief</title>
        </Head>
        <Component {...pageProps} err={err}/>
      </Provider>
    )
  }

}

export default ChromaChief