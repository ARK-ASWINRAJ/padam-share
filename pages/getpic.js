import Head from "next/head";
import Image from "next/image";
import Form from "../components/Form";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <>
      <Head>
        <title>Get Padam</title>
      </Head>
      <Navbar />
      <div className="items-center text-center">
        <h1 className="text-4xl text-transparent bg-clip-text mx-auto max-w-[750px] bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 md:mt-16 mt-8 font-bold ">
          Get your Padams
        </h1>
        <p className="text-lg mx-auto max-w-[400px] mt-8 font-semibold ">
          Get your padams for the event event-name.
        </p>
      </div>
      <div className="max-w-[760px] items center mx-auto">
        <Form />
      </div>
    </>
  );
}
