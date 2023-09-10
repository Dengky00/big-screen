import "./home.scss";
import local from "../assets/local.svg";
import { useEffect, useState } from "react";

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
        <section className="section1"></section>
        <section className="section2"></section>
        <section className="section3"></section>
        <section className="section4"></section>
        <section className="section5"></section>
      </main>
    </div>
  );
};