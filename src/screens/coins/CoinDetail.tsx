import { useLocation, useParams } from "react-router-dom";
import styled from "styled-components";
import Loading from "../../components/Loading";
import { useState } from "react";
const Container = styled.div`
  padding: 0px 20px;
  max-width: 480px;
  margin: 0 auto;
`;
const Header = styled.header`
  height: 15vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Title = styled.h1`
  font-size: 48px;
  color: ${(props) => props.theme.accentColor};
`;
function CoinDetail(){
    const [loading, setLoading] = useState(true);
    const { coinId } = useParams();
    const { state } = useLocation();
    console.log('state', state);
    return (
        <Container>
            <Header>
                <Title>코인 {coinId}</Title>
            </Header>
            {loading? <Loading/>: null}
        </Container>
    );
}
export default CoinDetail;