import "./home.scss";
import local from "../assets/local.svg";
import { useEffect, useState } from "react";
import { Chart1 } from "../components/Chart-1";
import { Chart2 } from "../components/Chart-2";
import { Chart3 } from "../components/Chart-3";
import { Chart4 } from "../components/Chart-4";
import { Chart5 } from "../components/Chart-5";
import { Chart6 } from "../components/Chart-6";
import { Chart7 } from "../components/Chart-7";
import { Chart8 } from "../components/Chart-8";
import { Chart9 } from "../components/Chart-9";
import { Chart10 } from "../components/Chart-10";
import { Chart11 } from "../components/Chart-11";
import { Chart12 } from "../components/Chart12";
import { Chart13 } from "../components/Chart13";
import { Chart14 } from "../components/Chart14";

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
        <section className="section1">
          <Chart1 />
          <Chart2 />
        </section>
        <section className="section2">
          <Chart3 />
          <Chart4 />
        </section>
        <section className="bordered section3">
          <Chart5 />
        </section>
        <section className="section4">
          <Chart6 />
          <div className="bordered 年龄段">
            <h2>犯罪人员年龄段分布</h2>
            <div className="charts">
              <Chart7 />
              <Chart8 />
              <Chart9 />
            </div>
          </div>
        </section>
        <section className="section5">
          <div className="bordered row1 案发类型">
            <h2>案发类型统计</h2>
            <div className="charts">
              <Chart10 />
              <Chart11 />
            </div>
          </div>
          <div className="bordered row2 案发街道">
            <h2>案发街道统计</h2>
            <div className="charts">
              <Chart12 />
              <Chart13 />
            </div>
          </div>
          <div className="bordered row3 作案手段">
            <h2>作案手段分析</h2>
            <Chart14 />
          </div>
        </section>
      </main>
      <footer>&copy; DKY 2020-{currentTime.getFullYear()}</footer>
    </div>
  );
};
