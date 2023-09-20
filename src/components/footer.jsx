import React from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
export default function Footer() {
  return (
    <footer className="bg-blue-500 text-white py-4">
      <div className="container mx-auto text-center">
        <p className="text-sm sm:text-base">
          koya shop &copy; {new Date().getFullYear()}
        </p>
      </div>
      <div className="">
        <div>
          <AiFillGithub />
        </div>
        <div>
          <AiFillLinkedin />
        </div>
      </div>
    </footer>
  );
}
