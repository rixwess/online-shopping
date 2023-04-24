import React from "react"
import styled from "styled-components"
import Img1 from "../icons/Icon1.png"
import Img2 from "../icons/Icon2.png"
import Img3 from "../icons/Icon3.png"

const Img = styled("img")`
  width: 100px;
  height: 100px;
  align-items: center;
`
const Container = styled("div")`
  display: flex;
  justify-content: center;
 gap: 100px;
 margin-top: 80px;
 padding: 100px;
`

const Icons = () => {
  return (
    <Container>
      <div className="containter-card">
        <Img src={Img1} alt="" />
        <h1>Free Delivery</h1>
        <span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
           repudiandae dicta ab facilis molestiae nesciunt eius possimus
        </span>
      </div>
      <div className="containter-card">
        <Img src={Img2} alt="" />
        <h1>Trusted Platform</h1>
        <span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
          repudiandae dicta ab facilic molestie nesciunt eius possimus
        </span>
      </div>
      <div className="containter-card">
        <Img src={Img3} alt="" />
        <h1>Here for you</h1>
        <span>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. <br />
          repudiandae dicta ab facilic molestie nesciunt eius possimus
        </span>
      </div>
    </Container>
  )
}

export default Icons
