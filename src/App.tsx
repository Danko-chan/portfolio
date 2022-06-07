import React from 'react';
import './App.css';
import Portfolio from './components/Portfolio';
import ThemePicker from './components/ThemePicker';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  return (
    
        <Routes>

            <Route path="/" element={<ThemePicker />} />            
             
            

        </Routes>

    
     
  );
}

export default App;
