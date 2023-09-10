import "./home.scss";
import local from "../assets/local.svg";
import { useEffect, useRef, useState } from "react";
import * as echarts from "echarts";

export const Home = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  useEffect(() => {
    // 定义一个定时器，每秒更新时间
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    // 组件卸载时清除定时器
    return () => clearInterval(timer);
  }, []);
  // 将时间格式化为字符串
  const formatTime = (time: Date) => {
    const year = time.getFullYear();
    const month = ("0" + (time.getMonth() + 1)).slice(-2);
    const date = ("0" + time.getDate()).slice(-2);
    const hours = ("0" + time.getHours()).slice(-2);
    const minutes = ("0" + time.getMinutes()).slice(-2);
    const seconds = ("0" + time.getSeconds()).slice(-2);
    return `${year}年${month}月${date}日 ${hours}:${minutes}:${seconds}`;
  };

  //Echarts数据
  const divRef = useRef(null);
  const px = (n: number) => (n / 2420) * (window as any).pageWidth;
  useEffect(() => {
    var myChart = echarts.init(divRef.current);
    myChart.setOption({
      textStyle: {
        fontSize: px(12),
        color: "#79839E",
      },
      title: { show: false },
      legend: { show: false },
      xAxis: {
        data: [
          "兰州新区",
          "兰州新区",
          "兰州新区",
          "兰州新区",
          "兰州新区",
          "兰州新区",
          "兰州新区",
          "兰州新区",
          "兰州新区",
        ],
        axisTick: { show: false },
        axisLine: {
          lineStyle: { color: "#083B70" },
        },
        axisLabel: {
          fontSize: px(12),
          formatter(val:string) {
            if (val.length > 2) {
              const array = val.split("");
              array.splice(2, 0, "\n");
              return array.join("");
            } else {
              return val;
            }
          },
        },
      },
      grid: {
        x: px(40),
        y: px(40),
        x2: px(40),
        y2: px(40),
      },
      yAxis: {
        splitLine: { show: false },
        axisLine: {
          show: true,
          lineStyle: { color: "#083B70" },
        },
        axisLabel: {
          fontSize: px(12),
        },
      },
      series: [
        {
          type: "bar",
          data: [10, 20, 36, 41, 15, 26, 37, 18, 29],
        },
      ],
    });
  }, []);

  return (
    <div className="home">
      <header>
        <div className="date">{formatTime(currentTime)}</div>
        <div className="title">国家公共安全数据可视化平台</div>
        <div className="city">
          <img className="local" src={local} />
          南通市
        </div>
      </header>
      <main>
        <section className="bordered section1">
          <div className="管辖统计">
            <h2>案发派出所管辖统计</h2>
            <div ref={divRef} className="chart"></div>
          </div>
        </section>
        <section className="bordered section2"></section>
        <section className="bordered section3"></section>
        <section className="bordered section4"></section>
        <section className="bordered section5"></section>
      </main>
    </div>
  );
};
