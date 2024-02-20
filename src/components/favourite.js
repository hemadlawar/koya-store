import React, { useState, useEffect } from "react";
import axios from "axios";
import Footer from "./footer";
export default function Favourite({ setItem, item }) {
  const [list, setLists] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/cartItems")
      .then((res) => {
        setLists(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleDelete = (id) => {
    // Send a DELETE request to remove the item from the server
    axios
      .delete(`http://localhost:3001/cartItems/${id}`)
      .then(() => {
        // Remove the deleted item from the local state
        const updatedList = list.filter((item) => item.id !== id);
        setLists(updatedList);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="container mx-auto py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {list.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-lg shadow-lg p-4 relative"
          >
            <button
              onClick={() => handleDelete(item.id)}
              className="absolute top-2 right-2 p-1 bg-red-500 text-white rounded-full hover:bg-red-600 transition duration-300 ease-in-out"
            >
              Delete
            </button>
            <div className="text-lg font-semibold">{item.name}</div>
            <img
              src={item.imageUrl}
              alt={item.name}
              className="mt-2 h-40 w-full object-cover"
            />
            <div className="mt-2 text-gray-700">${item.price}</div>
          </div>
        ))}
      </div>
      <div className="mt-192 w-full">
        {" "}
        <Footer />
      </div>
    </div>
  );
}
