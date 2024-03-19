import React from 'react';
import './App.css';

import HomeScreen from '../src/screen/HomeScreen.js'
import { BrowserRouter,Routes,Route} from 'react-router-dom';
import Contact from './components/Contact.js';
import Certificates from './components/Certificates.js';
import About from './components/About.js';
import More from './components/More.js';
import Project from './components/Project.js'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
              <Routes>
                      <Route path='/' element={<HomeScreen/>}>
                          <Route path='/contact' element={<Contact/>}/>
                          <Route path='/certificate' element={<Certificates/>}/>
                          <Route path='/about' element={<About/>}/>
                          <Route path='' element={<About/>}/>
                          <Route path='/more' element={<More/>}/>
                          <Route path='/project' element={<Project/>}/>
                      </Route>
                      
              </Routes>
           
      </BrowserRouter>
    </div>
  );
}

export default App;
