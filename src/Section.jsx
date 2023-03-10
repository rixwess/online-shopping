import styled from "styled-components";
import Source from "../src/Image.png"
import './Section.css'

const Container = styled("div")`
    margin-top: 5rem;
`

const LeftContent = styled("div")``

const HeaderText = styled('h1')`
    text-transform: uppercase;
    font-family: sans-serif;
    font-size: 30px;
`

const Span = styled('p')`
    color: #3C9379;
`

const Section = () => {
  return (
   <div className="showcase">
    <div className="left">
      <h1>Best Place to Buy <br />
          <span>Everything.</span>
      </h1>
      <p>At Selfie, you can shop for all your favorite beautify brands, clothes. <br />
       house hold products and more at a single place.</p>
       <button>Shopping Now</button>
       <div className="text">
       </div>
    </div>
    <div className="right">
        <img src={Source} alt="" />
    </div>
   </div>
  )
};
export default Section;
