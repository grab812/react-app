import { useQuery } from "react-query";
import { useOutletContext } from "react-router";
import { fetchCoinHistory } from "../../api";
import ApexChart from "react-apexcharts";
import Loading from "../../components/Loading";
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
interface chartProps {
  coinId: string;
}
function Chart() {
  const { coinId } = useOutletContext<chartProps>();
  const { isLoading, data } = useQuery<IHistorical[]>(["ohlcv", coinId], () =>
    fetchCoinHistory(coinId)
  );
  console.log(isLoading, data);
  return (
    <div>
      <ApexChart
        options={{
          chart: {
            width: 500,
            height: 500,
          },
        }}
        series={[
          {
            name: "series-1",
            data: [30, 40, 45, 50, 49, 60, 70, 91],
          },
          {
            name: "series-2",
            data: [50, 5, 24, 50, 23, 60, 14, 120],
          },
        ]}
        type="line"
      />
    </div>
  );
}
export default Chart;
