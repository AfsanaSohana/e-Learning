import React from 'react';
import Header from './include/header';
import Footer from './include/footer';
import Slider from './include/slider';



function AdminLayout({children}) {
  return (
    <div id="app">
      <Header />
      <Slider />
        <div id="main">    
            <main>{children}</main>
      <Footer />
        </div>
    </div>
  )
}

export default AdminLayout