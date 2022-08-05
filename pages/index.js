import Head from "next/head";
import Image from "next/image";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <>
      <Head>
        <title>Padam Share</title>
      </Head>
      <Navbar />
      <div className="items-center text-center">
        <h1 className="text-8xl text-transparent bg-clip-text mx-auto max-w-[650px] bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 md:mt-64 mt-32 font-bold ">
          Padam Share
        </h1>
        <p className="text-4xl mx-auto max-w-[400px] mt-8 font-semibold ">
          Is Online
        </p>
      </div>
    </>
  );
}
