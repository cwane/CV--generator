import React from 'react';

import './App.css';
import Address from './components/address';
import Profile from './components/profile';
import Education from './components/education';
import Skills from './components/skills';
import Contact from './components/contact';
import ProfileDescription from './components/profileDescription';
import JobDescription from './components/jobDescription';

function App() {
  return (
    <React.Fragment>
      <div className='container-a'>
        <Address />
        <Profile />
        <Education />
        <Skills />
      </div>
      <div className='container-b'>
        <Contact />
        <ProfileDescription />
        <JobDescription />
      </div>
    </React.Fragment>
  );
}

export default App;
