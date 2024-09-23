import React from 'react';
import './Courses.css';

const Courses = () => {
  return (
    <section id="courses" className="courses section">
      <h2>Our Courses</h2>
      <div className="course-list">
        <div className="course">
          <h3>Web Development</h3>
          <p>Learn how to build modern web applications using HTML, CSS, and JavaScript. This course covers everything from basics to advanced concepts.</p>
        </div>
        <div className="course">
          <h3>Data Science</h3>
          <p>Discover the world of data analysis and visualization. This course teaches you how to use Python and popular libraries to analyze data effectively.</p>
        </div>
        <div className="course">
          <h3>Digital Marketing</h3>
          <p>Master the art of digital marketing and learn how to promote your brand online. This course covers SEO, social media, and email marketing strategies.</p>
        </div>
      </div>
    </section>
  );
};

export default Courses; // Pastikan ini ada
