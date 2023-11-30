import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useQuery } from "react-query";
import { fetchCoins } from "../../api";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faHouse } from "@fortawesome/free-solid-svg-icons";
import Loading from "../../components/Loading";
import {
  HomeBtn,
  BackBtn,
  Container,
  Header,
  Title,
} from "../../components/Common";
import { CoinList, Coin, CoinImg } from "../../components/Coin";

interface ICoin {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  is_new: boolean;
  is_active: boolean;
  type: string;
}

function Coins() {
  // const [loading, setLoading]= useState(true);
  // const [coins, setCoins] = useState<CoinsInterface[]>([]);
  // useEffect(()=>{
  //     setLoading(false)
  // },[])
  const { isLoading, data } = useQuery<ICoin[]>("allCoins", fetchCoins);
  const navigate = useNavigate();
  return (
    <Container>
      <Helmet>
        <title>코인</title>
      </Helmet>
      <HomeBtn
        onClick={() => {
          navigate(`${process.env.PUBLIC_URL}`);
        }}
      >
        <FontAwesomeIcon icon={faHouse} />
      </HomeBtn>
      <Header>
        <Title>코인</Title>
        <BackBtn onClick={() => navigate(-1)}>
          <FontAwesomeIcon icon={faArrowLeft} />
        </BackBtn>
      </Header>
      {isLoading ? (
        <Loading />
      ) : (
        <CoinList>
          {data?.slice(0, 100)?.map((coin) => (
            <Coin key={coin.id} className={isLoading ? "" : "show"}>
              <Link to={`${coin.id}`} state={coin}>
                <CoinImg
                  src={`https://coinicons-api.vercel.app/api/icon/${coin.symbol.toLowerCase()}`}
                  alt={coin.name}
                />
                {coin.name} <i>&rarr;</i>
              </Link>
            </Coin>
          ))}
        </CoinList>
      )}
    </Container>
  );
}
export default Coins;
