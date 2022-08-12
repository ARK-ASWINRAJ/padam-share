import Head from "next/head";

import Navbar from "../components/Navbar";
import Uploader from "../components/Uploader";

const event = () => {
  return (
    <>
      <Head>
        <title>Events</title>
      </Head>
      <Navbar />
      <div className="text-center">
        <h1 className="text-2xl text-gray-400">Events</h1>
        <h1 className="text-4xl text-gray-700">Event name</h1>
      </div>
      <div className="max-w-[760px] items center mx-auto">
        <Uploader />
      </div>
    </>
  );
};

export default event;
