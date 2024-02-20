import React, { useState, useEffect } from "react";
import axios from "axios";
import Footer from "./footer";
// Function to fetch phone data from the Unsplash API
async function fetchPhoneData() {
  const apiKey = "YksZPx2fgk7jVESlPyLidsM9mbXQHB_-8mqIpqPhUEU";
  const searchQuery = "fruits";
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
      name: photo.alt_description || "Fruit", // Using the alt description as the name, fallback to "Fruit"
      price: "$" + (Math.floor(Math.random() * 100) + 1), // Generating a random price
    }));
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
}

function PhoneGallery({ itemm, setItem }) {
  /////
  const [phones, setPhones] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  //////
  //////
  useEffect(() => {
    async function fetchData() {
      const phoneData = await fetchPhoneData();
      setPhones(phoneData);
    }

    fetchData();
  }, []);

  // add item to db.json
  const handleAddToCart = async (item) => {
    setItem(itemm + 1);
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

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-6">Fruits</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {phones.map((phone, index) => (
          <div
            className="bg-white p-4 rounded-md shadow-md flex flex-col items-center justify-between"
            key={index}
          >
            <img
              src={phone.imageUrl}
              alt={`Phone ${index}`}
              className="mb-4 max-h-40"
            />
            <p className="text-lg font-semibold">{phone.name}</p>
            <p className="text-gray-600 bg-gray-300 my-2">${phone.price}</p>

            <button
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
              onClick={() => {
                handleAddToCart(phone);
              }}
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

export default PhoneGallery;
