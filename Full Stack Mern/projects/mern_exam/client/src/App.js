import './App.css';
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import StoreList from './components/StoreList';
import New from './views/New';
import Update from './views/Update';
import Show from './components/Show';

function App() {

  return (
    <div className='p-3'>

      <h1 className='ms-2'>Store Finder</h1>

      <BrowserRouter>
      
        <Routes>

          <Route element={<StoreList />} path="/" />

          <Route element={<Show />} path="/store/:id"/>

          <Route element={<New/>} path="/store/add"/>

          <Route element={<Update />} path="/store/edit/:id" />

        </Routes>
      
      </BrowserRouter>


    </div>
  );
}

export default App;
