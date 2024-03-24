"use client";
import { Footer } from "./components/Footer";
import { useState, useEffect } from "react";
import Image from "next/image";
import { Header } from "./components/Header";
import { SettleSection } from "./components/SettleSection";

export enum Chain {
  AVAIL = "Avail",
  EIGENLAYER = "EigenLayer",
  CELESTIA = "Celestia",
}

export default function Home() {
  const [data, setData] = useState<string>("");
  const [selectedTab, setSelectedTab] = useState<Chain>(Chain.AVAIL);
  const [response, setResponse] = useState<string>("");
  const [pending, setPending] = useState<boolean>(true);
  const [verifyResponse, setVerifyResponse] = useState<string>("");
  const [jobId, setJobId] = useState<string>("");

  const onSettle = async (data: string, chain: string) => {
    const res = await fetch("/api/settle", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ data, chain }),
    });
    const json = await res.json();
    setResponse(json);
    setVerifyResponse("");
    setPending(true);
    setJobId("");
  };

  return (
    <main className="w-screen h-screen flex flex-col px-20 pt-12 pb-6 gap-12">
      <Header />
      <div className="flex gap-10 h-full overflow-hidden">
        <SettleSection
          data={data}
          setData={setData}
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab}
          onSettle={onSettle}
        />
      </div>
      <Footer text="🖖 Build long and prosper">
        <Image
          src="https://assets.stackrlabs.xyz/light.svg"
          alt="Stackr Logo"
          width={150}
          height={150}
        />
      </Footer>
    </main>
  );
}
