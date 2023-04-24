import React from "react"
import styled from "styled-components"
import './Why.css'

const Text = styled("h1")`
  color: black;
  margin-top: 100px;
  margin-left: 700px;
`


const Why = () => {
  return (
     <div className="Why">
    <Text>
      <h2>
        Why choose Se<span>lfie</span>?{" "}
      </h2>
    </Text>
    </div>
  )
}

export default Why
