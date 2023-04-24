import React from "react"
import "./SignIn.css"
import styled from "styled-components"
import GoogleLogo from "../pages/google-logo-png.png"

const Input = styled("input")`
  width: 80%;
  padding: 0.4rem 0.6rem;
  font-size: 20px;
  border: none;
  border-bottom: 0.9px solid gray;
`

const Title = styled("h1")`
  font-size: 56px;
  font-family: "Dancing Script", cursive;
`

const SubTitle = styled("p")`
  font-size: 24px;
  color: gray;
`

const Button = styled("button")`
  width: 150px;
  padding: 0.7rem 0.8rem;
  font-size: 16px;
  background-color: #3c9379;
  border: none;
  border-radius: 30px;
  color: white;
  margin-bottom: 2rem;
`

const Or = styled("p")`
  position: absolute;
  z-index: 4;
`
const OrContainer = styled("div")`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const IMG = styled("img")`
  width: 10rem;
  height: 15rem;
`;
const Container = styled ("div")`
  margin-left: 40rem;
  width: 120%;
  margin-top: 5rem;
`


const SignIn = () => {
  return (
    <Container>
      <div className="SignIn">
        <div className="SignIn-left">
          <img src="" alt="" />
        </div>
        <div className="SignIn-right">
          <Title>Selfie</Title>
          <SubTitle>Welcome to Selfie</SubTitle>
          <Input type="text" placeholder="Email" />
          <Input type="password" placeholder="Password" />
          <Button>Sign In</Button>
          <OrContainer>
            <Or>or</Or>
            <hr style={{ width: "50%" }} />
            <div className="container">
              {/* <img src={GoogleLogo} alt="googlelogo" style={{ margin: "0px" }} /> */}
              <p>Sign in with </p>
                <img src={GoogleLogo} alt="" />
            </div>
          </OrContainer>
        </div>
      </div>
    </Container>
  )
}

export default SignIn
