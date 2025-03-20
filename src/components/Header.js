  import React from 'react';
  import { Link, NavLink } from 'react-router-dom';
  
  function Header() {
    return (
      <header className='bg-gray-800 shadow'>
        <div className='container mx-auto flex items-center justify-between p-4'>
          <Link to='/' className='text-xl font-bold text-orange-500'>
            Zsolt Dudás
          </Link>
          <nav>
            <ul className='flex space-x-4'>
              <li>
                <NavLink 
                  to='/' 
                  className={({ isActive }) => isActive ? 'text-orange-500' : 'hover:text-orange-400'}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to='/about' 
                  className={({ isActive }) => isActive ? 'text-orange-500' : 'hover:text-orange-400'}
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to='/projects' 
                  className={({ isActive }) => isActive ? 'text-orange-500' : 'hover:text-orange-400'}
                >
                  Projects
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to='/notFound' 
                  className={({ isActive }) => isActive ? 'text-orange-500' : 'hover:text-orange-400'}
                >
                  Surprise
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to='/contact' 
                  className={({ isActive }) => isActive ? 'text-orange-500' : 'hover:text-orange-400'}
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    );
  }
  
  export default Header;
