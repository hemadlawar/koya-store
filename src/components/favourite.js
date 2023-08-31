import React from "react";

export default function Favourite({ food }) {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {food.map((foodItem, index) => (
          <div
            className="bg-white p-4 rounded-md shadow-md flex flex-col items-center justify-between"
            key={index}
          >
            <img
              src={foodItem.imageUrl}
              alt={`food ${index}`}
              className="mb-4 max-h-40"
            />
            <p className="text-lg font-semibold">{foodItem.name}</p>
            <p className="text-gray-600 bg-gray-300 my-2">${foodItem.price}</p>

            {/* ... (other content) */}
          </div>
        ))}
      </div>
    </div>
  );
}
