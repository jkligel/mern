import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import Home from './components/Home.jsx';
import Display from './components/Display.jsx';
import './App.css'

function App(){
  return(
    <BrowserRouter>

      <div className='App'>
        <Routes>
          <Route path="/home" element={ <Home /> }></Route>
          <Route path="/:param" element={ <Display />}></Route>
          <Route path="/:param/:tc/:bgc" element={ <Display /> }></Route>
        </Routes>
      </div>

    </BrowserRouter>
  );
}

export default App;