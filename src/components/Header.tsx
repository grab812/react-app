import { Link } from "react-router-dom";
import styled from "styled-components";
const NavList = styled.ul`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
`;
const Thumb = styled.div`
  width: auto;
  height: 260px;
  background: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/397014/new-york-city.png)
    no-repeat center;
  background-size: cover;
  border-radius: 3px;
`;
const Info = styled.div`
  width: auto;
  height: 350px;
  position: relative;
  padding: 14px 24px;
  background: #fff;
  transition: 0.4s 0.15s cubic-bezier(0.17, 0.67, 0.5, 1.03);
`;
const InfoTitle = styled.h2`
  position: relative;
  margin: 10px 0;
  letter-spacing: 3px;
  color: #152536;
  font-family: "Grotesque Black", sans-serif;
  font-size: 1rem;
  text-transform: uppercase;
  text-shadow: 0 0 0px #32577f;
`;
const InfoSeats = styled.h3`
  display: inline-block;
  margin-bottom: 24px;
  padding-bottom: 24px;
  color: ${(props) => props.theme.accentColor};
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  opacity: 0;
  transition: 0.5s 0.25s cubic-bezier(0.17, 0.67, 0.5, 1.03);
`;
const InfoDetail = styled.p`
  font-family: "Merriweather", sans-serif;
  line-height: 2;
  font-size: 0.95rem;
  color: ${(props) => props.theme.bgColor};
  opacity: 0;
  transition: 0.5s 0.25s cubic-bezier(0.17, 0.67, 0.5, 1.03);
`;
const Nav = styled.li`
  position: relative;
  width: 350px;
  height: 350px;
  text-align: center;
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  overflow: hidden;
  &:hover {
    box-shadow: 0px 0px 5px 5px rgba(255, 255, 255, 0.2);
    ${Info} {
      transform: translateY(-260px);
      ${InfoSeats}, ${InfoDetail} {
        opacity: 1;
      }
    }
  }
`;
function Header() {
  return (
    <NavList>
      <Nav>
        <Thumb />
        <Info>
          <InfoTitle>암호화폐 시세 트래커</InfoTitle>
          <InfoSeats>seats remaining: 2</InfoSeats>
          <InfoDetail>
            Join us for our Live Infinity Session in beautiful New York City.
            This is a 3 day intensive workshop where you'll learn how to become
            a better version of...
          </InfoDetail>
        </Info>
        <Link to={`${process.env.PUBLIC_URL}/about`}>About</Link>
      </Nav>
      <Nav>
        <Link to={`${process.env.PUBLIC_URL}/movies`}>Movies</Link>
      </Nav>
      <Nav>
        <Link to={`${process.env.PUBLIC_URL}/coins`}>Coins</Link>
      </Nav>
      <Nav>
        <Link to={`${process.env.PUBLIC_URL}/home`}>Home</Link>
      </Nav>
    </NavList>
  );
}
export default Header;
