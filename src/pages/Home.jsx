import React from "react"
import Brands from "../components/Brands/Brands"
import Categories from "../components/Categories/index"
import Section from "../components/Section/Section"
import Why from "../components/Why"
import Icons from '../components/icons/Icons'
import Clothes from "../components/clothes/Clothes"
import Footer from "../components/Footer/Footer"

const Home = () => {
  return (
    <div>
      <Section />
      <Brands />
      <Categories />
      <Why />
      <Icons />
      <Clothes />
      <Footer/>
    </div>
  )
}

export default Home