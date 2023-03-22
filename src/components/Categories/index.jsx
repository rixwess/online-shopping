import React from "react";
import styled from "styled-components";
import img1 from './images/Image1.png'
import img2 from './images/Image4.png'
import img3 from './images/Image3.png'
import img4 from './images/Image2.png'

const Img1 = styled('div')`
  background-image: url(${img1});
  width: 500px;
  height: 180px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding: 2rem;
  color: white;
  margin-bottom: 2rem;
`
const Img2 = styled('div')`
  background-image: url(${img2});
  width: 500px;
  height: 180px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding: 2rem;
  color: white;
`
const Img3 = styled('div')`
  background-image: url(${img3});
  width: 288px;
  height: 380px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-left: 50px;
  padding: 2rem;
  color: white;
`
const Img4 = styled('div')`
  background-image: url(${img4});
  width: 350px;
  height: 385px;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-left: 50px;
  color: white;
`

const Container = styled('div')`
  display: flex;
  align-items: center;
  `
const InnerContainer = styled('div')`
  flex-direction: column;
`
const CategroriesContainer = styled('div')`
  margin: 2rem 4rem;
`

const Title = styled('h1')`
  width: 350px;
`

const Categories = () => {
    return  (
      <CategroriesContainer>
        <Title>Browse Catergories of  The Store</Title>
        <Container>
          <InnerContainer>
            <Img1>
              <h2>Fashion</h2>
              <span>$30,000 items</span>
            </Img1>
            <Img2>
              <h2>Skincare</h2>
              <span>$2,000 items</span>
            </Img2>
            </InnerContainer>
            <Img3>
              <h2>Shoes</h2>
              <span>$10,000 items</span>
            </Img3>
            <Img4>
              <h2>Electronic</h2>
              <span>$10,000 items</span>
          </Img4>
    </Container>
      </CategroriesContainer>
    );
};


export default Categories;