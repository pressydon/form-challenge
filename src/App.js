import React from "react";
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from "./components/Header";
import Step1 from './Step1';
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";


function App() {

 
  return (

    
   <BrowserRouter>
 
    <Header />
   
       <Routes>
        <Route exact path='/' element={ <Step1 /> } />
        <Route  path='/step2' element={<Step2 />} />
          <Route  path='/step3' element={<Step3 />} />
        <Route  path='/step4' element={<Step4 />} />  
       </Routes>
   </BrowserRouter>
  );
}

export default App;
