import { useEffect, useRef } from "react";
import * as echarts from "echarts";
import { createEchartsOptions } from "../shared/create-echarts-options";
import china from "../geo/china.json";

export const Chart6 = () => {
  const divRef = useRef(null);
  const colors = { 江苏省: "#BB31F7", 安徽省: "#15B8FD", 山东省: "#06E1EE" };
  useEffect(() => {
    var myChart = echarts.init(divRef.current);
    // @ts-ignore
    echarts.registerMap("CN", china);
    myChart.setOption(
      createEchartsOptions({
        xAxis: { show: false },
        yAxis: { show: false },
        series: [
          {
            type: "map",
            mapType: "CN", // 自定义扩展图表类型
            data: [{ name: "安徽省", value: 1 }],
            label: { show: false, color: "white" },
            itemStyle: {
              areaColor: "#010D3D",
              color: colors["安徽省"],
              borderColor: "#01A7F7",
              emphasis: {
                label: { color: "white" },
                areaColor: "#5470C6",
              },
            },
          },
          {
            type: "map",
            mapType: "CN", // 自定义扩展图表类型
            data: [{ name: "山东省", value: 100 }],
            itemStyle: {
              areaColor: "#010D3D",
              color: colors["山东省"],
              borderColor: "yellow",
              emphasis: {
                label: { color: "white" },
                areaColor: "#5470C6",
              },
            },
          },
          {
            type: "map",
            mapType: "CN", // 自定义扩展图表类型
            data: [{ name: "江苏省", value: 100 }],
            itemStyle: {
              areaColor: "#010D3D",
              color: colors["江苏省"],
              borderColor: "#01A7F7",
              emphasis: {
                label: { color: "white" },
                areaColor: "#5470C6",
              },
            },
          },
        ],
      })
    );
  }, []);

  return (
    <div className="bordered 籍贯">
      <h2>全市犯罪人员籍贯分布地</h2>
      <div className="wrapper">
        <div ref={divRef} className="chart" />
        <div className="legend bordered">
          <span className="icon" style={{ background: colors["安徽省"] }} />
          安徽籍
          <span className="icon" style={{ background: colors["山东省"] }} />
          山东籍
          <span className="icon" style={{ background: colors["江苏省"] }} />
          江苏籍
        </div>
        <div className="notes">此地图仅显示了中国的部分区域</div>
      </div>
    </div>
  );
};
