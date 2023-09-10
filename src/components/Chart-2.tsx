import { useEffect, useRef } from "react";
import * as echarts from "echarts";
import { createEchartsOptions } from "../shared/create-echarts-options";
import { EChartsType } from "echarts";

export const Chart2 = () => {
  const divRef = useRef(null);
  let myChart: EChartsType;
  const setEchart = (data: any) => {
    myChart.setOption(
      createEchartsOptions({
        xAxis: {
          type: "value",
          boundaryGap: [0, 0.01],
          splitLine: { show: false },
          axisLabel: { show: false },
        },
        yAxis: {
          type: "category",
          axisTick: { show: false },
          data: data.map((i: any) => i.name),
          axisLabel: {
            formatter(val: string) {
              return val.replace("公安局", "\n公安局");
            },
          },
        },
        series: [
          {
            name: "2022年",
            type: "bar",
            data: data.map((i: any) => i[2022]),
            itemStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                  {
                    offset: 0,
                    color: "#2034F9",
                  },
                  {
                    offset: 1,
                    color: "#04a1FF",
                  },
                ]),
              },
            },
          },
          {
            name: "2023年",
            type: "bar",
            data: data.map((i: any) => i[2023]),
            itemStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                  {
                    offset: 0,
                    color: "#B92AE8",
                  },
                  {
                    offset: 1,
                    color: "#6773E7",
                  },
                ]),
              },
            },
          },
        ],
      })
    );
  };

  const data = [
    { name: "崇川区公安局", 2022: 1, 2023: 2 },
    { name: "通州区公安局", 2022: 3, 2023: 4 },
    { name: "海门区公安局", 2022: 5, 2023: 3 },
    { name: "海安市公安局", 2022: 2, 2023: 1 },
    { name: "启东市公安局", 2022: 6, 2023: 6 },
    { name: "如皋市公安局", 2022: 4, 2023: 7 },
    { name: "如东县公安局", 2022: 7, 2023: 5 },
  ];
  useEffect(() => {
    myChart = echarts.init(divRef.current);
    setEchart(data);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      const newData = [
        {
          name: "崇川区公安局",
          2022: Math.floor(Math.random() * 7) + 1,
          2023: Math.floor(Math.random() * 7) + 1,
        },
        {
          name: "通州区公安局",
          2022: Math.floor(Math.random() * 7) + 1,
          2023: Math.floor(Math.random() * 7) + 1,
        },
        {
          name: "海门区公安局",
          2022: Math.floor(Math.random() * 7) + 1,
          2023: Math.floor(Math.random() * 7) + 1,
        },
        {
          name: "海安市公安局",
          2022: Math.floor(Math.random() * 7) + 1,
          2023: Math.floor(Math.random() * 7) + 1,
        },
        {
          name: "启东市公安局",
          2022: Math.floor(Math.random() * 7) + 1,
          2023: Math.floor(Math.random() * 7) + 1,
        },
        {
          name: "如皋市公安局",
          2022: Math.floor(Math.random() * 7) + 1,
          2023: Math.floor(Math.random() * 7) + 1,
        },
        {
          name: "如东县公安局",
          2022: Math.floor(Math.random() * 7) + 1,
          2023: Math.floor(Math.random() * 7) + 1,
        },
      ];
      setEchart(newData);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bordered 破获排名">
      <h2>案件破获排名</h2>
      <div ref={divRef} className="chart" />
      <div className="legend">
        <span className="first" /> 今年
        <span className="second" /> 去年
      </div>
    </div>
  );
};
