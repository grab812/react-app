import { useQuery } from "react-query";
import {Helmet} from "react-helmet";
import { useOutletContext } from "react-router";
import { fetchCoinHistory } from "../../api";
import ApexChart from "react-apexcharts";
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
  const { isLoading, data } = useQuery<IHistorical[]>(
    ["ohlcv", coinId], 
    () =>fetchCoinHistory(coinId),
    {
        refetchInterval: 10000,
    }
  );
  return (
    <div>
        <Helmet>
            <title>{coinId} Chart</title>
        </Helmet>
        <ApexChart
            options={{
            chart: {
                width: 500,
                height: 300,
                type: 'area',
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
            dataLabels: {
                enabled: false
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
                show: true,
            },
            xaxis: {
                axisBorder: { show: false },
                axisTicks: { show: false },
                type: "datetime",
                labels: { 
                    show: false,
                    datetimeFormatter: {month: "mmm 'yy"},
                },
                categories: data?.map((price) =>new Date(parseFloat(price.time_close) * 1000).toUTCString()),
            },
            // fill: {
            //     type: "gradient",
            //     gradient: { gradientToColors: ["#ff5e57"], stops:[0,100]},
            // },
            // colors: ["#0be881"],
            tooltip: {
                y:{
                    formatter: (value)=> `$${value}`
                },
                x: {
                format: 'dd/MM/yy HH:mm'
                },
            }
            }}
            series={[
            {
                name: "ClosePrice",
                data: data?.map((price) => price.close) as number[],
            },
            {
                name: "OpenPrice",
                data: data?.map((price) => price.open) as number[],
            },
            ]}
            type="line"
        />
    </div>
  );
}
export default Chart;
