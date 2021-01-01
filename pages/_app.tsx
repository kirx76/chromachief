import App from "next/app";
import Head from "next/head";
import React from "react";
import {Provider} from "mobx-react";
import '../styles/globals.css';
import RootStore from "../src/stores/RootStore";
import initRootStore from "../src/stores";
import Cookies from 'cookies';

class ChromaChief extends App<any, any> {
  rootStore: RootStore | undefined;

  constructor(props: any) {
    super(props);
    const isServer = typeof window === 'undefined';
    this.rootStore = isServer ? props.initialState : initRootStore(props.initialState);
  }

  static async getInitialProps(appContext: any) {
    let pageProps = {}
    let err
    const rootStore = initRootStore({} as RootStore);
    appContext.ctx.rootStore = rootStore;

    if (appContext.ctx.req) {
      const cookies = new Cookies(appContext.ctx.req, appContext.ctx.res)
      const token = cookies.get('token')

      // let City = cookies.get('City')

      rootStore.tokenStore.set(token!, true)

      // const header_city = appContext.ctx.req.headers['x-city']

      // if (header_city) {
      // rootStore.selectedCityStore.setHeaderCity(header_city)
      // }

      // rootStore.selectedCityStore.set(City, true)
    }

    await rootStore.authStore.fetchCurrentUser()

    return {
      initialState: rootStore,
      pageProps: pageProps,
      err: err
    };
  }


  render() {
    const {Component, pageProps, err} = this.props;
    return (
      <Provider {...this.rootStore}>
        <Head>
          <link rel="apple-touch-icon" sizes="180x180" href="/static/apple-touch-icon.png"/>
          <link rel="icon" type="image/png" sizes="32x32" href="/static/favicon-32x32.png"/>
          <link rel="icon" type="image/png" sizes="16x16" href="/static/favicon-16x16.png"/>
          <link rel="manifest" href="/static/site.webmanifest"/>
          <link rel="preconnect" href="https://fonts.gstatic.com"/>
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
            rel="stylesheet"/>
          <meta name="theme-color" content="#ffffff"/>
          <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"/>
          <title>ChromaChief</title>
        </Head>
        <Component {...pageProps} err={err}/>
      </Provider>
    )
  }

}

export default ChromaChief
