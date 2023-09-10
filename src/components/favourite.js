import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Favourite() {
  const [list, setlists] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3001/cartItems")
      .then((res) => {
        setlists(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return list.map((list) => <div key={list.id}>{list.name}</div>);
}
