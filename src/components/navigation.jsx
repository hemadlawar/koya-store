import { useEffect, useState } from "react";
import { Route, Routes, Link } from "react-router-dom";
import Goods from "./goods";
import Foods from "./foods";
import Phone from "./phone";
import Favourite from "./favourite";
import HomePage from "./home";
export default function Navigation() {
  const [itemm, setItem] = useState(0);

  const food = [];
  const blala = (data) => {
    food.push(data);
  };
  return (
    <div>
      <nav className="bg-blue-500 p-4">
        <div className="flex items-center justify-between flex-wrap">
          {" "}
          {/* Added 'flex-wrap' */}
          <h3 className="text-white font-bold text-xl sm:mb-4">
            Online shopping app
          </h3>{" "}
          {/* Added 'sm:mb-4' */}
          <ul className="flex space-x-4">
            <li>
              <Link
                to="/"
                className="text-white font-semibold text-lg hover:text-gray-200"
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                to="/bakery"
                className="text-white font-semibold text-lg hover:text-gray-200"
              >
                Bakary
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
                Fruits
              </Link>
            </li>
            <li>
              <Link
                to="/fav"
                className="text-white font-semibold text-lg hover:text-gray-200"
              >
                <div className="w-3 h-3 mr-7">List[{itemm}]</div>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/bakery"
          element={<Goods setItem={setItem} itemm={itemm} />}
        />
        <Route
          path="/foods"
          element={<Foods blala={blala} setItem={setItem} itemm={itemm} />}
        />
        <Route
          path="/phone"
          element={<Phone setItem={setItem} itemm={itemm} />}
        />
        <Route
          path="/fav"
          element={<Favourite food={food} setItem={setItem} itemm={itemm} />}
        />
      </Routes>
    </div>
  );
}
