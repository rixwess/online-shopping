import { hover } from '@testing-library/user-event/dist/hover';
import Brands from './components/Brands/Brands';
import Categories from './components/Categories';

import Example from './components/Navbar/Navbar';
import Section from './components/Section/Section';
import Navbar from './components/Navbar/Navbar';
import Products from './pages/Products';
import Pricing from './pages/Pricing';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';

function App() {
  return(
    <BrowserRouter>
    <div className='App'>
    <Navbar/>
    <Routes>
     <Route path='/' element={<Home/>}/>
     <Route path='/Products' element={<Products/>}/>
     <Route path='/Categories' element={<Categories/>}/>
     <Route path='/Brands' element={<Brands/>}/>
     <Route path='/Pricing' element={<Pricing/>}/>
      </Routes>
        </div>

    </BrowserRouter>
  );
  
}

export default App;
