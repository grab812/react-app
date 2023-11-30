import styled from "styled-components";
import GuideIcon from "../assets/empty.png";
import { HomeBtn } from "./Common";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
const GuideWarp = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;
const GuideTit = styled.h1`
  padding: 35px 0 20px;
  font-size: 2.5rem;
  font-weight: 300;
  letter-spacing: -2px;
  color: ${(props) => props.theme.grayColor};
`;
const GuideSub = styled.strong`
  color: ${(props) => props.theme.textColor};
`;

interface IGuideImg {
  $height?: string;
}
const GuideImg = styled.img<IGuideImg>`
  max-width: 350px;
  height: ${(props) => props.$height ?? "50px"};
  font-weight: 800;
  color: ${(props) => props.theme.accentColor};
`;
const GuideTxt = styled.p`
  padding-top: 20px;
  font-weight: 300;
  color: #e1e1e1;
  letter-spacing: -1px;
  line-height: 2;
  color: ${(props) => props.theme.grayColor};
`;
function Guide() {
  const navigate = useNavigate();
  return (
    <>
      <HomeBtn
        onClick={() => {
          navigate(`${process.env.PUBLIC_URL}`);
        }}
      >
        <FontAwesomeIcon icon={faHouse} />
      </HomeBtn>

      <GuideWarp>
        <GuideImg
          src="http://static.hostingcdn.net/images/webhosting/ppr-50.svg"
          alt="서비스준비중"
        />
        <GuideTit>
          현재 <GuideSub>페이지 준비중</GuideSub> 입니다.
        </GuideTit>
        <GuideImg $height="361px" src={`${GuideIcon}`} alt="서비스준비중" />
        <GuideTxt>
          방문해주셔서 감사합니다.
          <br />
          보다 나은 서비스 제공을 위하여 페이지를 준비중에 있습니다.
          <br />
          빠른 시일내에 준비하여 찾아뵙겠습니다.
        </GuideTxt>
      </GuideWarp>
    </>
  );
}
export default Guide;
