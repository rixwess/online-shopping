import styled from "styled-components"
import { Link } from "react-router-dom"
import "./Navbar.css"

const Container = styled("div")`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 0;
`
const Logo = styled("a")`
  color: black;
  font-size: 50px;
  text-decoration: none;
  font-family: "Manrope";
  margin-left: 30px;
`

const Button = styled("button")`
  border: none;
  padding: 15px 20px;
  border-radius: 8px;

  &:first-child {
    color: black;
  }

  &:last-child {
    color: #fff;
    background-color: #3c9379;
  }
`

const NavLink = styled(Link)`
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  text-decoration: none;
  margin: 0 20px;

  /* Grey */

  color: #535a56;
`

function Example() {
  return (
    <Container>
      <Logo href=""> Selfie </Logo>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/Products ">Products</NavLink>
      <NavLink to="/Categories">Categorias</NavLink>
      <NavLink to="/category">Brands</NavLink>
      <NavLink to="/brand">Pricing</NavLink>
      <div>
        <div className="link">
          <Link to={"/signin"}>Sign In</Link>
          <Button>Register</Button>
        </div>
      </div>
    </Container>
  )
}

export default Example
