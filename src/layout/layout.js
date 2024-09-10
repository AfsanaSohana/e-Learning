import React from 'react';

import Header from './inclulde/header';
import Footer from './inclulde/footer';

function Layout({children}) {
  return (
    <div id="app">
        <div id="main">
            <Header />
            <main>{children}</main>
            <Footer />
        </div>
    </div>
  )
}

export default Layout