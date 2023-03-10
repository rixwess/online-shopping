import styled from "styled-components";

const Container = styled('div')`
    display:flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px 0;
    
    
`
const Logo = styled ('a')`
    color: black;
    font-size:50px;
    text-decoration:none;
    font-family: 'Manrope';
    margin-left: 30px;
    
`

const Ul = styled('ul')`
    display: flex;
    list-style: none;
`
const Button = styled('button')`
border: none;
padding: 15px 20px;
border-radius: 8px;

&:first-child{
    color: black;
}

&:last-child{
    color: #fff;
    background-color: #3C9379;
}
`

const Link = styled('a')`
font-style: normal;
font-weight: 500;
font-size: 16px;
text-decoration: none;
margin: 0 20px;


/* Grey */

color: #535A56;
`

function Example() {


  return (
    <Container>
        <Logo href=""> Selfie </Logo>
        <Ul className="Nav">
        <li><Link href="/">Home</Link></li>
        <li><Link href="/products">Products</Link></li>
        <li><Link href="/pricing">Categorias</Link></li>
        <li><Link href="/category">Brands</Link></li>
        <li><Link href="/brand">Pricing</Link></li>
        </Ul>
        <div>
            <Button>Login</Button>
            <Button>Register</Button>
        </div>
    </Container>
  );
}

export default Example;