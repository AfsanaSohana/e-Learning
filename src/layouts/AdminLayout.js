import React from 'react'; 
import Header from './include/header';
import Footer from './include/footer';

function AdminLayout({children}) {
  return (
    <div id="app">
      <Header />
      <div id="main" style={{ backgroundColor: '#e6faff', padding: '20px', minHeight: '100vh' }}>    
        <main>{children}</main>
      </div>
      <Footer />
    </div>
  )
}

export default AdminLayout;