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
        <h1 className="text-8xl text-transparent bg-clip-text mx-auto max-w-[650px] bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 md:mt-32 mt-16 font-bold ">
          Padam Share
        </h1>
        <p className="text-4xl mx-auto max-w-[400px] mt-8 font-semibold font-extralight">
          Your Pics Handpicked
        </p>
      </div>
      <div className="mt-16 ">
        <div className="flex max-w-[500px] mx-auto w-full justify-between ">
          <button className=" text-xl border-2 rounded  text-white bg-gradient-to-r from-fuchsia-600 to-pink-600 px-4 py-2 mb-4 hover:shadow-lg w-[200px] h-[80px] font-semibold">
            {"Get Pics"}
          </button>
          <button className=" text-xl border-2 rounded  text-white bg-gradient-to-r from-fuchsia-600 to-pink-600 px-4 py-2 mb-4 hover:shadow-lg w-[200px] h-[80px] font-semibold">
            {"Upload Pics"}
          </button>
        </div>
      </div>
    </>
  );
}
