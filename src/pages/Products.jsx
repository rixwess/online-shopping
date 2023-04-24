import React, { useState } from "react"
import axios from "axios"
import { useEffect } from "react"
import styled from "styled-components"
import './Products.css'
const Img = styled("img")`
  width: 200px;
  height: 200px;
`

const Cards = styled("div")`
margin-top: 100px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 30px;
`


const Products = () => {
  const [data, setData] = useState([])
  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((res) => setData(res.data))
  }, [])
  console.log(data);
  return (
    <Cards className="cards">
      {data.map((d, index) => {
        return (
          <div className="card" key={index}>
            <Img src={d.image} />
            <p>{d.title}</p>
            <div className="card-text">
              <button>Buy</button>
              <h1>${d.price}</h1>
            </div>
          </div>
        )
      })}
    </Cards>
  )
}

export default Products
