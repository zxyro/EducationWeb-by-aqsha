import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Courses from './components/Courses';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="app">
      <Header />
      <About />
      <Courses />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default App;
