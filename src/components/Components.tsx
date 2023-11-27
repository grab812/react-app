import styled from "styled-components";
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
    color: ${(props) => props.theme.accentBgColor};
  }
`;

export const BackBtn = styled.button`
  width: 30px;
  height: 30px;
  position: absolute;
  top: 50%;
  left: 0;
  transform: translate(0, -50%);
  border-radius: 50%;
  border: ${(props) => props.theme.accentColor} 1px solid;
  background: ${(props) => props.theme.accentBgColor};
  overflow: hidden;
  transition: background 0.3s ease;
  &:hover {
    background: ${(props) => props.theme.accentColor};
    svg {
      color: ${(props) => props.theme.accentBgColor};
    }
  }
  svg {
    color: ${(props) => props.theme.accentColor};
  }
`;
