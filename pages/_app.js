import * as React from 'react'
import NextApp from 'next/app'
import '@the-innovation-circuit/theme/fonts/fonts.css'
import theme from '@the-innovation-circuit/theme'
import { ThemeProvider } from 'theme-ui'
import Head from 'next/head'

export default class App extends NextApp {
  render() {
    const { Component, pageProps } = this.props
    return (
      <ThemeProvider
        theme={theme}
        theme={{
          ...theme,
          colors: { ...theme.colors, ...theme.colors.modes.dark, modes: {} }
        }}
      >
        <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>The SG Game Jam | By the Innovation Circuit</title>
        <meta name="title" content="The SG Game Jam | By the Innovation Circuit" />
        <meta
          name="description"
          content="Calling all teenagers in Singapore & SEA to create a video game and win up to $500!"
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="The Innovation Circuit" />
        <meta
          property="og:description"
          content="Calling all teenagers in Singapore & SEA to create a video game and win up to $500!"
        />
        <meta
          property="og:image"
          content="https://jam.innovationcircuit.com/meta-image.png"
        />
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:image"
          content="https://jam.innovationcircuit.com/meta-image.png"
        />
      </Head>
        <Component {...pageProps} />
        <style>
          {`
          :root{
            --theme-ui-colors-primary: #ec3750;
          }
          
          `}
        </style>
      </ThemeProvider>
    )
  }
}
