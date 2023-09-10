import { useEffect, useRef } from "react";
import * as echarts from "echarts";
import { createEchartsOptions } from "../shared/create-echarts-options";
import { px } from "../shared/px";
import { EChartsType } from "echarts";

export const Chart4 = () => {
  const divRef = useRef(null);
  let myChart: EChartsType;
  let array = [
    0.75, 0.53, 0.31, 0.63, 0.44, 0.65, 0.26, 0.18, 0.21, 0.59, 0.77, 0.46,
    0.35,
  ];

  const setEchart = (array: number[]) => {
    myChart.setOption(
      createEchartsOptions({
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24],
          splitLine: { show: true, lineStyle: { color: "#073E78" } },
          axisTick: { show: false },
          axisLine: { show: false },
        },
        yAxis: {
          type: "value",
          splitLine: { lineStyle: { color: "#073E78" } },
          axisLabel: {
            formatter(val: number) {
              return val * 100 + "%";
            },
          },
        },
        series: [
          {
            type: "line",
            data: array,
            symbol: "circle",
            symbolSize: px(12),
            lineStyle: { width: px(2) },
            areaStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: "#414a9f",
                },
                {
                  offset: 1,
                  color: "#1b1d52",
                },
              ]),
            },
          },
        ],
      })
    );
  };
  useEffect(() => {
    myChart = echarts.init(divRef.current);
    setEchart(array);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      let newArray = [0.78];
      for (let i = 0; i < 12; i++) {
        newArray.push(Math.round(Math.random() * 80) / 100);
      }
      setEchart(newArray);
    }, 3000);
  }, []);

  return (
    <div className="bordered 案发时段">
      <h2>案发时段分析</h2>
      <div ref={divRef} className="chart" />
    </div>
  );
};
