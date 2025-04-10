import Head from "next/head";
import packageJson from "../package.json";
import { Hometitle } from "./components/hometitle";
import { Homebuttons} from "./components/homebuttons";

export default function Home(props) {
  /** You can access to liff and liffError object through the props.
   *  const { liff, liffError } = props;
   *  console.log(liff.getVersion());
   *
   *  Learn more about LIFF API documentation (https://developers.line.biz/en/reference/liff)
   **/
  return (
    <div>
      <Head>
        <title>About LIFF Starter</title>
      </Head>
      <div className="home">
      <Hometitle title="about page"/>
      <button onClick= {function() {alert(123);}}>ボタン</button>
        <div className="home__badges">
          <span className="home__badges__badge badge--primary">
            LIFF Starter
          </span>
          <span className="home__badges__badge badge--secondary">nextjs</span>
          <span className="home__badges__badge badge--primary">
            {packageJson.version}
          </span>
          <a
            href="https://github.com/line/line-liff-v2-starter"
            target="_blank"
            rel="noreferrer"
            className="home__badges__badge badge--secondary"
          >
            GitHub
          </a>
        </div>
      <Homebuttons />
      </div>
    </div>
  );
}
