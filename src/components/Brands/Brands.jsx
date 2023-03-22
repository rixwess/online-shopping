import React from "react";
import styled from "styled-components";
import Source1 from "../../Brand.png"

const Text = styled("p")`
  text-align: center;
  margin-top: 20px;
`;

const BrandLogos = styled('div')`
    display: flex;
    justify-content: center;
    margin-top: 40px;
`
const Brands = () => {
  return (
    <>    
    <Text>
      <h2>We Collaborate With 250+ Leading Top</h2>
      <h2>E Commerce and Brands </h2>
    </Text>
      <BrandLogos >
      <img src={Source1} alt=""  />
    </BrandLogos>
    </>
  );

};


export default Brands;
