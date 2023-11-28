import { useQuery } from "react-query";
import { Helmet } from "react-helmet-async";
import { useOutletContext } from "react-router";
import { fetchCoinHistory } from "../../api";
import ApexChart from "react-apexcharts";
import { useTheme } from "styled-components";
import {useRecoilValue} from "recoil";
import { isDarkAtom } from "../../atoms";
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
  const theme = useTheme();
  const isDark = useRecoilValue(isDarkAtom);
  const { coinId } = useOutletContext<chartProps>();
  const { isLoading, data } = useQuery<IHistorical[]>(
    ["ohlcv", coinId],
    () => fetchCoinHistory(coinId),
    {
      refetchInterval: 10000,
    }
  );
  const dataTimeCloseMs = data?.map((coinEle) =>
    new Date(parseFloat(coinEle.time_open) * 1000).toUTCString()
  );
  const dataPriceCandleStick = data?.map((coinEle) => ({
    x: new Date(parseFloat(coinEle.time_open) * 1000).toUTCString(),
    y: [
      Number(coinEle.open),
      Number(coinEle.high),
      Number(coinEle.low),
      Number(coinEle.close),
    ],
  }));
  console.log(dataTimeCloseMs);
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
  //
  return (
    <>
      <Helmet>
        <title>{coinId} Chart</title>
      </Helmet>
      <ApexChart
        type="candlestick"
        series={[{ data: dataPriceCandleStick! }]}
        options={{
          chart: {
            type: "candlestick",
            height: 350,
            toolbar: {
              show: false,
            },
            background: "transparent",
          },
          grid: {
            borderColor: theme.textColor,
            row: {
              colors: ["rgb(156,136,255,.2)", "transparent"],
              opacity: 0.5,
            },
          },
          title: {
            text: `OHLC ${coinId} CandleStick Chart`,
            align: "center",
            style: {
              fontWeight: 500,
              color: theme.textColor,
            },
          },
          xaxis: {
            type: "datetime",
            labels: {
              style: {
                colors: [theme.textColor, theme.bgColor.main],
              },
            },
          },
          yaxis: {
            tooltip: {
              enabled: true,
            },
            labels: {
              style: {
                colors: [theme.textColor, theme.bgColor.main],
              },
            },
          },
          theme: {
            mode: "light",
            palette: "palette5",
            monochrome: {
              enabled: false,
              color: "#255aee",
              shadeTo: "light",
              shadeIntensity: 0.65,
            },
          },
        }}
      />
      <ApexChart
        options={{
          chart: {
            width: 500,
            height: 300,
            type: "area",
            toolbar: {
              show: false,
            },
            background: "transparent",
          },
          theme: {
            mode: isDark?"dark":"light",
            palette: "palette5",
            monochrome: {
              enabled: false,
              color: "#255aee",
              shadeTo: "light",
              shadeIntensity: 0.65,
            },
          },
          dataLabels: {
            enabled: false,
          },
          stroke: {
            curve: "smooth",
            width: 3,
          },
          grid: {
            borderColor: theme.textColor,
            row: {
              colors: ["rgb(156,136,255,.2)", "transparent"],
              opacity: 0.5,
            },
          },
          title: {
            text: `OHLC ${coinId} Line Chart`,
            align: "center",
            style: {
              fontWeight: 500,
              color: theme.textColor,
            },
          },
          yaxis: {
            show: true,
            labels: {
              style: {
                colors: theme.textColor,
              },
            },
          },
          xaxis: {
            axisBorder: { show: false },
            axisTicks: { show: false },
            type: "datetime",
            labels: {
              show: false,
              datetimeFormatter: { month: "mmm 'yy" },
              style: {
                colors: theme.textColor,
              },
            },
            categories: data?.map((price) =>
              new Date(parseFloat(price.time_close) * 1000).toUTCString()
            ),
          },
          // fill: {
          //     type: "gradient",
          //     gradient: { gradientToColors: ["#ff5e57"], stops:[0,100]},
          // },
          // colors: ["#0be881"],
          tooltip: {
            y: {
              formatter: (value) => `$${value}`,
            },
            x: {
              format: "dd/MM/yy HH:mm",
            },
          },
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
    </>
  );
}
export default Chart;
