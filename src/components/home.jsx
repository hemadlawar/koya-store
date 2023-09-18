import React from "react";
import bakerypic from "../pictures/Bakery.png";
import fruitpic from "../pictures/fruit-hd-wallpapers-03484-500x500.webp";
import foodpic from "../pictures/OIP.jpg";
import { Link } from "react-router-dom";
const HomePage = () => {
  /**
   * <Link
                to="/foods"
                className="text-white font-semibold text-lg hover:text-gray-200"
              >
                Foods
              </Link>
   */
  return (
    <div className=" mb-64">
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
      {/** cardss */}
      <div className=" ">
        {/*first and second card */}
        <div className="flex justify-center">
          {/* first card */}
          <div className="mx-3 mt-6 flex   flex-col self-start rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700  w-4/12  h-3/5">
            <Link to="bakery">
              <img
                className="rounded-t-lg   w-2/5   ml-20 mt-2 ml-44"
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

          {/* second card*/}

          <div className="mx-3 mt-6 flex    flex-col self-start rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700  w-4/12  h-3/5">
            <Link to="/foods">
              <img
                className="rounded-t-lg   w-2/5   ml-20 mt-2  ml-44"
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
        </div>
        {/** third and fourth card */}
        <div className="flex justify-center">
          {/* third card*/}

          <div className="mx-3 mt-6 flex      flex-col self-start rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 w-4/12  h-3/5">
            <Link to="/phone">
              <img
                className="rounded-t-lg  w-2/5  ml-20 mt-2 ml-44"
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
      </div>
    </div>
  );
};

export default HomePage;
