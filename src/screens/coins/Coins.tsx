import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Loading from "../../components/Loading";

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
const CoinList = styled.ul`
`
const Coin = styled.li`
    position: relative;
    margin-bottom: 10px;
    background-color: white;
    color: ${(props) => props.theme.bgColor};
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
interface CoinsInterface {
    id: string;
    name: string;
    symbol: string;
    rank: number;
    is_new: boolean;
    is_active: boolean;
    type: string;
}
function Coins(){
    const [loading, setLoading]= useState(true);
    const [coins, setCoins] = useState<CoinsInterface[]>([]);
    const getCoins = ()=>{
        fetch(`https://api.coinpaprika.com/v1/coins`)
        .then((Response)=>Response.json())
        .then((json)=> setCoins(json.slice(0,100)))
    };
    useEffect(()=>{
        getCoins();
        setLoading(false)
    },[])
    console.log(coins)
    return(
        <Container>
            <Header>
                <Title>코인</Title>
            </Header>
            {loading? (<Loading/>): (
                <CoinList>
                    {coins.map((coin) => (
                        <Coin key={coin.id} className={loading? "":"show"}>
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