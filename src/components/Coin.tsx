import styled, { keyframes } from "styled-components";
// Coins.tsx 컴포넌트
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
