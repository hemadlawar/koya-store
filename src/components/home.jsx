import React from "react";

const HomePage = () => {
  return (
    <div className=" mb-96">
      <div className="bg-white  mt-28 mb-10   w-8/12  mx-80">
        <header className="bg-blue-500 text-white py-8 text-center ">
          <h1 className="text-3xl font-semibold">
            Welcome to Online Marketing Shopping
          </h1>
          <p className="text-lg mt-6">
            Discover the best deals and products online.
          </p>
        </header>
      </div>
      <div className="grid-cols-1 sm:grid md:grid-cols-2">
        <div className="mx-3 mt-6 flex flex-col self-start rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 sm:shrink-0 sm:grow sm:basis-0">
          <a href="#!">
            <img
              className="rounded-t-lg"
              src="https://tecdn.b-cdn.net/img/new/standard/city/041.webp"
              alt="Hollywood Sign on The Hill"
            />
          </a>
          <div className="p-6">
            <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
              Card title
            </h5>
            <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
              This is a longer card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
          </div>
        </div>
        <div className="mx-3 mt-6 flex flex-col self-start rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 sm:shrink-0 sm:grow sm:basis-0">
          <a href="#!">
            <img
              className="rounded-t-lg"
              src="https://tecdn.b-cdn.net/img/new/standard/city/042.webp"
              alt="Palm Springs Road"
            />
          </a>
          <div className="p-6">
            <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
              Card title
            </h5>
            <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
              This is a longer card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
          </div>
        </div>
        <div className="mx-3 mt-6 flex flex-col self-start rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 sm:shrink-0 sm:grow sm:basis-0">
          <a href="#!">
            <img
              className="rounded-t-lg"
              src="https://tecdn.b-cdn.net/img/new/standard/city/044.webp"
              alt="Skyscrapers"
            />
          </a>
          <div className="p-6">
            <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
              Card title
            </h5>
            <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
              This is a longer card with supporting text below as a natural
              lead-in to additional content.
            </p>
          </div>
        </div>
        <div className="mx-3 mt-6 flex flex-col self-start rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 sm:shrink-0 sm:grow sm:basis-0">
          <a href="#!">
            <img
              className="rounded-t-lg"
              src="https://tecdn.b-cdn.net/img/new/standard/city/043.webp"
              alt="Los Angeles Skyscrapers"
            />
          </a>
          <div className="p-6">
            <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
              Card title
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
  );
};

export default HomePage;
