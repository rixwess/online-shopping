import React from "react"
import styled from "styled-components"
import './Footer.css'
import {Link} from 'react-router-dom'

const Text = styled("div")`
  margin-left: 90px;
  margin-top: 100px;
  margin-bottom: -80px;
  gap: 100px;
  display: flex;
  justify-content: center;
`



const Footer = () => {
  return (
    <div className="footer">
      <Text>
        <div>
          <h1>
            Se<span>lfie</span>{" "}
          </h1>
          <br />
          <span>
            Selfie is an online store dealing with all product <br />
            Selfie provide cheap, high quality, products to <br />
            customers <br />
          </span>
        </div>
        <div>
          <h2>For beginner</h2>
          <ul>
            <li>
              <Link>About</Link>
            </li>
            <li>
              <Link>Career</Link>
            </li>
            <li>
              <Link>Promotion</Link>
            </li>
          </ul>
        </div>
        <div>
          <h2>Overview</h2>
          <ul>
            <li>
              <Link>Product</Link>
            </li>
            <li>
              <Link>Categories</Link>
            </li>
            <li>
              <Link>Pricing</Link>
            </li>
          </ul>
        </div>
        <div>
          <h2>Explore Us</h2>
          <ul>
            <li>
              <Link>Our Career</Link>
            </li>
            <li>
              <Link>Privacy</Link>
            </li>
            <li>
              <Link>Terms & Conditions</Link>
            </li>
          </ul>
        </div>
        <div>
          <h2>Contact Us</h2>
          <ul>
            <li>
              <Link>support@selfie.com</Link>
            </li>
            <li>
              <Link>+998(71)250-44-55</Link>
            </li>
            <li>
              <Link>Tashkent, Uzbekistan</Link>
            </li>
          </ul>
        </div>
      </Text>
        <span>
          Copyright 2023 • All Rights Reserved Selfie by Giatinaja
        </span>
    </div>
  )
}

export default Footer
