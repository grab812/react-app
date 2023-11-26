import { useEffect, useState } from "react";
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Loading from "../../components/Loading";
import { useQuery } from "react-query";
import { fetchCoins } from "../../api";

const Container = styled.div`
  padding: 0px 20px;
  max-width: 480px;
  margin: 0 auto;
`;
const Header = styled.header`
  position: relative;
  height: 15vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Title = styled.h1`
  font-size: 48px;
  color: ${(props) => props.theme.accentColor};
`;
const CoinList = styled.ul`
`
const Coin = styled.li`
    position: relative;
    margin-bottom: 10px;
    background-color: ${(props) => props.theme.cardBgColor};
    color: ${(props) => props.theme.textColor};
    border: 1px solid white;
    border-radius: 10px;
    opacity: .5;
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
            animation: bounce .7s infinite;
        }
    }
    @keyframes bounce {
        from { transform: translate3d(0, 0, 0); }
        to   { transform: translate3d(7px, 0, 0); }
    }
`
const Img = styled.img`
  width: 35px;
  height: 35px;
  margin-right: 10px;
`;
interface ICoin {
    id: string;
    name: string;
    symbol: string;
    rank: number;
    is_new: boolean;
    is_active: boolean;
    type: string;
}
const BackBtn = styled.button`
width:30px;
height:30px;
position: absolute;
top: 50%;
left: 0;
transform: translate(0, -50%);
border-radius:50%;
border: ${(props)=>props.theme.accentColor} 1px solid;
overflow:hidden;
transition:background 0.3s ease;
&.back{
  .arrow-wrap{
    left:-50%;
  }
}
&:hover{
  background: ${(props)=>props.theme.accentColor};
  .arrow-wrap{
    i{
      background:#fff;
    }
  }
}
.arrow-wrap{
  display:block;
  position:absolute;
  height:70%;
  width:70%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition:left 0.3s ease;
  i{
    height:1px;
    left:0;
    top:50%;
    background: ${(props)=>props.theme.accentColor};
    position:absolute;
    display:block;
    transition:background 0.3s ease;
  }
  .arrow-part-1{
    width:100%;
  }
  .arrow-part-2{
    width:60%;
    transform: rotate(-45deg);
    transform-origin: 0 0;
  }
  .arrow-part-3{
    width:60%;
    transform: rotate(45deg);
    transform-origin: 0 0;
  }
}
`
function Coins(){
    // const [loading, setLoading]= useState(true);
    // const [coins, setCoins] = useState<CoinsInterface[]>([]);
    // useEffect(()=>{
    //     setLoading(false)
    // },[])
    const {isLoading, data } = useQuery<ICoin[]>("allCoins", fetchCoins);
    const navigate = useNavigate();
    return(
        <Container>
            <HelmetProvider>
                <Helmet>
                    <title>코인</title>
                </Helmet>
            </HelmetProvider>
            <Header>
                <Title>코인</Title>
                <BackBtn onClick={() => navigate(-1)}>
                    <span className="arrow-wrap">
                        <i className="arrow-part-1"></i>
                        <i className="arrow-part-2"></i>
                        <i className="arrow-part-3"></i>
                    </span>
                </BackBtn>
            </Header>
            {isLoading? (<Loading/>): (
                <CoinList>
                    {data?.slice(0,100)?.map((coin) => (
                        <Coin key={coin.id} className={isLoading? "":"show"}>
                            <Link to={`${coin.id}`} state={coin}>
                                <Img src={`https://coinicons-api.vercel.app/api/icon/${coin.symbol.toLowerCase()}`} alt={coin.name}/>
                                {coin.name} <i>&rarr;</i>
                            </Link>
                        </Coin>
                    ))}
                </CoinList>
            )}
        </Container>
    )
}
export default Coins;