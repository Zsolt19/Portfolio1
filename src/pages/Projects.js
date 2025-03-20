  import React from 'react';
  import { motion } from 'framer-motion';
  import notFound from './NotFound';
  
  const sampleProjects = [
    {
      id: 1,
      title: 'Text based adventure game',
      description: 'A text based adventure game where the player can explore a world and interact with objects.',
      tech: ['Python', 'Object-Oriented Programming'],
      github: 'https://github.com/Zsolt19/Project1-Text-based-game',
      demo: './NotFound.js',
      image: require('../components/images/tbag.jpg')
    },
    {
      id: 2,
      title: 'Flappy Bird Clone',
      description: 'AI plays Flappy Bird clone using self learning algorithm.',
      tech: ['Python', 'Automation'],
      github: './NotFound.js',
      demo: './NotFound.js',
      image: require('../components/images/flappy.png')
    },
    {
      id: 3,
      title: 'Restaurant project',
      description: 'A website for a restaurant where users can view the menu, place orders and book table to dine in.',
      tech: ['QA Testing', 'React', 'CI/CD'],
      github: 'https://github.com/Zsolt19/Restaurant',
      demo: 'https://restaurant-git-deployment-zsolts-projects-73a3d302.vercel.app/',
      image: require('../components/images/restaurant.png')
    }
  ];
  
  function Projects() {
    return (
      <section className='space-y-8'>
        <motion.h2 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className='text-2xl font-bold text-orange-500'
        >
          Projects
        </motion.h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {sampleProjects.map((project) => (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 * project.id }}
              className='bg-gray-800 rounded-lg shadow overflow-hidden'
            >
              <img 
                src={project.image} 
                alt={project.title} 
                className='w-full h-40 object-cover'
                loading='lazy'
              />
              <div className='p-4'>
                <h3 className='text-xl font-semibold'>{project.title}</h3>
                <p className='text-sm mt-2'>{project.description}</p>
                <div className='mt-4 space-x-2'>
                  {project.tech.map((tech, index) => (
                    <span key={index} className='inline-block bg-gray-700 text-orange-500 px-2 py-1 text-xs rounded'>
                      {tech}
                    </span>
                  ))}
                </div>
                <div className='mt-4 flex space-x-4'>
                  <a 
                    href={project.github} 
                    target='_blank' 
                    rel='noopener noreferrer' 
                    className='text-orange-500 hover:underline'
                  >
                    GitHub
                  </a>
                  <a 
                    href={project.demo} 
                    target='_blank' 
                    rel='noopener noreferrer' 
                    className='text-orange-500 hover:underline'
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    );
  }
  
  export default Projects;
