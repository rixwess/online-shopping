import React from 'react'
import Brands from '../Brands'
import Categories from '../components/Categories/index'
import Example from '../Navbar'
import Section from '../Section'

const Home = () => {
  return (
    <div>
        <Example/> 
         <Section/>
        <Brands/>
        <Categories/>
    </div>
  )
}

export default Home