import App, { Container } from 'next/app';
import React from 'react';
import NextSeo from 'next-seo';
 
const DEFAULT_SEO = {
  title: 'My Portfolio Website - ChrisBemister.com ',
  description: 'I\'m building this website to showcase the web applications that I\'ve built, and to motivate me to build more advanced ones.' ,
  openGraph: {
    type: 'website',
    locale: 'en_IE',
    url: 'https://www.chrisbemister.com',
    title: 'My Portfolio Website - ChrisBemister.com',
    description: 'I\'m building this website to showcase the web applications that I\'ve built, and to motivate me to build more advanced ones.',
    image:
      '#',
    site_name: 'ChrisBemister.com',
    imageWidth: 1200,
    imageHeight: 1200
  },
  twitter: {
    handle: '@chrisbemister',
    cardType: 'summary_large_image'
  }
};
 
export default class MyApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {};
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }
 
    return { pageProps };
  }
 
  render() {
    const { Component, pageProps } = this.props;
    return (
      <Container>
        <NextSeo config={defaultSeo} />
        <Component {...pageProps} />
      </Container>
    );
  }
}