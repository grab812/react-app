import styled, { keyframes } from "styled-components";
// 홈버튼
const flow = keyframes`
  from {
    transform: translateY(-3px);
  }

  to {
    transform: translateY(3px);
  }
`;
export const HomeBtn = styled.button`
  display: block;
  position: fixed;
  right: 30px;
  bottom: 30px;
  width: 35px;
  height: 35px;
  border-radius: 100px;
  cursor: pointer;
  border: none;
  background: ${(props) => props.theme.accentColor};
  animation: ${flow} 1s linear infinite alternate;
  svg {
    color: ${(props) => props.theme.bgColor.accent};
  }
`;
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
  cursor: pointer;
  z-index: 1000000;
  svg {
    color: ${(props) => props.theme.bgColor.accent};
  }
`;
// 뒤로가기버튼
export const BackBtn = styled.button`
  cursor: pointer;
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
