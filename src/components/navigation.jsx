import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import Goods from "./goods";
import Foods from "./foods";
import Phone from "./phone";

export default function Navigation() {
  return (
    <div>
      <nav className="bg-blue-500 p-4">
        <ul className="flex space-x-4">
          <li>
            <Link to="/" className="text-white hover:text-gray-200">
              Goods
            </Link>
          </li>
          <li>
            <Link to="/foods" className="text-white hover:text-gray-200">
              Foods
            </Link>
          </li>
          <li>
            <Link to="/phone" className="text-white hover:text-gray-200">
              Phone
            </Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Goods />} />
        <Route path="/foods" element={<Foods />} />
        <Route path="/phone" element={<Phone />} />
      </Routes>
    </div>
  );
}