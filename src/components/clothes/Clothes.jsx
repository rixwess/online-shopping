import React from "react"
import styled from "styled-components"
import Image1 from "./Image1.png"
import Image2 from "./Image2.png"
import Image3 from "./Image3.png"
import Image4 from "./Image4.png"

const Img = styled("img")`
  align-items: center;
  width: 250px;
  border-radius: 21px;
`

const Clothe = styled("div")`
  display: flex;
  justify-content: center;
  gap: 200px;
  margin-top: 100px;
`

const Card = styled("div")`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  transition: all 1s;
  &:hover {
    transform: scale(1.1);
  }
`

const Text = styled("div")`
  margin-left: 90px;
  margin-top: 100px;
  margin-bottom: -80px;
`
const Clothes = () => {
  return (
    <div>
      <Text>
        <h1>Popular Products From</h1>
        <h1>All Brands</h1>
      </Text>
      <Clothe>
        <Card>
          <Img src={Image1} alt="" />
          <span>Nike Air Force</span>
          <span>200$</span>
        </Card>
        <Card>
          <Img src={Image2} alt="" />
          <span>White Sweater</span>
          <span>99$</span>
        </Card>
        <Card>
          <Img src={Image3} alt="" />
          <span>Smartwatch</span>
          <span>199$</span>
        </Card>
        <Card>
          <Img src={Image4} alt="" />
          <span>Apple Airpods</span>
          <span>250$</span>
        </Card>
      </Clothe>
    </div>
  )
}

export default Clothes
