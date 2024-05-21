import Image from "next/image";
import styles from "./page.module.css";

// 환경변수로 설정된 https://sssssqew.github.io/next-tutorial 뒤에는 자동으로 /가 붙기 때문에 href 시작할때 슬래쉬는 제외함
export default function Home() {
  return (
    <div>
      <h1>홈 화면 $$$$$</h1>
      <ul>
        <li><a href='sub'>서브 홈</a></li>
        <li><a href='sub/about'>ABOUT</a></li>
        <li><a href='sub/1'>서브 상세 1</a></li>
        <li><a href='sub/2'>서브 상세 2</a></li>
        <li><a href='sub/fetch'>Hello API 접속</a></li>
      </ul>
    </div>
  );
}
