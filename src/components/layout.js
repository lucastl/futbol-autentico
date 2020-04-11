import React from 'react'
import { Global, css } from '@emotion/core';
import Helmet from 'react-helmet'
import Header from './header'

const Layout = (props) => {

  return (
    <>

      <Global
        styles={css`
        
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }

          body {
            font-size: 16px;
            font-family: 'Titillium Web', sans-serif;
          }

          ul {
            list-style: none;
          }

        `}
      />
    
      <Helmet>
        <title>Fútbol Autentico</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css" />
        <link href="https://fonts.googleapis.com/css2?family=Titillium+Web:wght@400;700&display=swap" rel="stylesheet" />
      </Helmet>

      <Header />

      {props.children}

    </>
  );

}

export default Layout;