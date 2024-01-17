import { ReactDOM } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import Category from './Pages/Category';
import Meal from './Pages/Meal';
import Navbar from './Components/Navbar';

function App() {
  return (
    <>
      <div className='App'>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Navbar/>}>
              <Route index element={<Home/>} />
              <Route path='/:category' element={<Category />} />
              <Route path='/:category/:meal' element={<Meal />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
