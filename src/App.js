// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import React from 'react'
import News from './components/News';
// import NewsItems from './components/NewsItems';
import {
    Routes,
    Route,
  } from "react-router-dom";


const App =()=> {
  
    return (
      <div>
      <Navbar/>
      
      <Routes>
          
         
          <Route exact path="/"  element={<News key="home" pagesize={6} country="in" category="GENERAL"/>}/>
          <Route exact path="/general" element={<News key="general" pagesize={6} country="in" category="GENERAL"/>}/>
          <Route exact path="/business" element={<News key="business" pagesize={6} country="in" category="BUSINESS"/>}/>
          <Route exact path="/entertainment" element={<News key="enter" pagesize={6} country="in" category="ENTERTAINMENT"/>}/>
          <Route exact path="/science" element={<News key="science" pagesize={6} country="in" category="SCIENCE"/>}/>
          <Route exact path="/technology" element={<News key="tech" pagesize={6} country="in" category="TECHNOLOGY"/>}/>
          <Route exact path="/health" element={<News key="health" pagesize={6} country="in" category="HEALTH"/>}/>
          <Route exact path="/sports" element={<News  key="sports" pagesize={6} country="in" category="SPORTS"/>}/>
          
      </Routes>
        
      </div>
    ) 
  }
  export default App



