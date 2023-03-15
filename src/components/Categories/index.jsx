import React from "react";
import styled from "styled-components";
import img1 from './images/Image1.png'

const Img1 = styled('div')`
  background-image: url(${img1});
  width: 500px;
  height: 180px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`

const Categories = () => {
    return  (
        <div>
            <Img1>
              <h1>Fashion</h1>
              <h3>$30,000 items</h3>
            </Img1>

        </div>
    
    );
};

export default Categories;