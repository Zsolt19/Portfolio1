  import React from 'react';
  import { Routes, Route } from 'react-router-dom';
  import Header from './components/Header';
  import Footer from './components/Footer';
  import Home from './pages/Home';
  import About from './pages/About';
  import Projects from './pages/Projects';
  import Contact from './pages/Contact';
  import NotFound from './pages/NotFound';
  import { Helmet } from 'react-helmet';
  import './output.css';
  
  function App() {
    return (
      <div className='min-h-screen bg-gray-900 text-gray-100'>
        <Helmet>
          <title>Zsolt Dudás - Backend & QA Engineer</title>
          <meta name='description' content='Portfolio of Zsolt Dudás, a junior backend-focused software developer specializing in Python, SQL, DevOps, and QA testing.' />
          <meta property='og:title' content='Zsolt Dudás - Backend & QA Engineer' />
        </Helmet>
        <Header />
        <main className='container mx-auto px-4 py-8'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/projects' element={<Projects />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    );
  }
  
  export default App;
