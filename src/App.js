import Brands from "./components/Brands/Brands"
import Navbar from "./components/Navbar/Navbar"
import Products from "./pages/Products"
import Pricing from "./pages/Pricing"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Clothes from "./components/clothes/Clothes"
import Footer from "./components/Footer/Footer"
import SignIn from "./pages/SignIn"

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Products" element={<Products />} />
          <Route path="/Brands" element={<Brands />} />
          <Route path="/Pricing" element={<Pricing />} />
          <Route path="/Clothes" element={<Clothes />} />
          <Route path="/Footer" element={<Footer />} />
          <Route path="/signin" element={<SignIn />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
