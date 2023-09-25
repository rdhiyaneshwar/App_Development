import React from 'react';
import LoginSignUp from './pages/Login';
import {BrowserRouter,Routes, Route} from 'react-router-dom';
import Navbar from './pages/Navbar';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Analytics from './pages/Analytics';
import CustomChatbot from './pages/CustomChatBot';
import Eco from './pages/Eco';
import Form from './pages/Form';
import Social from './pages/Social';
import  Faq  from './pages/Faq';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';

function App() {
  return (
    <>
     <Social/>
      <BrowserRouter>
      <Routes>
      <Route path='/' element={<LoginSignUp/>}/>
      <Route path='/Home' element={<Home/>}/> 
      <Route path='/Dashboard' element={<Dashboard/>}/>
      <Route path='/Form' element={<Form/>}/>
      <Route path='/Faq' element={<Faq/>}/>
      <Route path='/Terms' element={<Terms/>}/>
      <Route path='/Privacy' element={<Privacy/>}/>      
     </Routes>
  </BrowserRouter>
  
  </>
  );
}

export default App;