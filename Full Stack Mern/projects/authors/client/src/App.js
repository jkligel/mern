import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import AuthorList from './components/AuthorList';
import Main from './views/Main';
import Update from './components/Update';

function App() {
  return (
    <div className="m-auto w-50">

      <h1 className='mb-3'>Favorite Authors</h1>

      <BrowserRouter>
      
        <Routes>
          <Route element={<AuthorList />} path="/" />
          <Route element={<Main />} path="/new"/>
          <Route element={<Update />} path="/edit/:id"/>
        </Routes>
      
      </BrowserRouter>
      
    </div>
  );
}

export default App;
