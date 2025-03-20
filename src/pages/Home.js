  import React from 'react';
  import { motion } from 'framer-motion';
  import { Link } from 'react-router-dom';
  import profilePic from '../components/images/profile.jpg';
  
  
  function Home() {
    return (
      <section className='flex flex-col items-center justify-center text-center space-y-6'>
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className='mt-8'
        >
          <img 
            src={profilePic} 
            alt='Professional headshot' 
            className='rounded-full mx-auto'
          />
        </motion.div>
        <motion.h1 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className='text-3xl font-bold text-orange-500'
        >
          Backend & QA Engineer
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className='max-w-2xl'
        >
          Developer in Action 🚀
        </motion.p>
        <div className='flex space-x-4'>
          <Link 
            to='/projects' 
            className='px-4 py-2 bg-orange-500 text-gray-900 rounded hover:bg-orange-400 transition'
          >
            View Projects
          </Link>
          <Link 
            to='/contact' 
            className='px-4 py-2 bg-gray-700 rounded hover:bg-gray-600 transition'
          >
            Contact Me
          </Link>
        </div>
      </section>
    );
  }
  
  export default Home;
