import styled from "styled-components";
// 테마모드버튼
interface IModeBtn {
  $top?: string;
  $left?: string;
  $width?: string;
  $height?: string;
}
export const ModeBtn = styled.button<IModeBtn>`
  position: fixed;
  border-radius: 100px;
  border: 2px solid ${(props) => props.theme.accentColor};
  background-color: ${(props) => props.theme.accentColor};

  top: ${(props) => props.$top ?? "0"};
  left: ${(props) => props.$left ?? "0"};
  width: ${(props) => props.$width ?? "initial"};
  height: ${(props) => props.$height ?? "initial"};
  svg {
    color: ${(props) => props.theme.bgColor.accent};
  }
`;
// 뒤로가기버튼
export const BackBtn = styled.button`
  width: 30px;
  height: 30px;
  position: absolute;
  top: 50%;
  left: 0;
  transform: translate(0, -50%);
  border-radius: 50%;
  border: ${(props) => props.theme.accentColor} 1px solid;
  background: ${(props) => props.theme.bgColor.accent};
  overflow: hidden;
  transition: background 0.3s ease;
  &:hover {
    background: ${(props) => props.theme.accentColor};
    svg {
      color: ${(props) => props.theme.bgColor.accent};
    }
  }
  svg {
    color: ${(props) => props.theme.accentColor};
  }
`;
// Coins.tsx 컴포넌트
export const Container = styled.div`
  padding: 0px 20px;
  max-width: 480px;
  margin: 0 auto;
`;
export const Header = styled.header`
  position: relative;
  height: 15vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Title = styled.h1`
  font-size: 48px;
  color: ${(props) => props.theme.accentColor};
`;
export const CoinList = styled.ul``;
export const Coin = styled.li`
  position: relative;
  margin-bottom: 10px;
  background-color: ${(props) => props.theme.bgColor.card};
  color: ${(props) => props.theme.textColor};
  border: 1px solid white;
  border-radius: 10px;
  opacity: 0.5;
  transform: translate3d(0, 50px, 0);
  transition: transform 1s ease-in;
  &.show {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
  a {
    display: flex;
    align-items: center;
    padding: 20px;
    transition: color 0.2s ease-in;
    i {
      display: inline-block;
    }
  }
  &:hover {
    a {
      color: ${(props) => props.theme.accentColor};
    }
    i {
      animation: bounce 0.7s infinite;
    }
  }
  @keyframes bounce {
    from {
      transform: translate3d(0, 0, 0);
    }
    to {
      transform: translate3d(7px, 0, 0);
    }
  }
`;
export const CoinImg = styled.img`
  width: 35px;
  height: 35px;
  margin-right: 10px;
`;
// CoinDetail.tsx 컴포넌트
export const Tabs = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin: 25px 0px;
  gap: 10px;
`;

export const Tab = styled.span<{ isActive: boolean }>`
  text-align: center;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: 400;
  background-color: ${(props) => props.theme.bgColor.detail};
  padding: 7px 0px;
  border-radius: 10px;
  color: ${(props) =>
    props.isActive ? props.theme.accentColor : props.theme.textColor};
  a {
    display: block;
  }
`;
export const Overview = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: ${(props) => props.theme.bgColor.detail};
  padding: 10px 20px;
  border-radius: 10px;
`;
export const OverviewItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  span:first-child {
    font-size: 10px;
    font-weight: 400;
    text-transform: uppercase;
    margin-bottom: 5px;
  }
`;
export const Description = styled.p`
  margin: 20px 0px;
`;
