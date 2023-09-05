import React from "react";

const HomePage = () => {
  return (
    <div className="bg-gray-100">
      <header className="bg-blue-500 text-white py-8 text-center">
        <h1 className="text-3xl font-semibold">
          Welcome to Online Marketing Shopping
        </h1>
        <p className="text-lg mt-2">
          Discover the best deals and products online.
        </p>
        <a
          href="#"
          className="bg-yellow-500 text-blue-900 px-6 py-3 mt-4 rounded-lg font-semibold hover:bg-yellow-600 transition duration-300 ease-in-out"
        >
          Shop Now
        </a>
      </header>

      <section className="container mx-auto py-12">
        <h2 className="text-2xl font-semibold mb-6 text-center">
          Featured Products
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Product 1 */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <img src="product1.jpg" alt="Product 1" className="mx-auto mb-4" />
            <h3 className="text-xl font-semibold">Product 1</h3>
            <p className="text-gray-600 mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <span className="text-xl font-semibold text-blue-500 mt-2">
              $49.99
            </span>
            <a
              href="#"
              className="block bg-blue-500 text-white px-4 py-2 rounded-lg mt-4 font-semibold hover:bg-blue-600 transition duration-300 ease-in-out"
            >
              Add to Cart
            </a>
          </div>
          {/* Add more product items here */}
        </div>
      </section>
    </div>
  );
};

export default HomePage;
