import React from "react";
import { useState } from "react";
import Image from "next/image";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Thank you ${name} for using PadamShare`);
  };
  return (
    <div className="items-center my-16 mx-auto border drop-shadow-lg p-8 ">
      <form
        className="flex flex-col  items-center space-x-6"
        onSubmit={handleSubmit}
      >
        <div className="shrink-0 ">
          {/* <Image
            className="h-16 w-16 object-cover rounded-full"
            src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1361&q=80"
            alt="Current profile photo"
            width={50}
            height={50}
          /> */}
        </div>
        <label className="block">
          <span className="block text font-medium text-slate-700">Name</span>

          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-4 block w-full px-3 py-2 w-[500px] bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500
    "
          />
        </label>
        <label className="block mt-6">
          <span className="block text font-medium text-slate-700">Email</span>

          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-4 block w-full px-3 py-2 w-[500px] bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500
    "
          />
        </label>

        <label className="block mt-6">
          <span className="block text font-medium text-slate-700">
            {"Upload a Selfie"}
          </span>
          <input
            type="file"
            className="mt-4 block w-[500px] text-sm text-slate-600
      file:mr-4 file:py-2 file:px-4
      file:rounded-full file:border file:border-violet-500
      file:text-sm file:font-semibold
      file:bg-violet-100 file:text-violet-800
      hover:file:bg-violet-200
    "
          />
        </label>
        <input
          type="submit"
          value={"Submit"}
          className=" text-lg border-2 rounded-lg  text-white bg-gradient-to-r from-fuchsia-600 to-pink-600 px-4 py-2 my-4 hover:shadow-lg w-[150px] h-[50px] font-semibold"
        />
      </form>
    </div>
  );
};

export default Form;
