import React, { useState, useEffect } from "react";
import axios from "axios";
import Footer from "./footer";
// Function to fetch bakery data from the Unsplash API
async function fetchBakeryData() {
  const apiKey = "YksZPx2fgk7jVESlPyLidsM9mbXQHB_-8mqIpqPhUEU"; // Replace with your actual Unsplash API key
  const searchQuery = "bakery"; // Search for bakery-related images
  const perPage = 30;
  // connect to API and get data from API
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
      name: photo.alt_description || "Bakery", // Using the alt description as the name, fallback to "Bakery"
      price: "$" + (Math.floor(Math.random() * 20) + 5), // Generating a random price
    }));
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
}

function BakeryGallery({ setItem, item }) {
  const [bakeryItems, setBakeryItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const bakeryData = await fetchBakeryData();
      setBakeryItems(bakeryData);
    }

    fetchData();
  }, []);
  // add item to db.json
  const handleAddToCart = async (item, item2) => {
    setCartItems([...cartItems, item]);
    setItem(item2 + 1);

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

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-6">Bakery Gallery</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {bakeryItems.map((bakery, index) => (
          <div
            className="bg-white p-4 rounded-md shadow-md flex flex-col items-center justify-between"
            key={index}
          >
            <img
              src={bakery.imageUrl}
              alt={`Bakery ${index}`}
              className="mb-4 max-h-40"
            />
            <p className="text-lg font-semibold">{bakery.name}</p>
            <p className="text-gray-600 bg-gray-300 my-2">${bakery.price}</p>

            <button
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
              onClick={() => handleAddToCart(bakery, item)}
            >
              ADD to list
            </button>
          </div>
        ))}
      </div>
      <div className="mt-60  w-full">
        <Footer />
      </div>
    </div>
  );
}

export default BakeryGallery;
