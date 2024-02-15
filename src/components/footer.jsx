import React from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
export default function Footer() {
  return (
    <div className="bg-blue-500 text-white py-4">
      <div className="container mx-auto text-center">
        <p className="text-sm sm:text-base">
          koya shop &copy; {new Date().getFullYear()}
        </p>
      </div>
      <div className="flex justify-center mb-2">
        <p>developed by: Hema DO</p>
      </div>
      <div className=" flex justify-center ">
        <a href="https://github.com/hemadlawar">
          <AiFillGithub />
        </a>
        <a
          className="ml-2"
          href="https://www.linkedin.com/in/hema-dlawar-020218292/"
        >
          <AiFillLinkedin className="" />
        </a>
      </div>
    </div>
  );
}
