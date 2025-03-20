import React from 'react';
  
  function Footer() {
    return (
      <footer className='bg-gray-800 p-4 text-center text-sm'>
        <p>&copy; {new Date().getFullYear()} Zsolt Dudás. All rights reserved.</p>
        <p>Legal statements and privacy policy here.</p>
      </footer>
    );
  }
  
  export default Footer;
