"use client";
import { Footer } from "./components/Footer";
import Image from "next/image";
import { Header } from "./components/Header";

export default function Home() {
  return (
    <main className="w-screen h-screen flex flex-col px-20 pt-12 pb-6 gap-12">
      <Header />
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
