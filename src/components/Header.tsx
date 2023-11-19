import { Link } from "react-router-dom";
import styled from "styled-components";
const NavList = styled.ul`
    width: 100%;
    display: flex;
    justify-content: space-around;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
`
const Nav = styled.li`
    position: relative;
    width: calc((100% - 20px)/3.3);
    text-align: center;
    transition: 0.3s;
    border-radius: 10px;
    border: 1px solid rgba(255,255,255,.2);
    &:hover {
        transform: translateY(-10px);
        box-shadow: 0px 0px 5px 5px rgba(255,255,255,.2);
    }
    &:before {
        content: '';
        display: block;
        width: 100%;
        padding-bottom: 100%;
    }
    a {
        position: absolute;
        top: 0;
        display: flex;
        height: 100%;
        text-align: center;
        width: -webkit-fill-available;
        align-items: center;
        justify-content: center;
    }
`
function Header(){
    return(
        <NavList>
            <Nav><Link to="/about">About</Link></Nav>
            <Nav><Link to="/coins">Coins</Link></Nav>
            <Nav><Link to="/home">Home</Link></Nav>
        </NavList>
    )
}
export default Header;