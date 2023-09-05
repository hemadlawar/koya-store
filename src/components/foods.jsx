import React, { useState, useEffect } from "react";
import axios from "axios";

// Function to fetch food data from the Unsplash API
async function fetchFoodData() {
  const apiKey = "YksZPx2fgk7jVESlPyLidsM9mbXQHB_-8mqIpqPhUEU"; // Replace with your actual Unsplash API key
  const searchQuery = "food"; // Adjust the search query for food-related images
  const perPage = 30;

  try {
    const response = await axios.get(`https://api.unsplash.com/search/photos`, {
      headers: {
        Authorization: `Client-ID ${apiKey}`,
      },
      params: {
        query: searchQuery,
        per_page: perPage,
      },
    });

    return response.data.results.map((photo) => ({
      imageUrl: photo.urls.regular,
      name: photo.alt_description || "Food", // Using the alt description as the name, fallback to "Food"
      price: "$" + (Math.floor(Math.random() * 20) + 5), // Generating a random price
    }));
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
}

function FoodGallery({ blala }) {
  const [foods, setFoods] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const foodData = await fetchFoodData();
      setFoods(foodData);
    }

    fetchData();
  }, []);

  ////
  // add item to db.json
  const handleAddToCart = async (item) => {
    setCartItems([...cartItems, item]);

    try {
      const response = await axios.post(
        "http://localhost:3001/cartItems",
        item
      ); // Corrected URL
      console.log("Item added to cart:", response.name);
    } catch (error) {
      console.error("Error adding item to cart:", error);
    }
  };

  ///
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center">
      {/* ... (existing code remains the same) */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {foods.map((food, index) => (
          <div
            className="bg-white p-4 rounded-md shadow-md flex flex-col items-center justify-between"
            key={index}
          >
            <img
              src={food.imageUrl}
              alt={`food ${index}`}
              className="mb-4 max-h-40"
            />
            <p className="text-lg font-semibold">{food.name}</p>
            <p className="text-gray-600 bg-gray-300 my-2">${food.price}</p>

            {/* ... (existing code remains the same) */}
            <button
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
              onClick={() => {
                handleAddToCart(food);
              }}
            >
              ADD to list
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FoodGallery;
