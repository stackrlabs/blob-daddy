"use client";
import { useState, useEffect } from "react";
import { Footer } from "./components/Footer";
import { ResponseSection } from "./components/ResponseSection";
import { SettleSection } from "./components/SettleSection";
import Image from "next/image";
import { VerifySection } from "./components/VerifySection";
import { Header } from "./components/Header";
import { Chain } from "./constants";

export default function Home() {
  const [selectedTab, setSelectedTab] = useState<Chain>(Chain.AVAIL);
  const [response, setResponse] = useState<string>("");
  const [verifyResponse, setVerifyResponse] = useState<string>("");
  const [pending, setPending] = useState<boolean>(true);
  const [data, setData] = useState<string>("");
  const [jobId, setJobId] = useState<string>("");
  const [autoRefresh, setAutoRefresh] = useState<boolean>(false);
  const [explorerLink, setExplorerLink] = useState<string>("");

  useEffect(() => {
    setVerifyResponse("");
    setPending(true);
    setExplorerLink("");
  }, [jobId]);

  const onSettle = async (data: string, chain: string) => {
    const res = await fetch("/api/settle", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ data, chain }),
    });
    const responseJson = await res.json();
    setResponse(responseJson);
    setVerifyResponse("");
    setPending(true);
    setJobId(responseJson.jobID);
  };

  const onVerify = async (jobId: string) => {
    const res = await fetch("/api/verify", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ jobId }),
    });
    const responseJson = await res.json();
    setPending(responseJson.status === "pending");
    setVerifyResponse(responseJson);
    if (responseJson.link) {
      setAutoRefresh(false);
      setExplorerLink(responseJson.link);
    }
  };

  useEffect(() => {
    const loopCall = async () => {
      await onVerify(jobId);
    };

    const intervalId = setInterval(() => {
      if (jobId != "" && autoRefresh && pending) {
        loopCall();
      }
    }, 5000);

    return () => clearInterval(intervalId);
  }, [jobId, autoRefresh, pending]);

  return (
    <main className="w-screen h-screen flex flex-col px-20 pt-12 pb-6 gap-10">
      <Header />
      <div className="flex gap-10 h-full overflow-hidden">
        <SettleSection
          data={data}
          setData={setData}
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab}
          onSettle={onSettle}
        />
        <ResponseSection response={response} />
        <VerifySection
          jobId={jobId}
          setJobId={setJobId}
          verifyResponse={verifyResponse}
          onVerify={onVerify}
          autoRefresh={autoRefresh}
          setAutoRefresh={setAutoRefresh}
          pending={pending}
          explorerLink={explorerLink}
        />
      </div>
      <Footer>
        <span className="text-fg-primary text-lg">Built with ❤️ by</span>
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
