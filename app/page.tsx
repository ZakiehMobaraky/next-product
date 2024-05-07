import Banner from "../component/banner/index";
import Link from "next/link";

const Home = () => {
  return (
    <div className=" container mx-auto my-8 ">
      <div>
        <h2 className="text-lg">next js 14 pro</h2>
        <ul>
          <li>
            <Link href="/about">go to about page</Link>
          </li>
        </ul>
      </div>
      <Banner />
    </div>
  );
};

export default Home;
