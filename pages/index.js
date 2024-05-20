import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div>
      <h1>홈페이지</h1>
      <ul>
        <li><a href="/sub">서브 홈</a></li>
        <li><a href="/sub/about">ABOUT</a></li>
        <li><a href="/sub/1">서브 상세 1</a></li>
        <li><a href="/sub/2">서브 상세 2</a></li>
        <li><a href="/sub/fetch">Hello API 접속</a></li>
      </ul>
    </div>
  );
}
