import React from 'react'
import Brands from '../components/Brands/Brands'
import Categories from '../components/Categories/index'
import Section from '../components/Section/Section'

const Home = () => {
  return (
    <div>
        <Section/>
        <Brands/>
        <Categories/>
    </div>
  )
}

export default Home