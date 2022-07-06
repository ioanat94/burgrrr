import React from 'react';
import Footer from './Footer';
import Navbar from './Navbar';
import '@fontsource/nunito/300.css';
import '@fontsource/nunito/400.css';
import '@fontsource/nunito/500.css';
import '@fontsource/nunito/600.css';
import '@fontsource/nunito/700.css';

function Layout({ children }) {
  return (
    <div style={{ fontFamily: 'Nunito' }}>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}

export default Layout;
