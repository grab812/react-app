import { useQuery } from "react-query";
import { Helmet } from "react-helmet-async";
import { useOutletContext } from "react-router";
import { fetchCoinHistory } from "../../api";
import { Overview, OverviewItem } from "../../components/Components";

interface IHistorical {
  time_open: string;
  time_close: string;
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
  market_cap: number;
}
interface priceProps {
  coinId: string;
}
function Price() {
  const { coinId } = useOutletContext<priceProps>();
  const { isLoading, data } = useQuery<IHistorical[]>(
    ["ohlcv", coinId],
    () => fetchCoinHistory(coinId),
    {
      refetchInterval: 10000,
    }
  );
  console.log(
    data?.map((timeSet) =>
      new Date(parseFloat(timeSet.time_open) * 1000).toUTCString()
    )
  );
  if (!Array.isArray(data)) {
    return (
      <>
        <Helmet>
          <title>Loading {coinId} Chart</title>
        </Helmet>
        <p>
          {isLoading
            ? "로딩 중"
            : "가격 데이터가 없어서 차트를 불러올 수 없습니다."}
        </p>
      </>
    );
  }
  return (
    <>
      <Helmet>
        <title>{coinId} Price</title>
      </Helmet>
      <Overview>
        <OverviewItem>
          <span>open</span>
          <span>빈</span>
        </OverviewItem>
      </Overview>
    </>
  );
}
export default Price;
