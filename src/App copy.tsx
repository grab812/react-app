import React, { useState } from "react";
import styled from "styled-components";
const Container= styled.div`
    background-color: ${props=> props.theme.bgColor}
`
const H1 = styled.h1`
    color: ${props=> props.theme.textColor}
`
const BtnThemeToggle = styled.button`
    width: 10rem;
    height: 5rem;
    border-radius: 10px;
`
function App() {
    const [themeToggle, setThemeToggle]= useState(true);
    const getTheme = (event:React.FormEvent<HTMLButtonElement>)=>{
        event.preventDefault();
        setThemeToggle(!themeToggle);
    }
    console.log(themeToggle);
    return(
        <Container>
            <H1>Hello</H1>
            <BtnThemeToggle onClick={getTheme}>{themeToggle? "라이트모드":"다크모드"}</BtnThemeToggle>
        </Container>
    )
}
export default App;
