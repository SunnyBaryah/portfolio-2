import React, { forwardRef } from "react";
import SocialBtn from "./common/SocialBtn";
import { useInView } from "react-intersection-observer";
const Contact = forwardRef((props, ref) => {
  const [ref1, inView] = useInView({
    threshold: 0.1,
  });
  return (
    <div ref={ref} className="min-h-screen w-4/6 mx-auto ">
      <div
        ref={ref1}
        className={`transition-transform transform duration-500 ${
          inView ? "animate-popUp" : "opacity-0"
        } text-white flex flex-col items-center gap-20 py-10`}
      >
        <div className="flex flex-col items-center w-full">
          <h2 className="text-4xl xl:text-7xl pt-8 pb-2">Contact Me</h2>
          <p className="text-gray-400">WAYS TO REACH ME</p>
        </div>
        <div className=" w-full">
          <form
            className="flex flex-col items-center justify-center gap-10 w-full"
            action="https://formspree.io/f/xovargoo"
            method="POST"
          >
            <input
              className="w-full h-10 p-2 text-black"
              placeholder="Enter your name"
              type="text"
              name="name"
            />
            <input
              className="w-full h-10 p-2 text-black"
              placeholder="Enter your email"
              type="email"
              name="email"
            />

            <textarea
              className="w-full h-32 p-2 text-black"
              placeholder="Enter your message"
              name="message"
            ></textarea>

            <button
              className="bg-black text-blue-400 hover:text-white duration-150 px-5 py-3"
              type="submit"
            >
              Send
            </button>
          </form>
        </div>
        <div className="mt-10 w-full flex flex-col items-center justify-center gap-8">
          <h1 className="text-xl xl:text-4xl">Social Handles</h1>
          <div className="flex flex-wrap">
            <SocialBtn />
          </div>
        </div>
      </div>
    </div>
  );
});

export default Contact;
