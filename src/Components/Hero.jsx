import React, { useEffect, useState } from "react";
import Herobg from "../assets/hero-img.png";
import axios from "axios";
function Hero() {
  const [data, setData] = useState(null);

  let URL =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=6&page=1&sparkline=false&locale=en";

  useEffect(() => {
    fetch(URL)
      .then((res) => res.json())
      .then((data) => setData(data));
    console.log(data);
  }, []);

  return (
    <>
      <main className="w-full h-full">
        <div className="max-w-[1100px] mx-auto mt-5 text-gray-900">
          <div className="flex flex-col">
            <p className="py-3 text-[1.2rem] font-sans font-semibold">
              Buy & Sell Crypto 24/7 using your retirement account
            </p>
            <h1 className="text-[66px] w-[640px] font-bold  leading-[4.7rem]">
              Invest in Cryptocurrency with Your IRA
            </h1>
            <p className="py-5 text-[1.2rem] font-sans font-semibold">
              Buy, Sell and stone hundreds of cryptocurrencies
            </p>
            <div className="flex flex-row ">
              <input
                type="text"
                className="flex items-center border border-gray-300 rounded-md px-4 py-2"
                placeholder="Enter Your Email"
              />
              <button className="ml-8 bg-green-700 rounded-tl-full rounded-br-full text-white text-md text-center self-center px-6 py-4 m-2">
                Learn More
              </button>
            </div>
          </div>
          <img
            src={Herobg}
            className="h-[370px] absolute right-20 top-44"
            alt="hero"
          />
        </div>
      </main>
    </>
  );
}

export default Hero;
