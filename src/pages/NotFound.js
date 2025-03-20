  import React from 'react';
  import { Link } from 'react-router-dom';
  import { motion } from 'framer-motion';
  
  function NotFound() {
    return (
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className='text-center space-y-4'
      >
        <h2 className='text-3xl font-bold text-orange-500'>404 - Not Found</h2>
        <p>Looks like you found a bug! But don’t worry, I’m good at fixing those. 😎</p>
        <Link to='/' className='text-orange-500 hover:underline'>Go back Home</Link>
      </motion.div>
    );
  }
  
  export default NotFound;
