import React from "react";
import bakerypic from "../pictures/Bakery.png";
import fruitpic from "../pictures/fruit-hd-wallpapers-03484-500x500.webp";
import foodpic from "../pictures/OIP.jpg";
import { Link } from "react-router-dom";
import Footer from "./footer";
const HomePage = () => {
  return (
    <div className=" ">
      <div className="bg-white  mt-28   mb-24 w-7/12  ml-80">
        <header className="bg-blue-500 text-white py-8 text-center ">
          <h1 className="text-3xl font-semibold  ">
            Welcome to Online Marketing Shopping
          </h1>
          <p className="text-lg mt-6">
            Discover the best deals and products online.
          </p>
        </header>
      </div>
      <div className="flex flex-col md:flex-row justify-center">
        {/* First card */}
        <div className="mx-3 mt-6 flex flex-col self-start rounded-lg bg-white shadow-md dark:bg-neutral-700 md:w-5/12 md:h-3/5">
          <Link to="bakery">
            <img
              className="rounded-t-lg w-full md:w-2/5 mx-auto mt-2"
              src={bakerypic}
              alt="a bakery picture"
            />
          </Link>
          <div className="p-6">
            <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
              bakery
            </h5>
            <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
              This is a longer card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
          </div>
        </div>

        {/* Second card */}
        <div className="mx-3 mt-6 flex flex-col self-start rounded-lg bg-white shadow-md dark:bg-neutral-700 md:w-5/12 md:h-3/5">
          <Link to="/foods">
            <img
              className="rounded-t-lg w-full md:w-2/5 mx-auto mt-2"
              src={foodpic}
              alt="a food picture"
            />
          </Link>
          <div className="p-6">
            <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
              foods
            </h5>
            <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
              This is a longer card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
          </div>
        </div>

        {/* Third card */}
        <div className="mx-3 mt-6 flex flex-col self-start rounded-lg bg-white shadow-md dark:bg-neutral-700 md:w-5/12 md:h-3/5">
          <Link to="/phone">
            <img
              className="rounded-t-lg w-full md:w-52   mx-auto mt-2"
              src={fruitpic}
              alt="a fruit picture"
            />
          </Link>
          <div className="p-6">
            <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
              fruits
            </h5>
            <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
              This is a longer card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-60">
        <Footer />
      </div>
    </div>
  );
};

export default HomePage;
