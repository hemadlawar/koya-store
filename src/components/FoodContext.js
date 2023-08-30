import React, { createContext, useContext, useState } from "react";

const FoodContext = createContext();

export function FoodProvider({ children }) {
  const [selectedFoods, setSelectedFoods] = useState([]);

  const addFood = (food) => {
    setSelectedFoods((prevSelectedFoods) => [...prevSelectedFoods, food]);
  };

  return (
    <FoodContext.Provider value={{ selectedFoods, addFood }}>
      {children}
    </FoodContext.Provider>
  );
}

export function useFoodContext() {
  return useContext(FoodContext);
}
