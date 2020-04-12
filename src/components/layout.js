import React from 'react'
import Helmet from 'react-helmet'
import Header from './header'

import '../style.css';

const Layout = (props) => {

  return (
    <>
    
      <Helmet>
        <title>Fútbol Autentico</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css" />
        <link href="https://fonts.googleapis.com/css2?family=Titillium+Web:wght@400;700&display=swap" rel="stylesheet" />
      </Helmet>

      <Header />
      <h2 className="title-league">Liga Deportiva del Sur</h2>
      {props.children}

    </>
  );

}

export default Layout;