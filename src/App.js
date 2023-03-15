// import { hover } from '@testing-library/user-event/dist/hover';
// import Brands from './Brands';
// import Categories from './components/Categories';
// import logo from './logo.svg';
// import Example from './Navbar';
// import Section from './Section';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';

function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route  path="/" element={<Home />}/>
        {/* <Route  path="/brand" element={<h1>Bye</h1>}/> */}
        {/* <Route  path="/category" element={<Home/>}/>
        <Route  path="/pricing" element={<Home/>}/>
        <Route  path="/products" element={<Home/>}/> */}
      </Routes>
    </BrowserRouter>
  )
  
}

export default App;
