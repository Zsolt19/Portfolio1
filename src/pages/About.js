  import React from 'react';
  import { motion } from 'framer-motion';
  
  function About() {
    return (
      <section className='space-y-8'>
        <motion.h2 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className='text-2xl font-bold text-orange-500'
        >
          About Me
        </motion.h2>
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className='space-y-4'
        >
          <p>
            Developer in Action 🚀 - I started my career in security operations and have transitioned into software development. Below is a quick timeline of my journey and some skills I&apos;ve picked up along the way:
          </p>
          <p>
            [Placeholder: Additional details about certifications such as CompTIA Security+ and core skills.]
          </p>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className='mt-6'
        >
          <h3 className='text-xl font-semibold'>Career Transition Timeline</h3>
          <div className='border-l-2 border-gray-600 ml-4'>
            <div className='mb-4'>
              <p className='font-bold'>Start: 2006</p>
              <p>Led teams in Security Operations, honing problem-solving and leadership skills.</p>
            </div>
            <div className='mb-4'>
              <p className='font-bold'>Transition: 2022</p>
              <p>Took on an IT Support role to kickstart my tech career.</p>
            </div>
            <div className='mb-4'>
              <p className='font-bold'>Transition: 2024</p>
              <p>Completed a Software Engineering Bootcamp, and began intensive coding training focusing on full-stack development.</p>
            </div>
            <div className='mb-4'>
              <p className='font-bold'>Now: 2025</p>
              <p>Developer in Action 🚀</p>
            </div>
          </div>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className='mt-6'
        >
          <h3 className='text-xl font-semibold'>Technical Skills</h3>
          <div className='space-y-2'>
            <div>
              <span>Python</span>
              <div className='w-full bg-gray-700 rounded-full h-2'>
                <div className='bg-orange-500 h-2 rounded-full' style={{ width: '80%' }}></div>
              </div>
            </div>
            <div>
              <span>SQL</span>
              <div className='w-full bg-gray-700 rounded-full h-2'>
                <div className='bg-orange-500 h-2 rounded-full' style={{ width: '75%' }}></div>
              </div>
            </div>
            <div>
              <span>DevOps</span>
              <div className='w-full bg-gray-700 rounded-full h-2'>
                <div className='bg-orange-500 h-2 rounded-full' style={{ width: '70%' }}></div>
              </div>
            </div>
            <div>
              <span>QA Testing</span>
              <div className='w-full bg-gray-700 rounded-full h-2'>
                <div className='bg-orange-500 h-2 rounded-full' style={{ width: '90%' }}></div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    );
  }
  
  export default About;
