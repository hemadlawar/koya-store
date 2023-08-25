import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import Goods from "./goods";
import Foods from "./foods";
import Phone from "./phone";
import Favourite from "./favourite";

export default function Navigation() {
  return (
    <div>
      <nav className="bg-blue-500 p-4">
        <div className="flex items-center justify-between flex-wrap">
          {" "}
          {/* Added 'flex-wrap' */}
          <h3 className="text-white font-bold text-xl sm:mb-4">
            koya Online shop
          </h3>{" "}
          {/* Added 'sm:mb-4' */}
          <ul className="flex space-x-4">
            <li>
              <Link
                to="/"
                className="text-white font-semibold text-lg hover:text-gray-200"
              >
                Goods
              </Link>
            </li>
            <li>
              <Link
                to="/foods"
                className="text-white font-semibold text-lg hover:text-gray-200"
              >
                Foods
              </Link>
            </li>
            <li>
              <Link
                to="/phone"
                className="text-white font-semibold text-lg hover:text-gray-200"
              >
                Phone
              </Link>
            </li>
            <li>
              <Link
                to="/fav"
                className="text-white font-semibold text-lg hover:text-gray-200"
              >
                Favourites
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Goods />} />
        <Route path="/foods" element={<Foods />} />
        <Route path="/phone" element={<Phone />} />
        <Route path="/fav" element={<Favourite />} />
      </Routes>
    </div>
  );
}
