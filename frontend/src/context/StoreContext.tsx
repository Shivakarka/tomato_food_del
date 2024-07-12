import React, { createContext, useEffect, useState } from "react";
import { FoodItemType, StoreContextType } from "../../types.ts";
import axios from "axios";

export const StoreContext = createContext<StoreContextType | null>(null);

const StoreContextProvider = (props: { children: React.ReactNode }) => {
  const [cartItems, setCartItems] = useState<Record<string, number>>({});
  const url = "http://localhost:4000";
  const [token, setToken] = useState<string | null>(null);
  const [foodList, setFoodList] = useState<FoodItemType[]>([]);

  const addToCart = async (itemId: string) => {
    if (!cartItems[itemId]) {
      setCartItems((prev) => ({ ...prev, [itemId]: 1 }));
    } else {
      setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    }
    if (token) {
      try {
        await axios.post(
          `${url}/api/cart/add`,
          { itemId },
          { headers: { Authorization: `Bearer ${token}` } }
        );
      } catch (error) {
        console.log(error);
      }
    }
  };

  const decreaseItemFromCart = async (itemId: string) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    if (token) {
      try {
        await axios.post(
          `${url}/api/cart/remove`,
          { itemId },
          { headers: { Authorization: `Bearer ${token}` } }
        );
      } catch (error) {
        console.log(error);
      }
    }
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = foodList.find((product) => product?._id === item);
        totalAmount += itemInfo!?.price * cartItems[item];
      }
    }
    return totalAmount;
  };

  const deleteItemFromCart = (itemId: string) => {
    setCartItems((prev) => ({ ...prev, [itemId]: 0 }));
  };

  const fetchFoodList = async () => {
    try {
      const response = await axios.get(`${url}/api/food/list`);
      setFoodList(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const loadCart = async (token: string) => {
    try {
      const response = await axios.get(`${url}/api/cart`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setCartItems(response.data.cartData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchFoodList();
    const token = localStorage.getItem("token");
    if (token) {
      setToken(token);
      loadCart(localStorage.getItem("token") as string);
    }
  }, []);

  const contextValue = {
    foodList,
    cartItems,
    setCartItems,
    addToCart,
    decreaseItemFromCart,
    getTotalCartAmount,
    deleteItemFromCart,
    url,
    token,
    setToken,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
