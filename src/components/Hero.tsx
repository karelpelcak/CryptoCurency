"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

interface IRes {
  bitcoin: string;
  ethereum: string;
  dogecoin: string;
  monero: string;
  litecoin: string;
}

const Hero = ({ selectedCryptos }: { selectedCryptos: string[] }) => {
  const [data, setData] = useState<IRes>();
  const socket = new WebSocket(
    "wss://ws.coincap.io/prices?assets=bitcoin,ethereum,dogecoin,monero,litecoin"
  );
  socket.addEventListener("open", (event) => {
    console.log("WebSocket connection opened:", event);
  });

  socket.addEventListener("message", (event) => {
    const resData: IRes = JSON.parse(event.data);
    setData((prevData) => ({
      ...prevData,
      ...resData,
    }));
  });

  socket.addEventListener("close", (event) => {
    console.log("WebSocket connection closed:", event);
  });

  socket.addEventListener("error", (event) => {
    console.error("WebSocket error:", event);
  });

  useEffect(() => {
    console.log("Selected Cryptos:", selectedCryptos);
  }, [selectedCryptos]);

  return (
    <div>
      {selectedCryptos.includes("bitcoin") && (
        <h1 className="text-4xl h-[75px] bg-[#F7931A] font-extrabold flex flex-row gap-4 content-center items-center">
          <Image src="/BTC.png" alt="BTC" width={50} height={50} />
          BTC {data?.bitcoin} $
        </h1>
      )}
      {selectedCryptos.includes("ethereum") && (
        <h1 className="text-4xl h-[75px] bg-[#3C3C3D] font-extrabold flex flex-row gap-4 content-center items-center">
          <Image src="/ETH.png" alt="ETH" width={40} height={40} />
          ETH {data?.ethereum} $
        </h1>
      )}
      {selectedCryptos.includes("dogecoin") && (
        <h1 className="text-4xl h-[75px] bg-[#C2A633] font-extrabold flex flex-row gap-4 content-center items-center">
          <Image src="/DOGE.png" alt="DOGE" width={50} height={50} />
          DOGE {data?.dogecoin} $
        </h1>
      )}
      {selectedCryptos.includes("monero") && (
        <h1 className="text-4xl h-[75px] bg-[#FF6600] font-extrabold flex flex-row gap-4 content-center items-center">
          <Image src="/MON.png" alt="MON" width={50} height={50} />
          MON {data?.monero} $
        </h1>
      )}
      {selectedCryptos.includes("litecoin") && (
        <h1 className="text-4xl h-[75px] bg-[#A6A9AA] font-extrabold flex flex-row gap-4 content-center items-center">
          <Image src="/LTC.png" alt="LTC" width={50} height={50} />
          LTC {data?.litecoin} $
        </h1>
      )}
    </div>
  );
};

export default Hero;
