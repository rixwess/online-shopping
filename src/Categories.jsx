import React from "react";
import styled from "styled-components";
import Source2 from "../src/Categories.png"

const CategoriesLogo = styled('div')`
margin-top: 100px;
margin-left: 50px;
`

const Text = styled('div')``

const Categories = () => {
    return(
        <>
        <CategoriesLogo>
            <img src={Source2} alt="" />
        </CategoriesLogo>
        </>
    );
};

export default Categories