import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Main from './views/Main';
import Update from './components/Update';
import Detail from './components/Detail'

function App(){
  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route element={<Main />} path="/" default />
          <Route element={<Detail />} path="/products/:id" />
          <Route element={<Update />} path="/edit/:id"></Route>
        </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App;
