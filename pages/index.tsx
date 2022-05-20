import type { NextPage } from "next";
import Head from "next/head";
// import {Head} from 'next/document'
import Image from "next/image";

// assets
import logo from "../public/assets/logo.png";

const Home: NextPage = () => {
  return (
    <div className="main">
      <Head>
        <title>FloQast</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/logo.png" />
      </Head>

      <div className="banner-container w-full h-screen bg-[#ebebeb]">
        <div className="w-full h-full bg-[url('../public/assets/bg.png')] bg-no-repeat bg-cover bg-center pt-44 pb-16 flex flex-col justify-between">
          <div className="tagline-container w-[55%] min-h-[230px]  py-10 px-32 flex justify-end gradient-white">
            <p className="text-textColor text-4xl font-medium italic leading-[1]">
              <div className="inline mr-4">
                <Image src={logo} height="80" width="318" objectFit="inherit" />
              </div>
              The <br />
              <span className="text-main text-[3.5rem]">
                Fastest, Most Accurate <br />
              </span>
              Way to Close Your Books!
            </p>
          </div>

          <div className="wrapper w-full">
            <div className="form-container mx-auto min-h-[156px] w-[70%] bg-white grid grid-cols-[30%_1fr]">
              <div className="form-web-left text-white bg-main flex flex-col justify-center items-center relative ">
                <p className="font-bold text-[2rem] leading-none">
                  SCHEDULE A DEMO
                </p>
                <p className="text-[1.4rem]">Learn More About FloQast</p>
              </div>

              <div className="form-web-right grid grid-rows-2">
                <div className="top w-full flex justify-center items-center">
                  <p className="text-textColor text-[1.7rem] font-semibold ">
                    Learn How FloQast Can{" "}
                    <span className="text-main">Improve Your Month-End</span>
                  </p>
                </div>
                <div className="bot flex gap-4 pl-16 pr-6">
                  <input
                    type="text"
                    placeholder="First Name*"
                    className="flex-1 px-4 border-[1px] border-gray-200 h-[70%]"
                  />
                  <input
                    type="text"
                    placeholder="Email*"
                    className="flex-1 px-4 border-[1px] border-gray-200 h-[70%]"
                  />
                  <button className="flex-1 rounded-lg bg-main border-2 border-[#749D40] text-white h-[80%]">
                    SCHEDULE NOW
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
