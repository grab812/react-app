import { useQuery } from "react-query";
import { useOutletContext } from "react-router";
import { fetchCoinHistory } from "../../api";
import ApexChart from "react-apexcharts";
import Loading from "../../components/Loading";
import { useState } from "react";
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
  console.log(
    data?.map((price) => price.close) as number[],
    data?.map((price) => parseFloat(price.time_close)) as number[]
  );
  return (
    <div>
      <ApexChart
        options={{
          chart: {
            width: 500,
            height: 300,
            toolbar: {
              show: false,
            },
            background: "transparent",
          },
          theme: {
            mode: "dark",
            palette: "palette5",
            monochrome: {
              enabled: false,
              color: "#255aee",
              shadeTo: "light",
              shadeIntensity: 0.65,
            },
          },
          stroke: {
            curve: "smooth",
            width: 3,
          },
          grid: {
            row: {
              colors: undefined,
              opacity: 0.5,
            },
          },
          yaxis: {
            show: false,
          },
          xaxis: {
            axisBorder: { show: false },
            axisTicks: { show: false },
            labels: { show: false },
          },
        }}
        series={[
          {
            name: "Price",
            data: data?.map((price) => price.close) as number[],
          },
        ]}
        type="line"
      />
    </div>
  );
}
export default Chart;
