import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import BgCoin from "../assets/home_bg_bitcoins.jpg";
import BgNetflix from "../assets/home_bg_netflix.jpg";
import BgTrello from "../assets/home_bg_trello.jpg";
import BgContact from "../assets/home_bg_contact.jpg";
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
  background: url(${BgCoin}) no-repeat center;
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
const InfoSubTitle = styled.h3`
  margin-bottom: 10px;
  text-transform: uppercase;
  font-size: 0.85rem;
  color: rgba(21, 37, 54, 0.7);
  font-family: "Grotesque", sans-serif;
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
const InfoMore = styled.strong`
  position: absolute;
  left: 50%;
  bottom: 0;
  transform: translate3d(-50%, -27px, 0);
  padding: 20px 24px;
  letter-spacing: 1px;
  color: ${(props) => props.theme.accentColor};
  font-family: "Grotesque Black", sans-serif;
  font-size: 0.9rem;
  text-transform: uppercase;
  cursor: pointer;
  opacity: 0;
  transition: 0.5s 0.25s cubic-bezier(0.17, 0.67, 0.5, 1.03);
`;
function createcss() {
  let styles = "";

  for (let i = 0; i < 5; i += 1) {
    styles += `
        &:nth-child(${i}) ${Thumb} {
            background-image: url("${process.env.PUBLIC_URL}/assets/home_bg_${i}.jpg");
        }
       `;
  }
  return css`
    ${styles}
  `;
}
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
      ${InfoSeats}, ${InfoDetail}, ${InfoMore} {
        opacity: 1;
      }
    }
  }
  &:nth-child(2) ${Thumb} {
    background-image: url(${BgNetflix});
  }
  &:nth-child(3) ${Thumb} {
    background-image: url(${BgTrello});
  }
  &:nth-child(4) ${Thumb} {
    background-image: url(${BgContact});
  }
`;
// ${createcss()};
function Header() {
  return (
    <NavList>
      <Nav>
        <Thumb />
        <Info>
          <InfoTitle>암호화폐 시세 트래커</InfoTitle>
          <InfoSubTitle>Coin price tracker</InfoSubTitle>
          <InfoSeats>seats remaining: 2</InfoSeats>
          <InfoDetail>
            Join us for our Live Infinity Session in beautiful New York City.
            This is a 3 day intensive workshop where you'll learn how to become
            a better version of...
          </InfoDetail>
          <InfoMore>
            <Link to={`${process.env.PUBLIC_URL}/coins`}>Coins</Link>
          </InfoMore>
        </Info>
      </Nav>
      <Nav>
        <Thumb />
        <Info>
          <InfoTitle>넷플릭스 클론</InfoTitle>
          <InfoSubTitle>Netflix clone</InfoSubTitle>
          <InfoSeats>seats remaining: 7</InfoSeats>
          <InfoDetail>
            Join us for our Live Infinity Session in beautiful New York City.
            This is a 3 day intensive workshop where you'll learn how to become
            a better version of...
          </InfoDetail>
          <InfoMore>
            <Link to={`${process.env.PUBLIC_URL}/movies`}>Movies</Link>
          </InfoMore>
        </Info>
      </Nav>
      <Nav>
        <Thumb />
        <Info>
          <InfoTitle>트렐로 클론</InfoTitle>
          <InfoSubTitle>Trello clone</InfoSubTitle>
          <InfoSeats>seats remaining: 3</InfoSeats>
          <InfoDetail>
            Join us for our Live Infinity Session in beautiful New York City.
            This is a 3 day intensive workshop where you'll learn how to become
            a better version of...
          </InfoDetail>
          <InfoMore>
            <Link to={`${process.env.PUBLIC_URL}/trello`}>Trello</Link>
          </InfoMore>
        </Info>
      </Nav>
      <Nav>
        <Thumb />
        <Info>
          <InfoTitle>Contact</InfoTitle>
          <InfoSeats> Contact our sales team</InfoSeats>
          <InfoDetail>
            If you’d like to know more about my work or process feel free to get
            in touch. I work from my studio in East London and manage all my
            projects directly with my clients.
          </InfoDetail>
          <InfoMore>
            <Link to={`${process.env.PUBLIC_URL}/contact`}>Contact</Link>
          </InfoMore>
        </Info>
      </Nav>
    </NavList>
  );
}
export default Header;
