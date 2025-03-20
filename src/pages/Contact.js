  import React from 'react'; 
  import { motion } from 'framer-motion';
  
  function Contact() {
    return (
      <section className='space-y-8'>
        <motion.h2 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className='text-2xl font-bold text-orange-500'
        >
          Contact Me
        </motion.h2>
        <motion.form 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className='space-y-4 max-w-lg'
          onSubmit={(e) => { e.preventDefault(); /* Handle form submission */ }}
        >
          <div>
            <label className='block text-sm font-medium mb-1'>Name</label>
            <input 
              type='text' 
              placeholder='Developer in Action 🚀' 
              className='w-full p-2 bg-gray-700 rounded'
            />
          </div>
          <div>
            <label className='block text-sm font-medium mb-1'>Email</label>
            <input 
              type='email' 
              placeholder='email@example.com' 
              className='w-full p-2 bg-gray-700 rounded'
            />
          </div>
          <div>
            <label className='block text-sm font-medium mb-1'>Message</label>
            <textarea 
              placeholder='Your message...' 
              className='w-full p-2 bg-gray-700 rounded'
              rows='4'
            ></textarea>
          </div>
          <button 
            type='submit' 
            className='px-4 py-2 bg-orange-500 text-gray-900 rounded hover:bg-orange-400 transition'
          >
            Send Message
          </button>
        </motion.form>
        <div className='space-x-4 mt-8'>
          <a href='https://www.linkedin.com/in/zsolt-dudas-712172157/' className='text-orange-500 hover:underline'>LinkedIn</a>
          <a href='https://github.com/Zsolt19' className='text-orange-500 hover:underline'>GitHub</a>
          <a href='mailto:zsolt@levellada.net' className='text-orange-500 hover:underline'>Email</a>
        </div>
        <div className='mt-4'>
          <a href='#' className='text-orange-500 hover:underline'>Let’s Connect (Calendly/Email Link)</a>
        </div>
      </section>
    );
  }
  
  export default Contact;
