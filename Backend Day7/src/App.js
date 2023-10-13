import React from 'react';
import LoginSignUp from './pages/Login';
import {BrowserRouter,Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Eco from './pages/Eco';
import Form from './pages/Form';
import Faq from './pages/Faq';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';
import Diet from './pages/Diet';
import Physiotherapy from './pages/Physiotherapy';
import Feedback from './pages/Feedback';
import Sanitation from './pages/Sanitation';
import Data from './pages/Data';

function App() {
  return (
    <>

      <BrowserRouter>
      <Routes>
      <Route path='/' element={<LoginSignUp/>}/>
      <Route path='/Home' element={<Home/>}/> 
      <Route path='/Dashboard' element={<Dashboard/>}/>
      <Route path='/Form' element={<Form/>}/>
      <Route path='/Faq' element={<Faq/>}/>
      <Route path='/Terms' element={<Terms/>}/>
      <Route path='/Privacy' element={<Privacy/>}/>      
      <Route path='/Eco' element={<Eco/>}/>
      <Route path='/diet' element={<Diet/>}/>
      <Route path='/Physio' element={<Physiotherapy/>}/>
      <Route path='/Feedback' element={<Feedback/>}/>
      <Route path='/Sanitation' element={<Sanitation/>}/>
     </Routes>
  </BrowserRouter> 
  
  </>
  );
}

export default App;